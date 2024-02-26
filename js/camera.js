const camera = new THREE.OrthographicCamera()

camera.left = window.innerWidth / -2;
camera.right = window.innerWidth / 2;
camera.top = window.innerHeight / 2;
camera.bottom = window.innerHeight / -2;
camera.near = 0.1;
camera.far = 1500;
camera.updateProjectionMatrix();

// position and point the camera to the center of the scene
camera.position.x = -500;
camera.position.y = 200;
camera.position.z = 300;

export default camera