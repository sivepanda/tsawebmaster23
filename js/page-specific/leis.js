function openMod(v) {
    var leis = document.getElementById("leis-info").style;
    var heim = document.getElementById("leis-heim").style;
    var sav = document.getElementById("leis-sav").style;
    var aeth = document.getElementById("leis-aeth").style;
    switch(v) {
        case info:
            leis ='block';
            heim = 'none';
            sav = 'none';
            aeth = 'none';
        case heimdall:
            leis ='none';
            heim = 'block';
            sav = 'none';
            aeth = 'none';
        case aether:
            leis ='none';
            heim = 'none';
            sav= 'none';
            aeth = 'block';
        case savitir:
            leis ='none';
            heim= 'none';
            sav= 'block';
            aeth= 'none';
    } 
}