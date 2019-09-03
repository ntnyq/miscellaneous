$(function() {
  $('.open_ico').click(function() {
    if (
      $(this)
        .next('.note_info')
        .is(':visible')
    ) {
      $(this)
        .text('+')
        .removeClass('open_ico_focu')
      $(this)
        .next('.note_info')
        .slideUp('fast')
    } else {
      $(this)
        .text('—')
        .addClass('open_ico_focu')
      $(this)
        .next('.note_info')
        .slideDown('fast')
    }
  })
  $('.note h2').click(function() {
    if (
      $(this)
        .siblings('.note_info')
        .is(':visible')
    ) {
      $(this)
        .next('.open_ico')
        .removeClass('open_ico_focu')
        .text('+')
      $(this)
        .siblings('.note_info')
        .slideUp('fast')
    } else {
      $(this)
        .next('.open_ico')
        .addClass('open_ico_focu')
        .text('—')
      $(this)
        .siblings('.note_info')
        .slideDown('fast')
    }
  })

  $('#open').click(function() {
    $('.open_ico')
      .text('—')
      .addClass('open_ico_focu')
    $('.note_info').fadeIn('slow')
  })
  $('#close').click(function() {
    $('.open_ico')
      .text('+')
      .removeClass('open_ico_focu')
    $('.note_info').hide()
  })
})
