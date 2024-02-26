function getRandomBrightColor() {
    const r = Math.random() * 0.5 + 0.5
    const g = Math.random() * 0.5 + 0.5
    const b = Math.random() * 0.5 + 0.5
    return new THREE.Color(r, g, b)
}

function changeCubeColor(cube) {
    const randomColor = getRandomBrightColor()
    cube.material.color.set(randomColor)
}

export { changeCubeColor }