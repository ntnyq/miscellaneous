window.onload = function() {
  function $(id) {
    return document.getElementById(id)
  }
  function fnime() {
    var time = new Date(),
      hour = time.getHours(),
      minute = time.getMinutes(),
      second = time.getSeconds()
    /*    if (hour > 12) {
      hour = hour -12;
    }*/
    hour %= 12
    $('second').style.transform = 'rotate(' + second * 6 + 'deg)'
    $('minu').style.transform = 'rotate(' + minute * 6 + 'deg)'
    $('hour').style.transform = 'rotate(' + hour * 30 + 'deg)'
  }
  setInterval(fnime, 1000)
}
