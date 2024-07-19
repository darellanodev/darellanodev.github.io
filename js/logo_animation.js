setTimeout(function () {
  if (document.readyState === 'complete') {
    initializeVivus()
  } else {
    document.addEventListener('DOMContentLoaded', initializeVivus)
  }
}, 2000)

function initializeVivus() {
  new Vivus('logo-animation', {
    duration: 800,
    start: 'autostart',
    file: logo_animation_path,
  })
}
