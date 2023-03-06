import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { MTLLoader } from 'three/addons/loaders/MTLLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// animating POSES https://dev.to/pahund/animating-camera-movement-in-three-js-17e9
//need to figure out in betweening and smooth scroll, then move to scroll triggered setpoints

import * as THREE from 'three';

import TWEEN from 'tween';

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
// // controls.update();
// camera.rotation.z = -0.5 * Math.PI

const initialPos = { pX: 0.037, pY: -4.475, pZ: 2.386, 
	rX: 1.068, rY: -0.017, rZ: 0.030 }
camera.position.set(initialPos.pX, initialPos.pY, initialPos.pZ);
camera.rotation.set(initialPos.rX, initialPos.rY, initialPos.rZ);


renderer.render( scene, camera );

const base = '../resources/3d/';

const loader = new GLTFLoader();
loader.load(
	(base + 'SavitirII_gray.gltf'),
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
	},
	// called when loading has errors
	function ( error ) {

		console.log( 'An error happened' );

	}
)

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
			const beginPosCoords = { pX: 0.037, pY: -4.475, pZ: 2.386, 
				rX: 1.068, rY: -0.017, rZ: 0.030 }
				new TWEEN.Tween(cameraCoords)
				.to(beginPosCoords)
				.onUpdate(() => {
					camera.position.set(cameraCoords.pX, cameraCoords.pY, cameraCoords.pZ);
					camera.rotation.set(cameraCoords.rX, cameraCoords.rY, cameraCoords.rZ);
				})
				.start();
			break;
		case 2: // engines
			const engPosCoords = { pX: 4.844, pY: 1.209, pZ: 3.953, 
				rX: -0.001, rY: 0.794, rZ: 0 };
			new TWEEN.Tween(cameraCoords)
				.to(engPosCoords)
				.onUpdate(() => {
					camera.position.set(cameraCoords.pX, cameraCoords.pY, cameraCoords.pZ);
					camera.rotation.set(cameraCoords.rX, cameraCoords.rY, cameraCoords.rZ);
				})
				.start();
			break;
		case 3: //midstage
			const midPosCoords = { pX: 4.041051621581688, pY: 3.7530026023575385, pZ: 0.9745105259344332, 
					rX: -1.066, rY: 1.077, rZ: 1.01 };
				new TWEEN.Tween(cameraCoords)
				.to(midPosCoords)
				.onUpdate(() => {
					camera.position.set(cameraCoords.pX, cameraCoords.pY, cameraCoords.pZ);
					camera.rotation.set(cameraCoords.rX, cameraCoords.rY, cameraCoords.rZ);
				})
				.start();
			break;
		case 4: //midstage
			const wholePosCoords = { pX: -1.7889429186971835, pY: 3.2115692238692475, pZ: 13.61988483323175, rX: 0.6415454260078526, rY: -0.1440605609522377, rZ: 0.10682581834083991 };
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

animate();

var nSet = 1;

document.getElementById('sp').addEventListener("click", () => {
	console.log(nSet)
	setCameraSetpoint(nSet);
	nSet++;
	nSet = (nSet > 4) ? 1 : nSet;
});

addEventListener("wheel", (event) => {
	console.log(nSet)
	setCameraSetpoint(nSet);
	nSet++;
	nSet = (nSet > 4) ? 1 : nSet;
});


document.getElementById('sc').addEventListener("click", () => {
	// Data which will write in a file.
	let posData = "{  X: " + camera.position.x + ", Y: " + camera.position.y +  ", Z: " + camera.position.z + "  }"
	let rotData = "{  X: " + camera.rotation.x + ", Y: " + camera.rotation.y +  ", Z: " + camera.rotation.z + "  }"
	let data = "{ pX: " + camera.position.x + ", pY: " + camera.position.y + ", pZ: " + camera.position.z + ", rX: " + camera.rotation.x + ", rY: " + camera.rotation.y + ", rZ: " + camera.rotation.z + " }"
	 
	console.log("Position", posData)
	console.log("Rotation", rotData)
	console.log("Data", data)
});



	



