const target = document.querySelector('#id')
const config = {
  attributes: false,
  childList: true,
  subtree: true,
}
const callback = function(mutationsList) {
  for (const mutation of mutationsList) {
    const { type } = mutation

    switch (type) {
      case 'childList':
        break

      case 'attributes':
        console.log(`${mutation.attributeName} attribute was modified`)
        break

      case 'subtree':
        break

      default:
        break
    }
  }
}

const observer = new MutationObserver(callback)

// Start observing
observer.observe(target, config)

// Stop observing
observer.disconnect()
