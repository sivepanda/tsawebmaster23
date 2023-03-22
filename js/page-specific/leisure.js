var displayOn = 'grid';
var displayOff = 'none';

openMod('info')

function openMod(v) {
    console.log(v)
    switch(v) {
        case "info":
            document.getElementById("leis-info").style.display = displayOn;
            document.getElementById("leis-heim").style.display = displayOff;
            document.getElementById("leis-sav").style.display = displayOff;
            document.getElementById("leis-aeth").style.display = displayOff;

            document.getElementById('men-info').classList.add();
            document.getElementById('men-heim').classList.remove();
            document.getElementById('men-savi').classList.remove();
            document.getElementById('men-aeth').classList.remove();
            break;
        
            case "heimdall":
            document.getElementById("leis-info").style.display =displayOff;
            document.getElementById("leis-heim").style.display = displayOn;
            document.getElementById("leis-sav").style.display = displayOff;
            document.getElementById("leis-aeth").style.display = displayOff;
            break;
        
        case "aether":
            document.getElementById("leis-info").style.display =displayOff;
            document.getElementById("leis-heim").style.display = displayOff;
            document.getElementById("leis-sav").style.display= displayOff;
            document.getElementById("leis-aeth").style.display = displayOn;
            break;

        case "savitir":
            document.getElementById("leis-info").style.display =displayOff;
            document.getElementById("leis-heim").style.display= displayOff;
            document.getElementById("leis-sav").style.display= displayOn;
            document.getElementById("leis-aeth").style.display= displayOff;
            break;
    } 
}