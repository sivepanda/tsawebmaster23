//FLIGHT DATA------------------------------------------------------------------------------------------

/** flight class that is used to save booked flights*/
class Flight {
    price = 0
    /** contructor
     * @param dtB is the begin date of the flight
     * @param dtE is the end date of the flight
     * @param ty is the type of flight
     
    */
    constructor(dtB, dtE, ty, pr) {
        this.dateBegin = dtB;
        this.dateEnd = dtE;
        this.type = ty;
        this.price = pr
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
        document.getElementById("confirmselect") ? document.getElementById("confirmselect").style.display = "grid" : null;
        document.getElementById("staystep") ? document.getElementById("staystep").classList.remove("bactive") : null;
        document.getElementById("confstep") ? document.getElementById("confstep").classList.add("bactive") : null;
        
        this.price += pr;

        //populate div
        this.viewReciept()


        console.log("sucessfully set room to " + rm + " price " + this.price)
    }

    /**View confirmation reciept */
    viewReciept() {
        document.getElementById("tyc") ? document.getElementById("tyc").innerHTML += ' ' + flight.type : null;
        document.getElementById("tmc") ? document.getElementById("tmc").innerHTML += ' ' + flight.dateBegin + " - " + flight.dateEnd : null;
        document.getElementById("rmc") ? document.getElementById("rmc").innerHTML +=  " " + captialFirst(flight.room) : null;
        document.getElementById("prc") ? document.getElementById("prc").innerHTML +=  flight.price.toLocaleString('en-US') : null;
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
    document.getElementById("confirmselect") ? document.getElementById("confirmselect").style.display = "none" : null;
    document.getElementById("staystep") ? document.getElementById("staystep").classList.add("bactive") : null;
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
    flight = new Flight(flight.dateBegin, flight.dateEnd, flight.type, flight.price)
    document.getElementById("flighttype") ? document.getElementById("flighttype").innerHTML = flight.type : null;
    document.getElementById("confirmselect") ? document.getElementById("confirmselect").style.display = "none" : null;
    document.getElementById("staystep") ? document.getElementById("staystep").classList.add("bactive") : null;
        document.getElementById("confstep") ? document.getElementById("confstep").classList.remove("bactive") : null;
}

function setTier(tr) {
    flight.setFlightTier(tr)
}