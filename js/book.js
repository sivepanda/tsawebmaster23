// var flight;

//FLIGHT DATA------------------------------------------------------------------------------------------

/** flight class that is used to save booked flights*/
class Flight {
    price = 0
    /** contructor
     * @param dtB is the begin date of the flight
     * @param dtE is the end date of the flight
     * @param ty is the type of flight
     
    */
    constructor(dtB, dtE, ty) {
        this.dateBegin = dtB;
        this.dateEnd = dtE;
        this.type = ty;
    }

    /** Set the room that the user is booking
     * @param rm is the room */
    setRoom(rm, pr) {
        this.room = rm;
        document.getElementById("roomselect") ? document.getElementById("roomselect").style.display = "none" : null;
        document.getElementById("flightselect") ? document.getElementById("flightselect").style.display = "block" : null;
        document.getElementById("staystep") ? document.getElementById("staystep").classList.toggle("activeb") : null;
        document.getElementById("flightstep") ? document.getElementById("flightstep").classList.toggle("activeb") : null;
        
        this.price += pr;
        console.log("sucessfully set room to " + rm)
    }

    /** Set the tier of flight that the user is booking
     * @param tr is the class of flight */
    setFlightTier(tr) {
        this.flightTier = tr
    }

    /**Format Flight data as HTML to inject into the available flight data */
    format() {
        return "<div class='flightinfo'> <div class='flightdtnm'>  <p class='type'>" + this.type + "</p> <p class='date'>" + this.dateBegin + " - " + this.dateEnd + "</p> </div> <button type='button' onclick='beginBook(this.value)' value=" + JSON.stringify(this) + "  class='button-main book'>Book</button> </div>"
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



// PAGE INITIALIZATION ------------------------------------------

document.getElementById("flighttype") ? initializeAccount() : null;

function initializeAccount() {
    //set active flight variable
    flight = JSON.parse(localStorage.getItem("currentbook"));
    flight = new Flight(flight.dateBegin, flight.dateEnd, flight.type)
    document.getElementById("flighttype") ? document.getElementById("flighttype").innerHTML = flight.type : null;
    document.getElementById("flightselect") ? document.getElementById("flightselect").style.display = "none" : null;
}

function setTier(tr) {
    flight.setFlightTier(tr)
}