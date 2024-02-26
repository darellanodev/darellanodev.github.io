import camera from "./camera.js"
import { changeCubeColor } from "./color.js"
import { createCube, cubes } from "./cube.js"
import renderer from "./renderer.js"
import scene from "./scene.js"


function animate() {
    requestAnimationFrame(animate)

    cubes.forEach((c, index) => {
        
        if (index == 0) {
            c.rotation.x += 0.01
            c.rotation.y += 0.01
        } else {
            c.rotation.x += 0.002
            c.rotation.y += 0.002
        }

        c.elapsedTime += 1 / 60

        if (c.elapsedTime >= c.colorChangeInterval) {
            changeCubeColor(c);
            c.elapsedTime = 0;
        }

    })
    renderer.render(scene, camera)
}

camera.lookAt(scene.position)
document.getElementById('myCanvas').appendChild(renderer.domElement)


cubes.push(
    new createCube(-300, 1, 1),
    new createCube(0, -60, 150),
    new createCube(0, -180, -500),
    )

cubes.forEach(c => { scene.add(c) })

animate()