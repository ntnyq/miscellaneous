/*
 * @Author: Emmet
 * @Date:   2017-06-25 10:39:15
 * @Last Modified by:   Administrator
 * @Last Modified time: 2017-06-25 11:17:39
 */

window.onload = () => {
  let action = {
    top() {
      main.style.flexDirection = 'column'
      aside.style.flexDirection = 'row'
      aside.style.order = 1
      display.style.order = -1
    },
    bottom() {
      main.style.flexDirection = 'column'
      aside.style.flexDirection = 'row'
      aside.style.order = -1
      display.style.order = 1
    },
    left() {
      main.style.flexDirection = 'row'
      aside.style.flexDirection = 'column'
      aside.style.order = 1
      display.style.order = -1
    },
    right() {
      main.style.flexDirection = 'row'
      aside.style.flexDirection = 'column'
      aside.style.order = -1
      display.style.order = 1
    },
  }

  select.onchange = () => {
    action[select.value]()
  }
}
