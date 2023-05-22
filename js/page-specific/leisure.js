const displayOn = 'grid';
const displayOff = 'none';

const allAmenDisOn = 'block';

openMod('info');
$( "#awefasd" ).textfit('bestfit');


function openMod(v) {
    console.log(v)
    switch(v) {
        case "info":
            document.getElementById("leis-info").style.display = displayOn;
            document.getElementById("leis-heim").style.display = displayOff;
            document.getElementById("leis-sav").style.display = displayOff;
            document.getElementById("leis-aeth").style.display = displayOff;

            document.getElementById("allamen-heim").style.display = displayOff;
            document.getElementById("allamen-sav").style.display = displayOff;
            document.getElementById("allamen-aeth").style.display = displayOff;

            document.getElementById('men-info').classList.add('smenuactive');
            document.getElementById('men-heim').classList.remove('smenuactive');
            document.getElementById('men-savi').classList.remove('smenuactive');
            document.getElementById('men-aeth').classList.remove('smenuactive');
            break;
        
            case "heimdall":
            document.getElementById("leis-info").style.display =displayOff;
            document.getElementById("leis-heim").style.display = displayOn;
            document.getElementById("leis-sav").style.display = displayOff;
            document.getElementById("leis-aeth").style.display = displayOff;

            document.getElementById("allamen-heim").style.display = allAmenDisOn;
            document.getElementById("allamen-sav").style.display = displayOff;
            document.getElementById("allamen-aeth").style.display = displayOff;

            document.getElementById('men-info').classList.remove('smenuactive');
            document.getElementById('men-heim').classList.add('smenuactive');
            document.getElementById('men-savi').classList.remove('smenuactive');
            document.getElementById('men-aeth').classList.remove('smenuactive');
            break;
        
        case "aether":
            document.getElementById("leis-info").style.display =displayOff;
            document.getElementById("leis-heim").style.display = displayOff;
            document.getElementById("leis-sav").style.display= displayOff;
            document.getElementById("leis-aeth").style.display = displayOn;

            document.getElementById("allamen-heim").style.display = displayOff;
            document.getElementById("allamen-sav").style.display = displayOff;
            document.getElementById("allamen-aeth").style.display = allAmenDisOn;

            document.getElementById('men-info').classList.remove('smenuactive');
            document.getElementById('men-heim').classList.remove('smenuactive');
            document.getElementById('men-savi').classList.remove('smenuactive');
            document.getElementById('men-aeth').classList.add('smenuactive');
            break;

        case "savitir":
            document.getElementById("leis-info").style.display =displayOff;
            document.getElementById("leis-heim").style.display= displayOff;
            document.getElementById("leis-sav").style.display= displayOn;
            document.getElementById("leis-aeth").style.display= displayOff;

            document.getElementById("allamen-heim").style.display = displayOff;
            document.getElementById("allamen-sav").style.display = allAmenDisOn;
            document.getElementById("allamen-aeth").style.display = displayOff;

            document.getElementById('men-info').classList.remove('smenuactive');
            document.getElementById('men-heim').classList.remove('smenuactive');
            document.getElementById('men-savi').classList.add('smenuactive');
            document.getElementById('men-aeth').classList.remove('smenuactive');
            break;
    } 
}

