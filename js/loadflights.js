dates = new Map();
dates.set(1, "Sunday");
dates.set(2, "Monday");
dates.set(3, "Tuesday");
dates.set(4, "Wednesday");
dates.set(5, "Thursday");
dates.set(6, "Friday");
dates.set(7, "Saturday");

class Flight {
    constructor(dtB, dtE, ty) {
        this.dateBegin = dtB;
        this.dateEnd = dtE;
        this.type = ty;
    }

    format() {
        return "<div class='flightinfo'> <div class='flightdtnm'>  <p class='type'>" + this.type + "</p> <p class='date'>" + this.dateBegin + " - " + this.dateEnd + "</p> </div> <button type='button' class='button-main book'>Book</button> </div>"
    }

    setBegin(dtB) {
        this.dateBegin = dtB
    }
    
}

function newDayXApart(today, x) {
    let eObj = new Date()
    eObj.setDate(today.getDate() + x);
    e = eObj.toLocaleDateString(undefined, {month:'numeric', day:'numeric'});
    return e;
}

function createFlights() {
    var today = new Date();
    num = 0;
    htmlInject = ''

    while(num < 3) {
        currDt = String(today.getDate()).padStart(2, '0');
        let b = today.toLocaleDateString(undefined, {month:'numeric', day:'numeric'});
        console.log(b)
        let e = ''
        let ty = ''
        if(currDt % 7 == 1) { // Saturday launch
            e = newDayXApart(today, 1);
            ty = "Heimdall"
            num++
        } else if (currDt % 7 == 4) { // Sunday launch
            e = newDayXApart(today, 3);
            ty = "Savitir"
            num++
        } else if (currDt % 7 == 6) { // Thursday launch
            e = newDayXApart(today, 5);
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
    document.getElementById("aflightlist").innerHTML = htmlInject
}