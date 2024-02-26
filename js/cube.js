const cubes = []

function createCube(x, y, z) {
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshBasicMaterial({ color: 0xcccccc, wireframe: true })
    const cube = new THREE.Mesh(geometry, material)
    cube.position.set(x, y, z)
    cube.scale.set(35, 35, 35)
    cube.elapsedTime = 0
    cube.colorChangeInterval = 5

    return cube
}

export {cubes, createCube}