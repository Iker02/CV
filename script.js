// Seleccionamos el contenedor donde irá el modelo
const container = document.getElementById('modelContainer');

// Creamos la escena
const scene = new THREE.Scene();

// Creamos la cámara
const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
camera.position.z = 5;

// Creamos el renderer
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(container.clientWidth, container.clientHeight);
container.appendChild(renderer.domElement);

// Agregamos luz a la escena
const light = new THREE.AmbientLight(0x404040); // Luz ambiental
scene.add(light);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8); // Luz direccional
scene.add(directionalLight);

// Cargamos el archivo .glb
const loader = new THREE.GLTFLoader();
loader.load('assets/animacion_avatar.glb', function (gltf) {
  const model = gltf.scene;
  model.scale.set(1.5, 1.5, 1.5); // Ajustamos el tamaño del modelo
  scene.add(model);

  // Animación del modelo (opcional)
  const animate = function () {
    requestAnimationFrame(animate);

    model.rotation.y += 0.01; // Rota lentamente el modelo sobre su eje Y

    renderer.render(scene, camera);
  };

  animate();
}, undefined, function (error) {
  console.error(error);
});
  