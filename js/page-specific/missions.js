var height = window.innerHeight;
var width = window.innerWidth;

var isDesktop = (width / height) > (7 / 6);

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

        const map = new Map();

        map.set('plan', 'night-photograph-gf6a42c2d1_1920.jpg');
        map.set('train', '6549968087_72d08feb11_h.jpg');
        map.set('vehic', 'pexels-pixabay-2163.jpg');
        map.set('safet', 'soyuz-ga20620eb0_1920.jpg');
        map.set('launc', 'pexels-pixabay-2163.jpg'); //change
        map.set('recov', 'soyuz-ga20620eb0_1920.jpg'); //change

        miss.style.background = 'linear-gradient( rgba(1, 0, 0, 0.5) 0%, rgba(1, 0, 0, 0.5) 90%, rgba(1, 0, 0, 1) 100%), url(../resources/images/' + map.get('plan') + ')';
        miss.style.backgroundSize = 'cover';

        for(button in buttons) {
            if(button < buttons.length) {
                let x = button;
                buttons[x].addEventListener('click', () => {
                    let val = (buttons[x].getAttribute('value'));
                    miss.style.background = 'linear-gradient( rgba(1, 0, 0, 0.5) 0%, rgba(1, 0, 0, 0.5) 90%, rgba(1, 0, 0, 1) 100%), url(../resources/images/' + map.get(val) + ')';
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

