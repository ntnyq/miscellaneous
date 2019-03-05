function launchFullscreen(element) {
  if (element.requestFullScreen) {
    element.requestFullScreen()
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen()
  } else if (element.webkitRequestFullScreen) {
    element.webkitRequestFullScreen()
  }
}
function cancelFullscreen() {
  if (document.cancelFullScreen) {
    document.cancelFullScreen()
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen()
  } else if (document.webkitCancelFullScreen) {
    document.webkitCancelFullScreen()
  }
}
function dumpFullscreen() {
  console.log(
    'document.fullScreenElement is: ',
    document.fullScreenElement || document.mozFullScreenElement || document.webkitFullScreenElement,
  )
  console.log(
    'document.fullScreenEnabled is: ',
    document.fullScreenEnabled || document.mozScreenEnabled || document.webkitScreenEnabled,
  )
}
// Events
document.addEventListener('fullscreenchange', function(e) {
  console.log('fullscreenchange event! ', e)
})
document.addEventListener('mozfullscreenchange', function(e) {
  console.log('mozfullscreenchange event! ', e)
})
document.addEventListener('webkitfullscreenchange', function(e) {
  console.log('webkitfullscreenchange event! ', e)
})
// Add different events for fullscreen

//页面调用
$(function() {
  $('#fullscreen').click(function() {
    launchFullscreen(document.documentElement)
  })
  $('#cancelfullscreen').click(function() {
    cancelFullscreen(document.documentElement)
  })
})
