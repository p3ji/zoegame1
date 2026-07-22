// Three.js Scene
(() => {

let scene, camera, renderer;
let particleSystem;
let targetCameraPos = new THREE.Vector3(0, 0, 10);
let currentMouse = { x: 0, y: 0 };
let currentThemeId = 'tea_party';

// Theme configurations
const themes = {
  tea_party: {
    bgColor: 0x8FA382,
    particleColor: 0xA9C298,
    particleCount: 500,
    particleSize: 0.1,
    velocity: new THREE.Vector3(0, -0.05, 0), // Rain falling straight down
    particleType: 'rain'
  },
  autumn_feast: {
    bgColor: 0x9c5a33,
    particleColor: 0xffa500,
    particleCount: 200,
    particleSize: 0.2,
    velocity: new THREE.Vector3(-0.02, -0.01, 0), // Leaves blowing sideways
    particleType: 'leaves'
  },
  midnight_snack: {
    bgColor: 0x1a1a2e,
    particleColor: 0xffffff,
    particleCount: 800,
    particleSize: 0.05,
    velocity: new THREE.Vector3(0, 0.005, 0), // Floating dust/stars
    particleType: 'stars'
  },
  zen_bento: {
    bgColor: 0xd9e5d6,
    particleColor: 0xffb7c5, // Sakura pink
    particleCount: 300,
    particleSize: 0.15,
    velocity: new THREE.Vector3(-0.03, -0.02, 0), // Cherry blossoms falling
    particleType: 'blossoms'
  }
};

function init3DScene() {
  const canvas = document.getElementById('three-bg-canvas');
  if (!canvas) return;

  scene = new THREE.Scene();
  scene.background = new THREE.Color(themes[currentThemeId].bgColor);
  scene.fog = new THREE.FogExp2(themes[currentThemeId].bgColor, 0.05);

  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 10;

  renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Add soft ambient light
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambientLight);

  const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
  dirLight.position.set(5, 10, 5);
  scene.add(dirLight);

  // Initialize Particles
  createParticles();

  // Mouse move listener for parallax
  document.addEventListener('mousemove', (e) => {
    currentMouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    currentMouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
  });

  window.threeSceneModule = {
    init3DScene,
    setTheme3D
  };

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  animate();
}

function createParticles() {
  if (particleSystem) {
    scene.remove(particleSystem);
    particleSystem.geometry.dispose();
    particleSystem.material.dispose();
  }

  const config = themes[currentThemeId];
  const geometry = new THREE.BufferGeometry();
  const vertices = [];

  for (let i = 0; i < config.particleCount; i++) {
    const x = (Math.random() - 0.5) * 40;
    const y = (Math.random() - 0.5) * 40;
    const z = (Math.random() - 0.5) * 20 - 5;
    vertices.push(x, y, z);
  }

  geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

  const material = new THREE.PointsMaterial({
    color: config.particleColor,
    size: config.particleSize,
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending
  });

  particleSystem = new THREE.Points(geometry, material);
  scene.add(particleSystem);
}

function setTheme3D(themeId) {
  if (!themes[themeId] || !scene) return;
  currentThemeId = themeId;
  const config = themes[themeId];
  
  // Smoothly transition background color (simplistic approach for now)
  scene.background.setHex(config.bgColor);
  scene.fog.color.setHex(config.bgColor);
  
  createParticles();
}

function animate() {
  requestAnimationFrame(animate);

  // Parallax camera movement
  targetCameraPos.x = currentMouse.x * 2;
  targetCameraPos.y = currentMouse.y * 2;
  
  camera.position.x += (targetCameraPos.x - camera.position.x) * 0.05;
  camera.position.y += (targetCameraPos.y - camera.position.y) * 0.05;
  camera.lookAt(scene.position);

  // Animate particles
  if (particleSystem) {
    const positions = particleSystem.geometry.attributes.position.array;
    const config = themes[currentThemeId];

    for (let i = 0; i < config.particleCount; i++) {
      let x = positions[i * 3];
      let y = positions[i * 3 + 1];
      let z = positions[i * 3 + 2];

      x += config.velocity.x;
      y += config.velocity.y;
      z += config.velocity.z;

      // Wrap around
      if (y < -20) y = 20;
      if (x < -20) x = 20;
      if (x > 20) x = -20;

      // Add gentle sine wave sway for leaves/blossoms
      if (config.particleType === 'leaves' || config.particleType === 'blossoms') {
        x += Math.sin(y * 0.5 + performance.now() * 0.001) * 0.02;
      }

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }
    particleSystem.geometry.attributes.position.needsUpdate = true;
  }

  renderer.render(scene, camera);
}

window.threeSceneModule = { init3DScene, setTheme3D };

})();
