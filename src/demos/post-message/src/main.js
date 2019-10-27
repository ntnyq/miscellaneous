window.addEventListener('load', () => {
  const button = document.querySelector('#button')

  button.addEventListener('click', () => {
    const childWindow = window.frames['child']
    const color = `#${Math.random()
      .toString()
      .slice(2, 8)}`

    if (childWindow) {
      childWindow.postMessage(
        {
          color,
        },
        document.origin
      )
    }
  })
})
