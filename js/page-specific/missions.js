var height = window.innerHeight;
var width = window.innerWidth;

var isDesktop = (width / height) > (7 / 6);

var iter = 0;

loadMissions();

window.addEventListener("resize", loadMissions());

function swViw(m) {
    var h = 'mh-';
    var d = 'md-';
    var active = 'grid';
    var inac = 'none';

    switch(m) {
        case 0:
            var x = 'plan';
            document.getElementById(h + x).style.display = active;
            document.getElementById(d + x).style.display = active;
            
            x = 'train';
            document.getElementById(h + x).style.display = inac;
            document.getElementById(d + x).style.display = inac;

            x = 'vehic';
            document.getElementById(h + x).style.display = inac;
            document.getElementById(d + x).style.display = inac;

            x = 'safe';
            document.getElementById(h + x).style.display = inac;
            document.getElementById(d + x).style.display = inac;

            x = 'laun';
            document.getElementById(h + x).style.display = inac;
            document.getElementById(d + x).style.display = inac;

            x = 'recov';
            document.getElementById(h + x).style.display = inac;
            document.getElementById(d + x).style.display = inac;
            break;
        case 1:
            var x = 'plan';
            document.getElementById(h + x).style.display = inac;
            document.getElementById(d + x).style.display = inac;
            
            x = 'train';
            document.getElementById(h + x).style.display = active;
            document.getElementById(d + x).style.display = active;

            x = 'vehic';
            document.getElementById(h + x).style.display = inac;
            document.getElementById(d + x).style.display = inac;

            x = 'safe';
            document.getElementById(h + x).style.display = inac;
            document.getElementById(d + x).style.display = inac;

            x = 'laun';
            document.getElementById(h + x).style.display = inac;
            document.getElementById(d + x).style.display = inac;

            x = 'recov';
            document.getElementById(h + x).style.display = inac;
            document.getElementById(d + x).style.display = inac;
            break;
        case 2:
            var x = 'plan';
            document.getElementById(h + x).style.display = inac;
            document.getElementById(d + x).style.display = inac;
            
            x = 'train';
            document.getElementById(h + x).style.display = inac;
            document.getElementById(d + x).style.display = inac;

            x = 'vehic';
            document.getElementById(h + x).style.display = active;
            document.getElementById(d + x).style.display = active;

            x = 'safe';
            document.getElementById(h + x).style.display = inac;
            document.getElementById(d + x).style.display = inac;

            x = 'laun';
            document.getElementById(h + x).style.display = inac;
            document.getElementById(d + x).style.display = inac;

            x = 'recov';
            document.getElementById(h + x).style.display = inac;
            document.getElementById(d + x).style.display = inac;
            break;
        case 3:
            var x = 'plan';
            document.getElementById(h + x).style.display = inac;
            document.getElementById(d + x).style.display = inac;
            
            x = 'train';
            document.getElementById(h + x).style.display = inac;
            document.getElementById(d + x).style.display = inac;

            x = 'vehic';
            document.getElementById(h + x).style.display = inac;
            document.getElementById(d + x).style.display = inac;

            x = 'safe';
            document.getElementById(h + x).style.display = active;
            document.getElementById(d + x).style.display = active;

            x = 'laun';
            document.getElementById(h + x).style.display = inac;
            document.getElementById(d + x).style.display = inac;

            x = 'recov';
            document.getElementById(h + x).style.display = inac;
            document.getElementById(d + x).style.display = inac;
            break;
        case 4:
                var x = 'plan';
                document.getElementById(h + x).style.display = inac;
                document.getElementById(d + x).style.display = inac;
                
                x = 'train';
                document.getElementById(h + x).style.display = inac;
                document.getElementById(d + x).style.display = inac;

                x = 'vehic';
                document.getElementById(h + x).style.display = inac;
                document.getElementById(d + x).style.display = inac;

                x = 'safe';
                document.getElementById(h + x).style.display = inac;
                document.getElementById(d + x).style.display = inac;

                x = 'laun';
                document.getElementById(h + x).style.display = active;
                document.getElementById(d + x).style.display = active;

                x = 'recov';
                document.getElementById(h + x).style.display = inac;
                document.getElementById(d + x).style.display = inac;
                break;
        case 5:
                var x = 'plan';
                document.getElementById(h + x).style.display = inac;
                document.getElementById(d + x).style.display = inac;
                
                x = 'train';
                document.getElementById(h + x).style.display = inac;
                document.getElementById(d + x).style.display = inac;

                x = 'vehic';
                document.getElementById(h + x).style.display = inac;
                document.getElementById(d + x).style.display = inac;

                x = 'safe';
                document.getElementById(h + x).style.display = inac;
                document.getElementById(d + x).style.display = inac;

                x = 'laun';
                document.getElementById(h + x).style.display = inac;
                document.getElementById(d + x).style.display = inac;

                x = 'recov';
                document.getElementById(h + x).style.display = active;
                document.getElementById(d + x).style.display = active;
                break;
    }
}

function loadMissions() {
    if (isDesktop) {
        var buttons = document.getElementsByClassName("bb");
        var fields = document.getElementsByClassName("infoss");
        var miss = document.getElementById("missbkg");

        var injs = document.getElementsByClassName('inj-item');
        
        if(iter == 0) {
            for (inj in injs) {
                let y = parseInt(inj);
                if(y < injs.length) {
                    injs[y].addEventListener('mouseup', (e) => {
                        console.log("a",y)
                        injs[y].classList.toggle('active');
                        // clks++;
                    });
                }
            }
            iter++;
        }

        // $( "#mppl0" ).textfit('bestfit');

        

        const map = new Map();

        map.set('plan', 'linear-gradient(0deg, rgba(24,24,24,1) 94%, rgba(54,0,0,1) 100%)');
        map.set('train', 'linear-gradient(0deg, rgba(24,24,24,1) 94%, rgba(54,37,0,1) 100%)');
        map.set('vehic', 'linear-gradient(0deg, rgba(24,24,24,1) 94%, rgba(0,54,16,1) 100%)');
        map.set('safet', 'linear-gradient(0deg, rgba(24,24,24,1) 94%, rgba(0,51,54,1) 100%)');
        map.set('launc', 'linear-gradient(0deg, rgba(24,24,24,1) 94%, rgba(12,0,54,1) 100%)'); //change
        map.set('recov', 'linear-gradient(0deg, rgba(24,24,24,1) 94%, rgba(54,0,47,1) 100%)'); //change

        miss.style.background = map.get('plan');
        miss.style.backgroundSize = 'cover';

        for(button in buttons) {
            if(button < buttons.length) {
                let x = button;
                buttons[x].addEventListener('click', () => {
                    let val = (buttons[x].getAttribute('value'));
                    miss.style.background = map.get(val);
                    miss.style.backgroundSize = 'cover';
                    miss.style.backgroundPosition = 'bottom';

                    for(button of buttons) {
                        button.classList.remove('bactive');
                    }

                    for(field in fields) {
                        let y = field;
                        if(fields[y].getAttribute("value") == val) {
                            fields[y].style.display = 'block';
                            buttons[x].classList.add("bactive");
                            console.log(buttons[x].classList);
                        } else {
                            fields[y].style.display = 'none';
                            // buttons[x].classList.remove("bactive");
                            console.log(buttons[x].classList);
                        }
                    }
                });
            }
        }
    } else {
        
        var c = 0;

        document.getElementById('leftarr').addEventListener("click", function() {
            if(c==0) {
                c = 5;
            } else{
                c--;
            }
            console.log(c);
            swViw(c);
        });

        document.getElementById('riarr').addEventListener("click", function() {
            c = c == 5 ? 0 : c++;
            if(c==5) {
                c = 0;
            } else{
                c++;
            }
            console.log(c);
            swViw(c);
        });

        swViw(c);
        
    }
}

