import * as THREE from "https://threejs.org/build/three.module.js";
import{scene,car,T,ts} from "https://u10906201.github.io/3W3D/init.js";

var keys;

export function makeCar()
{
	let car = new THREE.Group();
	let normalMat = new THREE.MeshNormalMaterial({
    wireframe: true
  });
  
	let body = new THREE.Mesh(new THREE.SphereGeometry(14, 32, 16), normalMat);
	let ring = new THREE.Mesh(new THREE.RingGeometry(19, 22, 32), normalMat);
	body.position.set(0, 30, 0);
	ring.position.set(0, 30, 0);
	ring.rotation.x = Math.PI / 2;
	ring.rotation.y = Math.PI / 6;
	car.add(body, ring);

	return car;
}

export function obj(){
  let pos1 = new THREE.Vector3(0, 0, 80); //下
  let pos2 = new THREE.Vector3(60, 20, 60); //右下
  let pos3 = new THREE.Vector3(80, 40, 0); //右
  let pos4 = new THREE.Vector3(60, 60, -60); //右上
  let pos5 = new THREE.Vector3(0, 80, -80); //上
  let pos6 = new THREE.Vector3(-60, 60, -60); //左上
  let pos7 = new THREE.Vector3(-80, 40, 0); //左
  let pos8 = new THREE.Vector3(-60, 20, 60); //左下
	
  //Euler(x,y,z)旋轉量
  let euler1 = new THREE.Euler(0, Math.PI/8, 0);
  let euler2 = new THREE.Euler(0, Math.PI/8*4, 0);
  let euler3 = new THREE.Euler(0, Math.PI/8*8, 0);
  let euler4 = new THREE.Euler(0, Math.PI/8*12, 0);
  let euler5 = new THREE.Euler(0, Math.PI/8*16, 0);
  let euler6 = new THREE.Euler(0, Math.PI/8*20, 0);
  let euler7 = new THREE.Euler(0, Math.PI/8*24, 0);
  let euler8 = new THREE.Euler(0, Math.PI/8*28, 0);

  let quad1 = new THREE.Quaternion().setFromEuler(euler1);
  let quad2 = new THREE.Quaternion().setFromEuler(euler2);
  let quad3 = new THREE.Quaternion().setFromEuler(euler3);
  let quad4 = new THREE.Quaternion().setFromEuler(euler4);
  let quad5 = new THREE.Quaternion().setFromEuler(euler5);
  let quad6 = new THREE.Quaternion().setFromEuler(euler6);
  let quad7 = new THREE.Quaternion().setFromEuler(euler7);
  let quad8 = new THREE.Quaternion().setFromEuler(euler8);
  keys = [
    [0, pos1, quad1], // quad1 ...
    [0.125, pos2, quad2],
    [0.250, pos3, quad3],
    [0.375, pos4, quad4],
    [0.500, pos5, quad5],
    [0.625, pos6, quad6],
    [0.750, pos7, quad7],
    [0.875, pos8, quad8],
    [1, pos1, quad1]
  ];
}

export function keyframe(t) {
  var s = ((t - ts) % T) / T;

  for (var i = 1; i < keys.length; i++) {
    if (keys[i][0] > s) break;
  }
  // take i-1
  var ii = i - 1;
  var a = (s - keys[ii][0]) / (keys[ii + 1][0] - keys[ii][0]);

  car.position.lerpVectors(keys[ii][1], keys[ii + 1][1], a);
  car.quaternion.slerpQuaternions (keys[ii][2], keys[ii+1][2], a);
}


