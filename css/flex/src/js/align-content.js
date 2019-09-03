/*
 * @Author: Emmet
 * @Date:   2017-06-24 22:34:21
 * @Last Modified by:   Administrator
 * @Last Modified time: 2017-06-25 00:02:32
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
  let select = [flex_direction, flex_wrap]

  select.forEach(select => {
    select.onchange = () => {
      box.style.flexFlow = flex_direction.value + ' ' + flex_wrap.value
    }
  })
  ;[...align_content.children].forEach(radio => {
    radio.onchange = () => {
      box.style.alignContent = align_content.querySelector(
        'input:checked'
      ).value
    }
  })
}
