import './style.scss'

const intersectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    console.log(
      `#box可见性改变，当前${entry.isIntersecting ? '可见' : '不可见'}`
    )
  })
})

intersectionObserver.observe(document.querySelector('#box'))
