<template>
  <div class="valicode">
    <canvas
      @click.stop="drawValicode"
      :width="width"
      :height="height"
      ref="canvas"
      title="Click to Update"
      style="cursor: pointer;"
    />
  </div>
</template>

<script>
import {
  random,
  randomColor,
  loopFn
} from './utils'

export default {
  name: 'Valicode',

  props: {
    valicode: {
      type: String,
      default: '2bxjj',
    },

    minFontSize: {
      type: Number,
      default: 28,
    },

    maxFontSize: {
      type: Number,
      default: 40,
    },

    minBgColor: {
      type: Number,
      default: 180,
    },

    maxBgColor: {
      type: Number,
      default: 240,
    },

    minLineColor: {
      type: Number,
      default: 40,
    },

    maxLineColor: {
      type: Number,
      default: 180,
    },

    minDotColor: {
      type: Number,
      default: 0,
    },

    maxDotColor: {
      type: Number,
      default: 255,
    },

    minColor: {
      type: Number,
      default: 50,
    },

    maxColor: {
      type: Number,
      default: 160,
    },

    dotNumber: {
      type: Number,
      default: 10,
    },

    lineNumber: {
      type: Number,
      default: 8,
    },

    width: {
      type: Number,
      default: 120,
    },

    height: {
      type: Number,
      default: 50,
    }
  },

  computed: {
    canvas () {
      return this.$refs.canvas
    }
  },

  methods: {
    drawDot (ctx) {
      loopFn(this.dotNumber, () => {
        ctx.fillStyle = random(this.minDotColor, this.maxDotColor)
        ctx.beginPath()
        ctx.arc(random(0, this.width), random(0, this.height), random(0, 3), 0, 2 * Math.PI)
        ctx.fill()
      })
    },

    drawLine (ctx) {
      loopFn(this.lineNumber, () => {
        ctx.strokeStyle = randomColor(this.minLineColor, this.maxLineColor)
        ctx.beginPath()
        ctx.moveTo(random(0, this.width), random(0, this.height))
        ctx.lineTo(random(0, this.width), random(0, this.height))
        ctx.stroke()
      })
    },

    drawText (ctx, char, idx) {
      const x = (idx + 1) * (this.width / (this.valicode.length + 1))
      const y = random(this.maxFontSize, this.height - 5)
      const deg = random(-45, 45)

      ctx.fillStyle = randomColor(this.minColor, this.maxColor)
      ctx.font = `${random(this.minFontSize, this.maxFontSize)}px SimHei`
      ctx.translate(x, y)
      ctx.rotate(deg * Math.PI / 180)
      ctx.fillText(char, 0, 0)
      ctx.rotate(-deg * Math.PI / 180)
      ctx.translate(-x, -y)
    },

    drawValicode () {
      if (this.canvas) {
        const ctx = this.canvas.getContext('2d')

        ctx.textBaseline = 'bottom'

        ctx.fillStyle = randomColor(this.minBgColor, this.maxBgColor)
        ctx.fillRect(0, 0, this.width, this.height)

        this.valicode.split('').map((char, idx) => this.drawText(ctx, char, idx))
        this.drawLine(ctx)
        this.drawDot(ctx)
      }
    }
  },

  watch: {
    valicode: 'drawValicode'
  },

  mounted () {
    this.drawValicode()
  }
}
</script>