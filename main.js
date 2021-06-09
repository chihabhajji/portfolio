import './style.css'
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'

document.body.scrollTop = 0; // For Safari
document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// Typewriter





const isLoading = true;

// Scene , renderer and controls
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 0.1, 1000)
const renderer = new THREE.WebGL1Renderer({canvas: document.querySelector('#bg'),})
const controls = new OrbitControls(camera, renderer.domElement)

renderer.setPixelRatio();
renderer.setSize(window.innerWidth, window.innerHeight)
camera.position.setZ(100)
camera.position.setX(1000)

// TORUS
const torus = new THREE.Mesh(new THREE.TorusGeometry(10,3,16,100),new THREE.MeshStandardMaterial({color: 0XFF6347 ,}));
scene.add(torus,new THREE.AmbientLight(0xffffff))

function animate(){
  requestAnimationFrame(animate)
  torus.rotation.x += 0.001
  torus.rotation.y += 0.005
  torus.rotation.z += 0.001
  controls.update()
  renderer.render(scene,camera)
}

// Stars
function addStars(){
  const star = new THREE.Mesh(new THREE.SphereGeometry(0.25,24,24),new THREE.MeshStandardMaterial({color: 0xffffff}))
  const [x,y,z] = Array(3).fill().map(()=> THREE.MathUtils.randFloatSpread(500))
  star.position.set(x,y,z)
  scene.add(star)
}
Array(250).fill().forEach(addStars)

// BACKGROUND
new THREE.TextureLoader().load('public/space.jpg', (texture)=>{
  scene.background = texture
});

// AVATAR
const chihabCubeTexture = new THREE.TextureLoader().load('public/avatar.jfif',(texture)=>{

})
const chihabCube = new THREE.Mesh(
  new THREE.BoxGeometry(3,3,3),
  new THREE.MeshBasicMaterial({map:chihabCubeTexture})
);
chihabCube.position.z = 30
chihabCube.position.x = -10
scene.add(chihabCube)

// MOON
const moonTexture = new THREE.TextureLoader().load('public/moon.jpg',(mt)=>{});
const normaMapMoon = new THREE.TextureLoader().load('public/normal.jpg', (nmm)=>{})
const moon = new THREE.Mesh(new THREE.SphereGeometry(3,32,32),new THREE.MeshStandardMaterial({ map : moonTexture, normalMap:normaMapMoon}))
scene.add(moon)

// Scroll handeler 
function moveCamera(){
  
  const t = document.body.getBoundingClientRect().top
  console.log(t)

  // Cube rotation
  chihabCube.rotation.x += 0.05
  chihabCube.rotation.y += 0.075
  chihabCube.rotation.z += 0.05
  // Moon rotation
  moon.rotation.x += 0.01
  moon.rotation.z += 0.01
  moon.rotation.y += 0.01
  // Camera scroll
  camera.position.z = t * -0.01
  camera.position.x = t * -0.0002
  camera.position.t = t * -0.0002
}
document.body.onscroll = moveCamera

// Animate call
animate()