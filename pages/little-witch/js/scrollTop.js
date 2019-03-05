$(document).ready(function() {
  $(function() {
    if ($.browser.msie && $.browser.version <= 6) {
      $('#back-to-top').css({ position: 'absolute', top: '400px', bottom: 'auto' })
      $(window).scroll(function() {
        var scroll_top = $(this).scrollTop() + 400
        $('#back-to-top').css('top', scroll_top)
      })
    } else {
      return
    }
  }) //压缩代码
  /*if($.browser.msie && $.browser.version <= 6)
		{
			$("#back-to-top").css({"position":"absolute","top":"400px","bottom":"auto"});
			$(window).scroll(function(){
				var scroll_top=$(this).scrollTop()+400;
				$("#back-to-top").css("top",scroll_top);
			});
		}*/ $(
    window,
  ).scroll(function() {
    if ($(window).scrollTop() > 100) {
      $('#back-to-top').fadeIn('slow')
    } else {
      $('#back-to-top').fadeOut('slow')
    }
  })
  $('#back-to-top').click(function() {
    $('html,body').animate({ scrollTop: 0 })
  })
})
