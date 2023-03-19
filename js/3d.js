// import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
// import { MTLLoader } from 'three/addons/loaders/MTLLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// import { CSS3DRenderer, CSS3DObject } from 'three/addons/renderers/CSS3DRenderer.js';
// import { CSS3DObject } from 'three/addons/renderers/CSS3DObject.js';

// animating POSES https://dev.to/pahund/animating-camera-movement-in-three-js-17e9
//need to figure out in betweening and smooth scroll, then move to scroll triggered setpoints

import * as THREE from 'three';


const scene = new THREE.Scene();

scene.background = new THREE.Color( 0x10141f );

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
console.log("test")
const renderer = new THREE.WebGLRenderer({
	canvas: document.querySelector("#bg"),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.outputEncoding = THREE.sRGBEncoding;

// const controls = new OrbitControls(camera, renderer.domElement);

// camera.position.set(0, 10, 10);
// controls.update();
// camera.rotation.z = -0.5 * Math.PI

const initialPos = { pX: 51.01524580786668, pY: 24.769041060658182, pZ: 3.206434156862591, rX: -2.1372814386131957, rY: 1.5289153750073772, rZ: 2.137678770503264 }
camera.position.set(initialPos.pX, initialPos.pY, initialPos.pZ);
camera.rotation.set(initialPos.rX, initialPos.rY, initialPos.rZ);


renderer.render( scene, camera );

const base = '../resources/3d/';

const loader = new GLTFLoader();
loader.load(
	(base + 'SavitirII.gltf'),
	function ( gltf ) {

		scene.add( gltf.scene );

		gltf.animations; // Array<THREE.AnimationClip>
		// gltf.scene; // THREE.Group
		gltf.scenes; // Array<THREE.Group>
		gltf.cameras; // Array<THREE.Camera>
		gltf.asset; // Object

	},
	// called while loading is progressing
	function ( xhr ) {
		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
		if((xhr.loaded / xhr.total * 100) == 100) {
			isLoaded = true;
    		loaded();
		}
	},
	// called when loading has errors
	function ( error ) {

		console.log( 'An error happened' );

	}
)

/*LOADING SCREEN */
/**what happens when the page loads*/
function loaded() {
    if (isLoaded && timerComplete && document.getElementById("loadtank")) {
        var load = document.getElementById("loadtank");
        load.remove();
        document.getElementById("ic0") ? document.querySelector("#ic0 h1").classList.add("showh1") : console.log('ic0 not found');
        document.getElementById("ic0") ? document.querySelector("#ic0 p").classList.add("showp") : console.log('ic0 not found');
        
        // REENABLE BELOW
        document.getElementById("")
        window.clearTimeout(loadInterval);
        console.log('Page loaded successfully');
    }
}
var loadInterval; 
loadInterval = setInterval(function() {
    timerComplete = true;
    loaded();
}, 1500);

const pointLight = new THREE.PointLight(0xffffff);

const ambientLight = new THREE.AmbientLight(0xffffff, 1);

scene.add(pointLight, ambientLight)

const lightHelper = new THREE.PointLightHelper(pointLight)
// scene.add(lightHelper);


/**This function is to set the different setpoints around the rocket that can be triggered */
function setCameraSetpoint(setpoint) {
	const cameraCoords = { pX: camera.position.x, pY: camera.position.y, pZ: camera.position.z, 
		rX: camera.rotation.x, rY: camera.rotation.y, rZ: camera.rotation.z };
	switch(setpoint) {
		case 1: // full
			const beginPosCoords = initialPos
				new TWEEN.Tween(cameraCoords)
				.to(beginPosCoords)
				.onUpdate(() => {
					camera.position.set(cameraCoords.pX, cameraCoords.pY, cameraCoords.pZ);
					camera.rotation.set(cameraCoords.rX, cameraCoords.rY, cameraCoords.rZ);
				})
				.start();
			break;
		case 2: // engines
			const engPosCoords = { pX: 22.05347969148621, pY: 39.991102135685956, pZ: 8.893895397272937, rX: -0.544721600897651, rY: 1.2820589436701435, rZ: 0.5261715167399206 };
			new TWEEN.Tween(cameraCoords)
				.to(engPosCoords)
				.onUpdate(() => {
					camera.position.set(cameraCoords.pX, cameraCoords.pY, cameraCoords.pZ);
					camera.rotation.set(cameraCoords.rX, cameraCoords.rY, cameraCoords.rZ);
				})
				.start();
			break;
		case 3: //midstage
			const midPosCoords = { pX: 19.37806337681007, pY: 19.094876558846455, pZ: 18.46656749750288, rX: 0.027347843719511974, rY: 0.887792160373571, rZ: -0.02121528783530727 };
				new TWEEN.Tween(cameraCoords)
				.to(midPosCoords)
				.onUpdate(() => {
					camera.position.set(cameraCoords.pX, cameraCoords.pY, cameraCoords.pZ);
					camera.rotation.set(cameraCoords.rX, cameraCoords.rY, cameraCoords.rZ);
				})
				.start();
			break;
		case 4: //midstage
			const wholePosCoords = { pX: 17.63753837917099, pY: -13.922313862705211, pZ: 1.2919511048835266, rX: 1.5438197439977774, rY: 0.7608679890233997, rZ: -1.5316847970593994 };
				new TWEEN.Tween(cameraCoords)
				.to(wholePosCoords)
				.onUpdate(() => {
					camera.position.set(cameraCoords.pX, cameraCoords.pY, cameraCoords.pZ);
					camera.rotation.set(cameraCoords.rX, cameraCoords.rY, cameraCoords.rZ);
				})
				.start();
			break;
	}
}

function animate() {
	requestAnimationFrame( animate );
	// controls.update();
	renderer.render( scene, camera );
	TWEEN.update();
}

window.addEventListener('resize', () => {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
})

animate();

var nSet = 1;

addEventListener("wheel", (event) => {
	console.log(nSet)
	if(event.deltaY > 0) {
		move(1);
	} else {
		move(2);
	}
	
});

function move(p) {
	switch(p) {
		case 1:
			nSet++;
			if(nSet > 4) {
				nSet = 1;
				document.getElementById("infopanels").scrollTop = 0;
	
			} else {
				document.getElementById("infopanels").scrollBy(0, 5);
			}
			// nSet = (nSet > 4) ? 1 : nSet;
			setCameraSetpoint(nSet);
			break;
		case 2:
			nSet--;
			nSet = (nSet < 1) ? 4 : nSet;
			setCameraSetpoint(nSet);
			document.getElementById("infopanels").scrollBy(0, -5);
			break;
	}
}

document.onkeydown = (e) => {
	if(e.key  == 'ArrowLeft') {
		move(2);
	} else if (e.key == 'ArrowRight') {
		move(1);
	}
	else if(e.key == 's') {
		// Data which will write in a file.
		let posData = "{  X: " + camera.position.x + ", Y: " + camera.position.y +  ", Z: " + camera.position.z + "  }"
		let rotData = "{  X: " + camera.rotation.x + ", Y: " + camera.rotation.y +  ", Z: " + camera.rotation.z + "  }"
		let data = "{ pX: " + camera.position.x + ", pY: " + camera.position.y + ", pZ: " + camera.position.z + ", rX: " + camera.rotation.x + ", rY: " + camera.rotation.y + ", rZ: " + camera.rotation.z + " }"
		
		console.log("Position", posData)
		console.log("Rotation", rotData)
		console.log("Data", data)
	}
}



	



