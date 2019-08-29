;($ => {
  const noop = () => {}

  const toFixedFix = (num, decs, format) => {
    const k = Math.pow(10, decs)
    return '' + (Math[format](num * k) / k).toFixed(decs)
  }

  const templateNums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
  const numberAnimateTemplate = `
      <div class="number-animate-num" data-target="{{num}}">
        ${$.map(templateNums, c => `<span class="number-animate-span">${c}</span>`).join('')}
      </div>
    `

  const defaultOptions = {
    number: 0,
    duration: 1e3,
    type: 'number',
    mode: 'auto',
    isRound: false,
    autoplay: !0,
    separator: ',',
    decimal: '.',
    decimals: 0,
  }

  var NumberAnimator = function(dom, opts) {
    const _this = this

    _this.$obj = $(dom)
    _this.opts = opts
    _this.displayValue = ''
    _this._init()
  }

  NumberAnimator.prototype = {
    constructor: NumberAnimator,

    _isNumber: function(val) {
      return !isNaN(parseFloat(val))
    },

    _formatNumber: function(num) {
      const { separator, isRound, decimal, decimals } = this.opts
      const format = isRound ? 'round' : 'floor'
      let result = []

      // TODO 修复当设置小数位数过长的问题
      result = (decimals ? toFixedFix(num, decimals, format) : '' + Math[format](num)).split('.')

      if (result[0].length > 3) {
        result[0] = result[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, separator)
      }

      if ((result[1] || '').length < decimals) {
        result[1] = result[1] || ''
        result[1] += new Array(decimals - result[1].length + 1).join('0')
      }

      return result.join(decimal)
    },

    _renderDom: function() {
      const { $obj, opts, displayValue } = this
      const { separator } = opts
      const domStr = ['<div class="number-animate-inner">']

      for (let i = 0, len = displayValue.length; i < len; i++) {
        if (displayValue[i] === separator) {
          domStr.push(`<div class="number-animate-symbol">${separator}</div>`)
        } else {
          domStr.push(numberAnimateTemplate.replace('{{num}}', displayValue[i]))
        }
      }

      domStr.push('</div>')

      $obj.empty().html(`<div class="number-animate-wrap">${domStr.join('')}</div>`)
    },

    _createPrefixStyle: function(k, v) {
      return {
        [`-webkit-${k}`]: v,
        [`-moz-${k}`]: v,
        [`-ms-${k}`]: v,
        [`-o-${k}`]: v,
        [`${k}`]: v,
      }
    },

    _setStyles: function($dom, obj) {
      const _this = this
      let css = {}

      for (let key in obj) {
        css = { ..._this._createPrefixStyle(key, obj[key]), ...css }
      }

      $dom.css(css)
    },

    _animeNumber: function() {
      const _this = this
      const { $obj, opts } = _this
      const { duration, autoplay } = opts

      $obj.find('.number-animate-num').each((_, item) => {
        const $item = $(item)
        const target = $item.data('target')
        const idx = templateNums.indexOf('' + target)
        const spanHeight = $item.height() / templateNums.length
        const offsetTop = `${-idx * spanHeight}px`

        if (autoplay) {
          _this._setStyles($item, {
            transform: `translate3d(0, ${offsetTop}, 0)`,
            'transition-duration': `${duration}ms`,
          })
        } else {
          _this._setStyles($item, {
            transform: `translate3d(0, ${offsetTop}, 0)`,
          })
          _this.opts.autoplay = true
        }
      })
    },

    resetData: function(value) {
      const _this = this

      _this.opts.number = value
      _this._init()
    },

    _init: function() {
      const _this = this
      const { number } = _this.opts

      if (!_this._isNumber(number))
        throw new Error(
          '>>> jquery.num-animte: In order to init the plugin, a number need to be passed in!',
        )

      _this.displayValue = _this._formatNumber(number)
      _this._renderDom()
      _this._animeNumber()
    },
  }

  $.fn.extend({
    numberAnimate(opts = {}, callback = noop) {
      opts = $.extend(defaultOptions, opts)

      return this.each(() => {
        callback(new NumberAnimator(this, opts))
      })
    },
  })
})(jQuery)
