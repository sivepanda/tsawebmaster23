import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { MTLLoader } from 'three/addons/loaders/MTLLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

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
renderer.outputEncoding = THREE.sRGBEncoding;

const controls = new OrbitControls(camera, renderer.domElement);

camera.position.set(0, 40, 20);
controls.update();
// camera.rotation.x = -0.5 * Math.PI


renderer.render( scene, camera );

// const loader = new OBJLoader();

const base = '../resources/3d/';

// const mtlLoader = new MTLLoader();

// mtlLoader.setMaterialOptions({normalizeRGB:true});

// mtlLoader.load((base + 'SavitirII_gr.mtl'), function(materials) {	

// 	materials.preload();

// 	loader.setMaterials(materials);

// 	loader.load((base + 'SavitirII_gr.obj'), function(object){
// 		scene.add(object);
// 		object.rotation.y = 0.75 * Math.PI
// 	});
// });

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
// pointLight.position.set(0, 25, 25);

const ambientLight = new THREE.AmbientLight(0xffffff, 1);

scene.add(pointLight, ambientLight)

const lightHelper = new THREE.PointLightHelper(pointLight)
scene.add(lightHelper)

function animate() {
	requestAnimationFrame( animate );
	controls.update();

	renderer.render( scene, camera );
}

animate();







