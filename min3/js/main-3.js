import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

import { buildScene,maketext,obj,keyframe } from './buildScene';
import { group } from './buildScene';
var camera, scene, renderer;
var angle = 0;
var keys;
var T = 10;
var clock = new THREE.Clock();
var ts = clock.getElapsedTime();
var boom;

init();
animate();

function init() {

  scene = new THREE.Scene();

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x888888);
  document.body.appendChild(renderer.domElement);

  camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.set (0,300,100);
  
  const controls = new OrbitControls( camera, renderer.domElement );

  ////////////////////////////////////////////////////////////////
  var gridXZ = new THREE.GridHelper(200, 20, 'red', 'white');
  scene.add(gridXZ);
  
  group = buildScene();
  scene.add(group);
  boom = maketext();
  scene.add(boom);
  ///////////////////
  obj();
}

function animate() {
  angle += 0.01;
  group.position.set(8 * Math.cos(angle), 0.5, 8 * Math.sin(angle));
  group.rotation.y = -angle;
  
  keyframe(clock.getElapsedTime());
  requestAnimationFrame(animate);
  renderer.render(scene, camera);

}

export {scene};
export {T,ts,boom};