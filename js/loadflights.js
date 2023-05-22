dates = new Map();
dates.set(1, "Sunday");
dates.set(2, "Monday");
dates.set(3, "Tuesday");
dates.set(4, "Wednesday");
dates.set(5, "Thursday");
dates.set(6, "Friday");
dates.set(7, "Saturday");

const daysLater = 95;


//FLIGHT DATA------------------------------------------------------------------------------------------

/** flight class that is used to save booked flights*/
class Flight {
    /** contructor
     * @param dtB is the begin date of the flight
     * @param dtE is the end date of the flight
     * @param ty is the type of flight
     
    */
    constructor(dtB, dtE, ty) {
        this.dateBegin = dtB;
        this.dateEnd = dtE;
        this.type = ty;
    
        if(ty == "Savitir") {
            this.price = 20000
            this.timeStart = "9&nbsp;AM"
            this.timeEnd = "3&nbsp;PM"
        } else if (ty == "Aether") {
            this.price = 100000
            this.timeStart = "3&nbsp;PM"
            this.timeEnd = "3&nbsp;PM"
        } else if (ty == "Heimdall") {
            this.price = 10000
            this.timeStart = "2&nbsp;PM"
            this.timeEnd = "8&nbsp;PM"
        }
    
    }

    /** Set the room that the user is booking
     * @param rm is the room */
    setRoom(rm) {
        this.room = rm
        console.log("sucessfully set room to " + rm)
    }

    /** Set the tier of flight that the user is booking
     * @param tr is the class of flight */
    setFlightTier(tr) {
        this.flightTier = tr
    }

    /**Format Flight data as HTML to inject into the available flight data */
    format() {
        var dateString = this.timeStart + " <b>" + this.dateBegin + "</b> — " + this.timeEnd + " <b>" + this.dateEnd + "</b>";
        // var times = (this.type == "Aether" ? "" : ("<p class='date'>" + this.timeStart + " - " + this.timeEnd + "</p>" + (this.type == "Heimdall" ? "<p class='date'>&nbsp;</p>" : "")));
        return "<div class='flightinfo'>  <h1 class='type'>" + this.type + "</h1> <p>" + dateString + "</p> <button type='button' onclick='beginBook(this.value)' value=" + JSON.stringify(this) + "  class='button-main book'>Book</button> </div>"
    }

    setBegin(dtB) {
        this.dateBegin = dtB
    }
    
}


/**finds the date x days after today 
 * @param today - begin date, date of origin
 * @param x - days to increment
*/
function newDayXApart(today, x) {
    let eObj = new Date()
    eObj.setMonth(today.getMonth());
    eObj.setDate(today.getDate() + x);
    e = eObj.toLocaleDateString(undefined, {month:'numeric', day:'numeric'});
    return e;
}

function captialFirst(x) {
    return x.charAt(0).toUpperCase() + x.slice(1);
}


/**creates the set of upcoming flights and injects HTML */
function createFlights() {
    var today = new Date();
    today.setDate(today.getDate() + daysLater);
    num = 0;
    htmlInject = ''
    numEntries = 8 //number of entries on the page

    while(num < numEntries) {
        currDt = String(today.getDate()).padStart(2, '0');
        let b = today.toLocaleDateString(undefined, {month:'numeric', day:'numeric'});
        console.log(b)
        let e = ''
        let ty = ''
        if(currDt % 7 == 1) { // Saturday launch
            e = newDayXApart(today, 0);
            ty = "Heimdall"
            num++
        } else if (currDt % 7 == 2) { // Sunday launch
            e = newDayXApart(today, 1);
            ty = "Savitir"
            num++
        } else if (currDt % 7 == 6) { // Thursday launch
            e = newDayXApart(today, 8);
            ty = "Aether"
            num++
        }
        
        //add a new date to the HTML injection
        if(ty != "") { 
            var f = new Flight(b, e, ty)
            htmlInject += "<hr>" + f.format();
        } 
        
        today.setDate(today.getDate() + 1);
        currDt++;
    }

    //inject to HTML
    document.getElementById("aflightlist").innerHTML = htmlInject
}

/**Load the user booked flights */
function loadBookedFlights() {
    var htmlInject = ''
    let i = 0
    while(localStorage.getItem("bflight" + i) != null) {
        let flight = JSON.parse(localStorage.getItem("bflight" + i));
        if(flight.user == (JSON.parse(localStorage.getItem(sessionStorage.getItem("currentUser")))).username)
        htmlInject +=  "<hr><div class='flightinfo'> <div class='flightdtnm'> <p class='type'>" + flight.type + "</p> <p class='date'>"  + flight.timeStart + ' ' + flight.dateBegin + " - " + flight.timeEnd + ' ' + flight.dateEnd  + "  &emsp;|&emsp;  " + captialFirst(flight.room) + "</p> </div> </div>"
        if(flight.user == (JSON.parse(localStorage.getItem(sessionStorage.getItem("currentUser")))).username) {
            document.getElementById("yalefhe") ? document.getElementById("yalefhe").innerHTML = 'Time Until Your Flight' : null;
            document.getElementById("yabksome") ? document.getElementById("yabksome").style.display = 'none' : null;
            document.getElementById("reminders") ? document.getElementById("reminders").style.display = 'flex' : null;
            document.getElementById("yastatuses") ? document.getElementById("yastatuses").style.overflowY = 'hidden' : null;
            
            let timeconv = flight.timeStart.split(" ")[1] == "AM" ? flight.timeStart.split(" ")[0] + ":00:00 GMT-0500" : (parseInt(flight.timeStart.split(" ")[0]) + 12) + ":00:00 GMT-0500"
            let dtbg = parseInt(flight.dateBegin) < 10 ? '0' + flight.dateBegin : flight.dateBegin;
            console.log('2023/' + dtbg + " " + timeconv)
            let tmtil = new Date('2023/' + dtbg + " " + timeconv);
            // document.getElementById("flightm") ? document.getElementById("flightm").innerHTML = tmtil : null;

            var countDownDate = tmtil.getTime();
            var x = setInterval(function(){
                var now = new Date().getTime();
                var distance = countDownDate - now;
        
                var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);

                let tmstr = days + ":" + hours + ':' + minutes +':' + seconds;
            
                if(distance < 0){
                    clearInterval(x);
                    document.getElementById("flightm") ? document.getElementById("flightm").innerHTML = '00:00:00:00' : null;

                } else {
                    document.getElementById("flightm") ? document.getElementById("flightm").innerHTML = tmstr : null;
                }
            },1000);
        } 
        i++;
    }
    if (i == 0) {
        console.log("test");
        document.getElementById("yastatuses") ? document.getElementById("yastatuses").style.overflowY = 'hidden' : null;
        document.getElementById("yalefhe") ? document.getElementById("yalefhe").innerHTML = 'Book A Flight' : console.log("BAF not found");
        document.getElementById("flightm") ? document.getElementById("flightm").style.display = 'none' : null;
        document.getElementById("reminders").style.display = 'none';
        document.getElementById("yabksome").style.display = 'static';
        htmlInject += "<p>You haven't booked a vacation yet!</p>";
    }
    if(i > 4) {
        document.getElementById("yastatuses") ? document.getElementById("yastatuses").style.overflowY = 'scroll' : null;
    }

    document.getElementById("yastatuses").innerHTML = htmlInject
}

/**Trigger a booking event */ 
function beginBook(val) {
    localStorage.setItem("currentbook", val); //alternative to cookies that are not persistent after browser close for testing
    window.open("book.html", "_self");
}