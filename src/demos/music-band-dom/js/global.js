/*
 * @Author: Emmet
 * @Date:   2016-12-02 13:21:27
 * @Last Modified by:   Administrator
 * @Last Modified time: 2016-12-03 14:37:36
 */

/**
 * [addLoadEvent 按照script声明顺序执行js脚本函数]
 * @param {[function]} func [传入的函数]
 */
function addLoadEvent(func) {
  var oldonload = window.onload
  if (typeof window.onload != 'function') {
    window.onload = func
  } else {
    window.onload = function() {
      oldonload()
      func()
    }
  }
}

/**
 * [insetAfter 在元素前面插入一个节点]
 * @param  {[type]} newElement    [description]
 * @param  {[type]} targetElement [description]
 * @return {[type]}               [description]
 */
function insertAfter(newElement, targetElement) {
  var parent = targetElement.parentNode
  if (parent.lastChild == targetElement) {
    parent.appendChild(newElement)
  } else {
    parent.insertBefore(newElement, targetElement.nextSibling)
  }
}

/**
 * [addClass 给元素增加一个类名 如果没有类名 直接添加 如果有类名 再添加新的]
 * @param {[type]} element [要被添加类名的元素]
 * @param {[type]} value   [要添加的类名的值]
 */
function addClass(element, value) {
  if (!element.className) {
    element.className = value
  } else {
    newClassName = element.className
    newClassName += ''
    newClassName += value
    element.className = newClassName
  }
}

/**
 * [highLightPage 高亮显示当前url所指向的导航链接 并给页面的body添加此链接的小写文本节点值]
 * @return {[type]} [description]
 */
function highLightPage() {
  if (!document.getElementsByTagName) {
    return false
  }
  if (!document.getElementById) {
    return false
  }
  var header = document.getElementsByTagName('header')
  if (header.length === 0) {
    return false
  }
  var navs = header[0].getElementsByTagName('nav')
  if (navs.length === 0) {
    return false
  }
  var links = navs[0].getElementsByTagName('a')
  var linkurl
  for (var i = 0; i < links.length; i++) {
    linkurl = links[i].getAttribute('href')
    if (window.location.href.indexOf(linkurl) != -1) {
      links[i].className = 'here'
      var linktext = links[i].lastChild.nodeValue.toLowerCase()
      document.body.setAttribute('id', linktext)
    }
  }
}

/**
 * [moveElement 让选择的元素按以给定的速度运动到给定的位置]
 * @param  {[type]} elementID [description]
 * @param  {[type]} final_x   [description]
 * @param  {[type]} final_y   [description]
 * @param  {[type]} interVal  [description]
 * @return {[type]}           [description]
 */
function moveElement(elementID, final_x, final_y, interVal) {
  if (!document.getElementById) {
    return false
  }
  if (!document.getElementById(elementID)) {
    return false
  }
  var elem = document.getElementById(elementID)
  // 清除自定义属性 以防多次点击产生BUG
  if (elem.movement) {
    clearTimeout(elem.movement)
  }
  if (!elem.style.left) {
    elem.style.left = '0px'
  }
  if (!elem.style.top) {
    elem.style.top = '0px'
  }

  var xpos = parseInt(elem.style.left)
  var ypos = parseInt(elem.style.top)
  if (xpos == final_x && ypos == final_y) {
    return true
  }
  if (xpos < final_x) {
    var dist = Math.ceil((final_x - xpos) / 10)
    xpos += dist
  }
  if (xpos > final_x) {
    var dist = Math.ceil((xpos - final_x) / 10)
    xpos -= dist
  }
  if (ypos < final_y) {
    var dist = Math.ceil((final_y - ypos) / 10)
    ypos += dist
  }
  if (ypos > final_y) {
    var dist = Math.ceil((ypos - final_y) / 10)
    ypos -= dist
  }
  elem.style.left = xpos + 'px'
  elem.style.top = ypos + 'px'
  var repeat =
    'moveElement("' +
    elementID +
    '",' +
    final_x +
    ',' +
    final_y +
    ',' +
    interVal +
    ')'
  elem.movement = setTimeout(repeat, interVal)
}

/**
 * [prepareSlideshow 显示鼠标悬浮时候的链接指向的图片，将其加入到页面中]
 * @return {[type]} [description]
 */
function prepareSlideshow() {
  if (!document.getElementsByTagName) {
    return false
  }
  if (!document.getElementById) {
    return false
  }
  if (!document.getElementById('intro')) {
    return false
  }
  var intro = document.getElementById('intro')
  var slideshow = document.createElement('div')
  slideshow.setAttribute('id', 'slideshow')

  var frame = document.createElement('img')
  frame.setAttribute('src', 'img/frame.gif')
  frame.setAttribute('alt', '')
  frame.setAttribute('id', 'frame')
  slideshow.appendChild(frame)

  var preview = document.createElement('img')
  preview.setAttribute('src', 'img/slideshow.gif')
  preview.setAttribute('alt', 'a glimpse of what awaits you')
  preview.setAttribute('id', 'preview')
  slideshow.appendChild(preview)
  insertAfter(slideshow, intro)

  var links = document.getElementsByTagName('a')
  // 只有正文的链接才会产生幻灯片
  // var links = intro.getElementsByTagName('a');
  var destination
  for (var i = 0; i < links.length; i++) {
    links[i].onmouseover = function() {
      destination = this.getAttribute('href')
      if (destination.indexOf('index.html') != -1) {
        moveElement('preview', 0, 0, 5)
      }
      if (destination.indexOf('about.html') != -1) {
        moveElement('preview', -150, 0, 5)
      }
      if (destination.indexOf('photos.html') != -1) {
        moveElement('preview', -300, 0, 5)
      }
      if (destination.indexOf('live.html') != -1) {
        moveElement('preview', -450, 0, 5)
      }
      if (destination.indexOf('contact.html') != -1) {
        moveElement('preview', -600, 0, 5)
      }
    }
  }
}

/**
 * [showSection 显示对应id的段落]
 * @param  {[type]} id [description]
 * @return {[type]}    [description]
 */
function showSection(id) {
  var sections = document.getElementsByTagName('section')
  for (var i = 0; i < sections.length; i++) {
    if (sections[i].getAttribute('id') != id) {
      sections[i].style.display = 'none'
    } else {
      sections[i].style.display = 'block'
    }
  }
}

/**
 * [prepareInternalnav 点击相应的导航链接，显示段文字]
 * @return {[type]} [description]
 */
function prepareInternalnav() {
  if (!document.getElementsByTagName) {
    return false
  }
  if (!document.getElementById) {
    return false
  }
  var articles = document.getElementsByTagName('article')
  if (articles.length === 0) {
    return false
  }
  var navs = articles[0].getElementsByTagName('nav')
  if (navs.length === 0) {
    return false
  }
  var nav = navs[0]
  var links = nav.getElementsByTagName('a')
  for (var i = 0; i < links.length; i++) {
    // 将字符串切分为了2个数组 取得第二个
    var sectionId = links[i].getAttribute('href').split('#')[1]
    if (!document.getElementById(sectionId)) {
      continue
    }
    document.getElementById(sectionId).style.display = 'none'

    links[i].destination = sectionId
    links[i].onclick = function() {
      showSection(this.destination)
      return false
    }
  }
}

/**
 * [showPic description]
 * @param  {[type]} whichPic [description]
 * @return {[type]}          [description]
 */
function showPic(whichPic) {
  if (!document.getElementById('placeholder')) {
    return true
  }
  var source = whichPic.getAttribute('href')
  var placeholder = document.getElementById('placeholder')
  placeholder.setAttribute('src', source)
  if (whichPic.getAttribute('title')) {
    var text = whichPic.getAttribute('title')
  } else {
    var text = ''
  }
  var description = document.getElementById('description')
  if (description.firstChild.nodeType == 3) {
    description.firstChild.nodeValue = text
  }
  return false
}

/**
 * [preparePlaceholder description]
 * @return {[type]} [description]
 */
function preparePlaceholder() {
  if (!document.createElement) {
    return false
  }
  if (!document.createTextNode) {
    return false
  }
  if (!document.getElementById) {
    return false
  }
  if (!document.getElementById('imagegallery')) {
    return false
  }
  var placeholder = document.createElement('img')
  placeholder.setAttribute('id', 'placeholder')
  placeholder.setAttribute('src', 'img/placeholder.gif')
  placeholder.setAttribute('alt', 'my image gallery')
  var description = document.createElement('p')
  description.setAttribute('id', 'description')
  var desctext = document.createTextNode('Choose an image')
  description.appendChild(desctext)
  var gallery = document.getElementById('imagegallery')
  insertAfter(description, gallery)
  insertAfter(placeholder, description)
}

/**
 * [prepareGallery description]
 * @return {[type]} [description]
 */
function prepareGallery() {
  if (!document.getElementsByTagName) {
    return false
  }
  if (!document.getElementById) {
    return false
  }
  if (!document.getElementById('imagegallery')) {
    return false
  }
  var gallery = document.getElementById('imagegallery')
  var links = gallery.getElementsByTagName('a')
  for (var i = 0; i < links.length; i++) {
    links[i].onclick = function() {
      return showPic(this)
    }
  }
}

/**
 * [stripeTables 给表格增加斑马线]
 * @return {[type]} [description]
 */
function stripeTables() {
  if (!document.getElementsByTagName) {
    return false
  }
  var tables = document.getElementsByTagName('table')
  for (var i = 0; i < tables.length; i++) {
    var odd = false
    var rows = tables[i].getElementsByTagName('tr')
    for (var j = 0; j < rows.length; j++) {
      if (odd === true) {
        addClass(rows[j], 'odd')
        odd = false
      } else {
        odd = true
      }
    }
  }
}

/**
 * [highLightRows 给表格内容增加鼠标事件]
 * @return {[type]} [description]
 */
function highLightRows() {
  if (!document.getElementsByTagName) {
    return false
  }
  var rows = document.getElementsByTagName('tr')
  for (var i = 0; i < rows.length; i++) {
    rows[i].oldClassName = rows[i].className
    rows[i].onmouseover = function() {
      addClass(this, 'highlight')
    }
    rows[i].onmouseout = function() {
      this.className = this.oldClassName
    }
  }
}

/**
 * [displayAbbreviations 显示城市名字的缩略语]
 * @return {[type]} [description]
 */
function displayAbbreviations() {
  if (
    !document.getElementsByTagName ||
    !document.createElement ||
    !document.createTextNode
  ) {
    return false
  }
  var abbreviations = document.getElementsByTagName('abbr')
  if (abbreviations.length < 1) {
    return false
  }
  var defs = new Array()
  for (var i = 0; i < abbreviations.length; i++) {
    var current_abbr = abbreviations[i]
    if (current_abbr.childNodes.length < 1) {
      continue
    }
    var definition = current_abbr.getAttribute('title')
    var key = current_abbr.lastChild.nodeValue
    defs[key] = definition
  }
  var dlist = document.createElement('dl')
  for (key in defs) {
    var definition = defs[key]
    var dtitle = document.createElement('dt')
    var dtitle_text = document.createTextNode(key)
    dtitle.appendChild(dtitle_text)
    var ddesc = document.createElement('dd')
    var ddesc_text = document.createTextNode(definition)
    ddesc.appendChild(ddesc_text)
    dlist.appendChild(dtitle)
    dlist.appendChild(ddesc)
  }
  if (dlist.childNodes.length < 1) {
    return false
  }
  var header = document.createElement('h3')
  var header_text = document.createTextNode('Abbreviations')
  header.appendChild(header_text)
  var articles = document.getElementsByTagName('article')
  if (articles.length === 0) {
    return false
  }
  var container = articles[0]
  container.appendChild(header)
  container.appendChild(dlist)
}

/**
 * [focusLabels 给标签添加点击事件 点击后对应的元素获得焦点]
 * @return {[type]} [description]
 */
function focusLabels() {
  if (!document.getElementsByTagName) {
    return false
  }
  var labels = document.getElementsByTagName('label')
  for (var i = 0; i < labels.length; i++) {
    if (!labels[i].getAttribute('for')) {
      continue
    }
    labels[i].onclick = function() {
      var id = this.getAttribute('for')
      if (!document.getElementById(id)) {
        return false
      }
      var element = document.getElementById(id)
      element.onfocus()
    }
  }
}

function resetField(whichForm) {
  // if (Modernizr.input.placeholder) {
  //   return;
  // }
  for (var i = 0; i < whichForm.elements.length; i++) {
    var element = whichForm.elements[i]
    if (element.type == 'submit') {
      continue
    }
    var check = element.placeholder || element.getAttribute('placeholder')
    if (!check) {
      continue
    }
    element.onfocus = function() {
      var text = this.placeholder || this.getAttribute('placeholder')
      if (this.value == text) {
        this.className = ''
        this.value = ''
      }
    }
    element.onblur = function() {
      if (this.value === '' && this.type != 'email') {
        this.className = 'placeholder'
        this.value = this.placeholder || this.getAttribute('placeholder')
      }
    }
    element.onblur()
  }
}

// function isFilled (field) {
//   if (field.value.replace(' ','').length === 0) {
//     return false;
//   }
//   var placeholder = field.placeholder || field.getAttribute('placeholder');
//   return (field.value != placeholder);
// }

// function isEmail (field) {
//   return (field.value.indexOf('@') != -1 && filed.value.indexOf('.') != -1);
// }

// function validateForm (whichForm) {
//   for(var i = 0; i < whichForm.elements.length; i++){
//     var element = whichForm.elements[i];
//     if (element.required === true) {
//       if (!isFilled(element)) {
//         alert('Please fill in the ' + element.name + 'field.');
//         return false;
//       }
//       if (element.type == 'email') {
//         if (!isEmail(element)) {
//           alert('The' + element.name + 'field must be a valid email address');
//           return false;
//         }
//       }
//     }
//   }
//   return true;
// }

/**
 * [prepareForms description]
 * @return {[type]} [description]
 */
function prepareForms() {
  for (var i = 0; i < document.forms.length; i++) {
    var thisform = document.forms[i]
    resetField(thisform)
    thisform.onsubmit = function() {
      // if (!validateForm(this)) {
      //   return false;
      // }
      var article = document.getElementsByTagName('article')[0]
      if (submitFormWithAjax(this, article)) {
        alert('成功了')
        return false
      }
      return true
    }
  }
}

/**
 * [getHTTPObject 通过对象检测技术检测XMLHttpRequest]
 * @return {[Object]} [返回一个新的XMLHttpRequest对象或者XMLHTTP]
 */
function getHTTPObject() {
  if (typeof XMLHttpRequest == 'undefined') {
    XMLHttpRequest = function() {
      try {
        return new ActiveXObject('Msxml2.XMLHTTP.6.0')
      } catch (e) {}
      try {
        return new ActiveXObject('Msxml2.XMLHTTP.3.0')
      } catch (e) {}
      try {
        return new ActiveXObject('Msxml2.XMLHTTP')
      } catch (e) {}
      return false
    }
  }
  return new XMLHttpRequest()
}

/**
 * [displayAjaxLoading 删除所有子元素，把图像添加到该元素]
 * @param  {[type]} element [DOM元素]
 * @return {[type]}         [description]
 */
function displayAjaxLoading(element) {
  while (element.hasChildNodes()) {
    element.removeChild(element.lastChild)
  }
  var content = document.createElement('img')
  content.setAttribute('src', 'img/loading.gif')
  content.setAttribute('alt', 'loading...')
  element.appendChild(content)
}

/**
 * [submitFormWithAjax 拦截表单提交 利用Ajax提交]
 * @param  {[type]} whichForm [description]
 * @param  {[type]} theTarget [description]
 * @return {[type]}           [description]
 */
function submitFormWithAjax(whichForm, theTarget) {
  var request = getHTTPObject()
  if (!request) {
    return false
  }
  displayAjaxLoading(theTarget)
  var dataParts = []
  var element
  for (var i = 0; i < whichForm.elements.length; i++) {
    element = whichForm.elements[i]
    dataParts[i] = element.name + ' = ' + encodeURIComponent(element.value)
  }
  var data = dataParts.join('&')
  request.open('POST', whichForm.getAttribute('action'), true)
  request.setRequestHeader('ContentType', 'application/x-www-form-urlencoded')
  request.onreadystatechange = function() {
    if (request.readyState == 4) {
      if (request.status == 200 || request.status === 0) {
        var matches = request.responseText.match(
          /<article>([\s\S]+)<\/article>/
        )
        if (matches.length > 0) {
          theTarget.innerHTML = matches[1]
        } else {
          theTarget.innerHTML = '<p>Oops, there was an error. Sorry!</p>'
        }
      } else {
        theTarget.innerHTML = '<p>' + request.statusText + '</p>'
      }
    }
  }
  request.send(data)
  return true
}

addLoadEvent(highLightPage)
addLoadEvent(prepareSlideshow)
addLoadEvent(prepareInternalnav)
addLoadEvent(preparePlaceholder)
addLoadEvent(prepareGallery)
addLoadEvent(stripeTables)
addLoadEvent(highLightRows)
addLoadEvent(displayAbbreviations)
addLoadEvent(focusLabels)
addLoadEvent(prepareForms)
