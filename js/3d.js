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

const controls = new OrbitControls(camera, renderer.domElement);

camera.position.set(0, 10, 10);
controls.update();
camera.rotation.z = -0.5 * Math.PI


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
scene.add(lightHelper);

/**This function is to set the different setpoints around the rocket that can be triggered */
function setCameraSetpoint(setpoint) {
	const cameraCoords = { pX: camera.position.x, pY: camera.position.y, pZ: camera.position.z, 
		rX: camera.rotation.x, rY: camera.rotation.y, rZ: camera.rotation.z };
	switch(setpoint) {
		case 1: // full
			const beginPosCoords = { pX: 0, pY: 10, pZ: 10,
				rX: 0, rY: 0, rZ: (-0.5 * Math.PI) }
				new TWEEN.Tween(cameraCoords)
				.to(beginPosCoords)
				.onUpdate(() => {
					camera.position.set(cameraCoords.pX, cameraCoords.pY, cameraCoords.pZ);
					camera.rotation.set(cameraCoords.rX, cameraCoords.rY, cameraCoords.rZ);
				})
				.start();
			break;
		case 2: // engines
			const engPosCoords = { pX: -0.05, pY: -2, pZ: 3.7, 
				rX: 0.5, rY: -0.01, rZ: 0.06 };
			new TWEEN.Tween(cameraCoords)
				.to(engPosCoords)
				.onUpdate(() => {
					camera.position.set(cameraCoords.pX, cameraCoords.pY, cameraCoords.pZ);
					camera.rotation.set(cameraCoords.rX, cameraCoords.rY, cameraCoords.rZ);
				})
				.start();
			break;
		case 3: //midstage
			const midPosCoords = { pX: 1.28, pY: 6.64, pZ: -4.62, 
				rX: -3.01, rY: 0.39, rZ: 3.09 };
				new TWEEN.Tween(cameraCoords)
				.to(midPosCoords)
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
	controls.update();
	renderer.render( scene, camera );
	TWEEN.update();
}

animate();

var nSet = 1;

document.getElementById('sp').addEventListener("click", () => {
	console.log(nSet)
	setCameraSetpoint(nSet);
	nSet++;
	nSet = (nSet > 3) ? 1 : nSet;
});

document.getElementById('sc').addEventListener("click", () => {
	// Data which will write in a file.
	let posData = "{  X: " + camera.position.x + ", Y: " + camera.position.y +  ", Z: " + camera.position.z + "  }"
	let rotData = "{  X: " + camera.rotation.x + ", Y: " + camera.rotation.y +  ", Z: " + camera.rotation.z + "  }"
	
	console.log("Position", posData)
	console.log("Rotation", rotData)
});



	



