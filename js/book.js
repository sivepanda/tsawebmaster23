var months = new Map();
months.set('1', "January");
months.set('2', "February");
months.set('3', "March");
months.set('4', "April");
months.set('5', "May");
months.set('6', "June");
months.set('7', "July");
months.set('8', "August");
months.set('9', "September");
months.set('10', "October");
months.set('11', "November");
months.set('12', "December");


var flightdurations = new Map();
flightdurations.set("Heimdall", '6 hours');
flightdurations.set("Savitir", '30 hours');
flightdurations.set("Aether", '8 days');


//FLIGHT DATA------------------------------------------------------------------------------------------

/** flight class that is used to save booked flights*/
class Flight {
    price = 0
    /** contructor
     * @param dtB is the begin date of the flight
     * @param dtE is the end date of the flight
     * @param ty is the type of flight
     
    */
    constructor(dtB, dtE, ty, pr, tmS, tmE) {
        this.dateBegin = dtB;
        this.dateEnd = dtE;
        this.type = ty;
        this.price = pr
        this.timeStart = tmS;
        this.timeEnd = tmE;
    }

    /**Attaches flight to a specific user */
    setUser(u) {
        this.user = u
    }

    /** Set the room that the user is booking
     * @param rm is the room */
    setRoom(rm, pr) {
        this.room = rm;
        //change indicators to show new div
        document.getElementById("roomselect") ? document.getElementById("roomselect").style.display = "none" : null;
        document.getElementById("trainselect") ? document.getElementById("trainselect").style.display = "grid" : null;
        document.getElementById("confirmselect") ? document.getElementById("confirmselect").style.display = "none" : null;
        document.getElementById("staystep") ? document.getElementById("staystep").classList.remove("bactive") : null;
        document.getElementById("schedstep") ? document.getElementById("schedstep").classList.add("bactive") : null;
        document.getElementById("confstep") ? document.getElementById("confstep").classList.remove("bactive") : null;
        
        document.getElementById("flightname") ? document.getElementById("flightname").innerHTML = this.type : null;

        let today = new Date();
        document.getElementById("heachdt") ? document.getElementById("heachdt").min = ('td', today.toISOString().replace(/T.*/,'').split('-').join('-')) : null;
        document.getElementById("heachdt") ? document.getElementById("heachdt").value = ('td', today.toISOString().replace(/T.*/,'').split('-').join('-')) : null;
        document.getElementById("trachdt") ? document.getElementById("trachdt").min = ('td', today.toISOString().replace(/T.*/,'').split('-').join('-')) : null;
        document.getElementById("trachdt") ? document.getElementById("trachdt").value = ('td', today.toISOString().replace(/T.*/,'').split('-').join('-')) : null;
        today.setDate(today.getDate() + 40);
        document.getElementById("heachdt") ? document.getElementById("heachdt").max = ('las', today.toISOString().replace(/T.*/,'').split('-').join('-')) : null;
    
        let dateBeginString = months.get(this.dateBegin.split('/')[0]) + ' ' + this.dateBegin.split('/')[1];
        let dateEndString = months.get(this.dateEnd.split('/')[0]) + ' ' + this.dateEnd.split('/')[1];
        
        document.getElementById("starttm") ? document.getElementById("starttm").innerHTML = this.timeStart + "  | <b>" + dateBeginString  + "</b>": null;
        document.getElementById("endtm") ? document.getElementById("endtm").innerHTML = this.timeEnd + "  | <b>" + dateEndString + "</b>" : null;
        document.getElementById("durationtm") ? document.getElementById("durationtm").innerHTML = flightdurations.get(this.type) : null;
        
        this.price += pr;

        //populate div
        // this.viewReciept()


        console.log("sucessfully set room to " + rm + " price " + this.price)
    }

    /**View confirmation reciept */
    viewReciept() {
        this.healthCheckDt = document.getElementById("heachdt") ? document.getElementById("heachdt").value : null;
        this.trainDt = document.getElementById("trachdt") ? document.getElementById("trachdt").value : null;

        //change indicators to show new div
        document.getElementById("roomselect") ? document.getElementById("roomselect").style.display = "none" : null;
        document.getElementById("trainselect") ? document.getElementById("trainselect").style.display = "none" : null;
        document.getElementById("confirmselect") ? document.getElementById("confirmselect").style.display = "grid" : null;
        document.getElementById("staystep") ? document.getElementById("staystep").classList.remove("bactive") : null;
        document.getElementById("schedstep") ? document.getElementById("schedstep").classList.remove("bactive") : null;
        document.getElementById("confstep") ? document.getElementById("confstep").classList.add("bactive") : null;

        let dateBeginString = months.get(this.dateBegin.split('/')[0]) + ' ' + this.dateBegin.split('/')[1];
        let dateEndString = months.get(this.dateEnd.split('/')[0]) + ' ' + this.dateEnd.split('/')[1];
        let dtHealthCStr = months.get(String(parseInt(this.healthCheckDt.split('-')[1]))) + ' ' + this.healthCheckDt.split('-')[2];
        let dtTrainCStr = months.get(String(parseInt(this.trainDt.split('-')[1]))) + ' ' + this.trainDt.split('-')[2];
        
        document.getElementById("tyc") ? document.getElementById("tyc").innerHTML = flight.type : null;

        document.getElementById("tmsc") ? document.getElementById("tmsc").innerHTML = this.timeStart + "  | <b>" + dateBeginString  + "</b>": null;
        document.getElementById("tmec") ? document.getElementById("tmec").innerHTML = this.timeEnd + "  | <b>" + dateEndString + "</b>" : null;
        document.getElementById("durc") ? document.getElementById("durc").innerHTML = flightdurations.get(this.type) : null;
        
        document.getElementById("tmhc") ? document.getElementById("tmhc").innerHTML = dtHealthCStr : null;
        document.getElementById("tmtc") ? document.getElementById("tmtc").innerHTML = dtTrainCStr : null;

        document.getElementById("rmc") ? document.getElementById("rmc").innerHTML =  " " + captialFirst(flight.room) : null;
        document.getElementById("prc") ? document.getElementById("prc").innerHTML +=  flight.price.toLocaleString('en-US') : null;


        // document.getElementById("tmc") ? document.getElementById("tmc").innerHTML += ' ' + flight.dateBegin + " - " + flight.dateEnd : null;
    }

    /**Format Flight data as HTML to inject into the available flight data */
    format() {
        return "<div class='flightinfo'> <div class='flightdtnm'>  <p class='type'>" + this.type + "</p> <p class='date'>" + this.dateBegin + " - " + this.dateEnd + "</p> </div> <button type='button' onclick='beginBook(this.value)' value=" + JSON.stringify(this) + "  class='button-main book'>Book</button> </div>"
    }

    setBegin(dtB) {
        this.dateBegin = dtB
    }

    confRoom() {
        this.setUser((JSON.parse(localStorage.getItem(sessionStorage.getItem("currentUser")))).username);
        localStorage.setItem(newestFlight(), JSON.stringify(this));
        window.open("your-account.html", "_self");     
    }
}

function goBack() {
    document.getElementById("tyc") ? document.getElementById("tyc").innerHTML = 'Type' : null;
    document.getElementById("tmc") ? document.getElementById("tmc").innerHTML = 'Time:' : null;
    document.getElementById("rmc") ? document.getElementById("rmc").innerHTML =  "Room:" : null;
    document.getElementById("prc") ? document.getElementById("prc").innerHTML =  "Price: $" : null;
    document.getElementById("roomselect") ? document.getElementById("roomselect").style.display = "grid" : null;
    document.getElementById("trainselect") ? document.getElementById("trainselect").style.display = "none" : null;
    document.getElementById("confirmselect") ? document.getElementById("confirmselect").style.display = "none" : null;
    document.getElementById("staystep") ? document.getElementById("staystep").classList.add("bactive") : null;
    document.getElementById("schedstep") ? document.getElementById("schedstep").classList.remove("bactive") : null;
    document.getElementById("confstep") ? document.getElementById("confstep").classList.remove("bactive") : null;
}

function newDayXApart(today, x) {
    let eObj = new Date()
    eObj.setDate(today.getDate() + x);
    e = eObj.toLocaleDateString(undefined, {month:'numeric', day:'numeric'});
    return e;
}

/**Capitalizes first character of string */
function captialFirst(x) {
    return x.charAt(0).toUpperCase() + x.slice(1);
}

// COOKIES --------------------------------------------------------

function setCookie(cname, cvalue) {
    document.cookie += cname + "=" + cvalue + ";";
    return cname + "=" + cvalue + ";";
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function cookieExists(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return true;
        }
    }
    return false;
}

function getAndParseCookie(cname) {
    return JSON.parse(getCookie(cname));
}

/**Return the name of the next flight */
function newestFlight() {
    let i = 0
    while(localStorage.getItem("bflight" + i) != null) {
        i++;
    }
    return ("bflight" + i);
}



// PAGE INITIALIZATION ------------------------------------------

document.getElementById("flighttype") ? initializeAccount() : null;

function initializeAccount() {
    //set active flight variable
    flight = JSON.parse(localStorage.getItem("currentbook"));
    flight = new Flight(flight.dateBegin, flight.dateEnd, flight.type, flight.price, flight.timeStart, flight.timeEnd);
    // document.getElementById("flighttype") ? document.getElementById("flighttype").innerHTML = flight.type : null;
    document.getElementById("trainselect") ? document.getElementById("trainselect").style.display = "none" : null;
    document.getElementById("confirmselect") ? document.getElementById("confirmselect").style.display = "none" : null;
    document.getElementById("staystep") ? document.getElementById("staystep").classList.add("bactive") : null;
    document.getElementById("schedstep") ? document.getElementById("schedstep").classList.remove("bactive") : null;
    document.getElementById("confstep") ? document.getElementById("confstep").classList.remove("bactive") : null;
}

function setTier(tr) {
    flight.setFlightTier(tr)
}