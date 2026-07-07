import { OrbitControls } from "three/addons/controls/OrbitControls.js";

let morphEnergy = 0.0;
let currentBloomMultiplier = 1.0;
let currentScaleFactor = 1.0;
let lastTime = performance.now();
let frameCount = 0;

const config = {
  activeShape: 0,
  waveSpeed: 1.2,
  coreScale: 1.25,
  ditherAmount: 0.012,
  glowStrength: 0.45,
  autoRotate: false,
  nodesCount: 373,
  beamsCount: 756,
};

const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);
camera.position.set(0, 0, 9.5);
