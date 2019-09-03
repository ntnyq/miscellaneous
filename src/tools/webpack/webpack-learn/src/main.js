import xmlData from './data/foo.xml'

function createWrap() {
  var element = document.createElement('div')

  element.innerHTML = xmlData.note.body
  element.classList.add('header')

  return element
}

const wrap = createWrap()

document.body.appendChild(wrap)
