;(function(doc, win) {
  var SW = win.innerWidth
  var SH = win.innerHeight
  var snowWrap
  var particles = []
  var camera
  var scene
  var renderer
  var mouseX = 0
  var mouseY = 0
  var snow = new Image()
  var timer = null
  var length = 200
  snow.src = './img/snow.png'

  function init() {
    snowWrap = doc.createElement('div')
    snowWrap.className = 'snow'
    doc.querySelector('#container').appendChild(snowWrap)
    camera = new THREE.PerspectiveCamera(75, SW / SH, 1, 1e4)
    camera.position.z = 1e3
    scene = new THREE.Scene()
    scene.add(camera)
    renderer = new THREE.CanvasRenderer()
    renderer.setSize(SW, SH)
    var material = new THREE.ParticleBasicMaterial({
      map: new THREE.Texture(snow),
    })
    Array.apply(null, {
      length: length,
    }).map(function() {
      var particle = new Particle3D(material)
      particle.position.x = Math.random() * 2000 - 1000
      particle.position.y = Math.random() * 2000 - 1000
      particle.position.z = Math.random() * 2000 - 1000
      particle.scale.x = particle.scale.y = 1
      scene.add(particle)
      particles.push(particle)
    })
    snowWrap.appendChild(renderer.domElement)
    clearInterval(timer)
    timer = setInterval(loop, 1000 / 60)
  }

  function loop() {
    particles.forEach(function(particle) {
      particle.updatePhysics()
      var _particle$position = particle.position,
        x = _particle$position.x,
        y = _particle$position.y,
        z = _particle$position.z

      if (y < -1000) {
        particle.position.y += 2000
      }

      if (x > 1000) {
        particle.position.x -= 2000
      }

      if (x < -1000) {
        particle.position.x += 2000
      }

      if (z > 1000) {
        particle.position.z -= 2000
      }

      if (z < -1000) {
        particle.position.z += 2000
      }
    })
    camera.position.x += (mouseX - camera.position.x) * 0.05
    camera.position.y += (-mouseY - camera.position.y) * 0.05
    camera.lookAt(scene.position)
    renderer.render(scene, camera)
  }

  function resize() {
    SW = win.innerWidth
    SH = win.innerHeight
    particles = []
    snowWrap.remove()
    mouseX = 0
    mouseY = 0
    init()
  }

  init()
  window.addEventListener('resize', resize)
})(document, window)
