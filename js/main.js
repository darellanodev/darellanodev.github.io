import camera from "./camera.js"
import {createCube, cubes} from "./cube.js"
import renderer from "./renderer.js"
import scene from "./scene.js"

function animate() {
    requestAnimationFrame(animate)

    cubes.forEach(c => {
        c.rotation.x += 0.01
        c.rotation.y += 0.01
    })
    renderer.render(scene, camera)
}

camera.lookAt(scene.position)
document.getElementById('myCanvas').appendChild(renderer.domElement)

const newCube = createCube(-300, 1, 1)
cubes.push(newCube)

cubes.forEach(c => { scene.add(c) })

animate()