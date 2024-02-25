// Functions
function createCube(x, y, z) {
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshBasicMaterial({ color: 0xcccccc, wireframe: true })
    const cube = new THREE.Mesh(geometry, material)
    cube.position.set(x, y, z)
    cube.scale.set(100, 100, 100)

    return cube
}

function animate() {
    requestAnimationFrame(animate)

    cubes.forEach(c => {
        c.rotation.x += 0.01
        c.rotation.y += 0.01
    })
    renderer.render(scene, camera)
}

// Main
const scene = new THREE.Scene()

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
camera.lookAt(scene.position);

const renderer = new THREE.WebGLRenderer({ alpha: true })
renderer.setClearColor(0x000000, 0)
renderer.setSize(315, 115)
document.getElementById('myCanvas').appendChild(renderer.domElement)

const cubes = []


const newCube = createCube(-300, 1, 1)
cubes.push(newCube)

cubes.forEach(c => { scene.add(c) })

animate()

// window.addEventListener('resize', function () {
//     var width = window.innerWidth
//     var height = window.innerHeight
//     renderer.setSize(width, height)
//     camera.aspect = width / height
//     camera.updateProjectionMatrix()
// })