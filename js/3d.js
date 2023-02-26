import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { MTLLoader } from 'three/addons/loaders/MTLLoader.js';

// import './styles.'

import * as THREE from 'three';

const scene = new THREE.Scene();

scene.background = new THREE.Color( 0x000000 );

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({
	canvas: document.querySelector("#bg"),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize( window.innerWidth, window.innerHeight );

camera.position.setX(90);
camera.position.setY(0);
camera.position.setZ(10);
camera.rotation.x = -0.5 * Math.PI


renderer.render( scene, camera );

// instantiate a loader
const loader = new OBJLoader();

const mtlLoader = new MTLLoader();

const base = '../resources/3d/'

mtlLoader.load((base + 'SavitirII_gr.mtl'), function(materials) {	
	materials.preload();

	loader.setMaterials(materials);

	loader.load((base + 'SavitirII_gr.obj'), function(object){
		scene.add(object);
		object.rotation.y = 0.75 * Math.PI
	});
});

const pointLight = new THREE.PointLight(0xffffff);
// pointLight.position.set(0, 25, 25);

const ambientLight = new THREE.AmbientLight(0xffffff, 2);

scene.add(pointLight, ambientLight)

const lightHelper = new THREE.PointLightHelper(pointLight)
scene.add(lightHelper)

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}

animate();







