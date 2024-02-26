const cubes = []

function createCube(x, y, z) {
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshBasicMaterial({ color: 0xcccccc, wireframe: true })
    const cube = new THREE.Mesh(geometry, material)
    cube.position.set(x, y, z)
    cube.scale.set(200, 200, 200)

    return cube
}

export {cubes, createCube}