import xmlData from './foo.xml'

function createWrap () {
  var element = document.createElement('div')

  element.innerHTML = xmlData.note.body
  element.classList.add('header')
  console.log(xmlData)

  return element
}

document.body.appendChild(createWrap())
