/*
 * @Author: Emmet
 * @Date:   2017-06-24 22:34:21
 * @Last Modified by:   Administrator
 * @Last Modified time: 2017-06-24 23:35:05
 */
window.onload = () => {
  let getRandomColor = () => {
    return (
      '#' +
      Math.random()
        .toString(16)
        .slice(2, 8)
    )
  }

  ;[...box.children].forEach(item => {
    item.style.background = getRandomColor()
  })

  let count = box.children.length

  add_btn.onclick = () => {
    let div = document.createElement('div')
    div.innerHTML = `<span class="item" style="background:${getRandomColor()}"><p>${++count}</p></span>`
    box.appendChild(div.firstElementChild)
  }

  remove_btn.onclick = () => {
    box.lastElementChild && box.removeChild(box.lastElementChild)
    count--
  }
  ;[...radios.children].forEach(radio => {
    radio.onchange = () => {
      box.style.flexWrap = radios.querySelector('input:checked').value
    }
  })
}
