import * as THREE from "https://threejs.org/build/three.module.js";
import {makeCar,obj,keyframe} from "./buildobj.js"
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.136/examples/jsm/controls/OrbitControls.js';

var camera, scene, renderer;
var keys;
var T = 6;
var clock = new THREE.Clock();
var ts = clock.getElapsedTime();
var car;

function init() {

  scene = new THREE.Scene();

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x888888);
  document.body.appendChild(renderer.domElement);

  camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 10000);
  camera.position.set(300, 400, 500); // camera at (0,0,500)
  let controls = new OrbitControls(camera, renderer.domElement);

  ////////////////////////////////////////////////////////
  var gridXZ = new THREE.GridHelper(300, 30, 'red', 'white');
  scene.add(gridXZ);

  car = makeCar();
  scene.add(car);
  ///////////////////
  obj();
}

function animate() {

  keyframe(clock.getElapsedTime());

  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

export{init,animate};
export{camera,scene,renderer};
export{T,ts,car};