;(function($) {
  var uniQueCntr = 0

  $.fn.scrolled = function(waitTime, fn) {
    if (typeof waitTime === 'function') {
      fn = waitTime
      waitTime = 100
    }

    var tag = 'scrollTimer' + uniQueCntr++

    this.scroll(function() {
      var $this = $(this)

      clearTimeout($this.data(tag))
      $this.data(
        tag,
        setTimeout(function() {
          $this.removeData(tag)
          fn.call($this[0])
        }, waitTime)
      )
    })
  }

  $.fn.aniView = function(options, callback) {
    if (typeof options === 'function') {
      callback = options
      options = {}
    }

    var settings = $.extend(
      {
        animateType: 'letters',
        animateThreshold: 0,
        scrollPollInterval: 20,
        scrollContainer: 'window',
      },
      options
    )

    var collection = this

    $(collection).each(function(idx, element) {
      switch (settings.animateType) {
        case 'letters':
          var textContent = $(element).text()

          $(element).html(
            textContent.replace(
              /\S/g,
              '<span style="position: relative; display: inline-block; opacity: 0;" class="av-letter">$&</span>'
            )
          )
          break

        case 'p':
          $(element)
            .find('p')
            .css({ postion: 'relative', display: 'block', opacity: '0' })
          break

        default:
          break
      }
    })

    function isEnterViewport(element) {
      var elementTop = $(element).offset().top
      var viewportBottom = $(window).scrollTop() + $(window).height()

      return elementTop < viewportBottom - settings.animateThreshold
    }

    function callAnimateFunction(collection) {
      $(collection).each(function(index, element) {
        var animateType = $(element).data('ani-view') || settings.animateType

        if (
          $(element).is('[data-ani-view]') &&
          !$(element).hasClass('av-running') &&
          isEnterViewport(element)
        ) {
          $(element).addClass('av-running')
          typeof callback === 'function' &&
            callback({
              element: element,
              type: animateType,
            })
        }
      })
    }

    callAnimateFunction(collection)

    $(settings.scrollContainer).scrolled(
      settings.scrollPollInterval,
      function() {
        callAnimateFunction(collection)
      }
    )
  }

  $(function() {
    $('[data-ani-view]').each(function(idx, element) {
      var $this = $(element)
      var animateType = $this.data('ani-view')
      var animateThreshold = $this.data('animate-threshold')
      var scrollContainer = $this.data('scroll-container')
      var scrollPollInterval = $this.data('scroll-poll-interval')

      $this.aniView(
        {
          animateType: animateType,
          animateThreshold: +animateThreshold || undefined,
          scrollContainer: scrollContainer,
          scrollPollInterval: +scrollPollInterval || undefined,
        },
        function(params) {
          var element = params.element
          var type = params.type

          switch (type) {
            case 'letters':
              anime({
                targets: element.getElementsByClassName('av-letter'),
                translateY: [100, 0],
                translateZ: 0,
                opacity: [0, 1],
                easing: 'easeInQuad',
                duration: 1000,
                delay: function(el, i) {
                  return 300 + 50 * i
                },
              })
              break

            case 'p':
              anime({
                targets: element.getElementsByTagName('p'),
                translateY: [60, 0],
                translateZ: 0,
                rotate: [4, 0],
                opacity: [0, 1],
                easing: 'easeInQuad',
                duration: 1000,
                delay: function(el, i) {
                  return 100 + 50 * i
                },
              })
              break

            default:
              break
          }
        }
      )
    })
  })
})(jQuery)
