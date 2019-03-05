<template>
  <div id="app">
    <div class="wrap">
      <v-echart
        :options="polar"
        autoresize
      />
    </div>
  </div>
</template>

<script>
const length = 360

export default {
  name: 'app',

  data () {
    const data = Array.apply(null, { length }).map((_, idx) => {
      const t = idx / 180 * Math.PI
      const r = Math.sin(2 * t) * Math.cos(2 * t)

      return [r, idx]
    })

    return {
      polar: {
        title: {
          text: '极坐标双数值轴'
        },
        legend: {
          data: ['line']
        },
        polar: {
          center: ['50%', '54%']
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        angleAxis: {
          type: 'value',
          startAngle: 0
        },
        radiusAxis: {
          min: 0
        },
        series: [
          {
            coordinateSystem: 'polar',
            name: 'line',
            type: 'line',
            showSymbol: false,
            data
          }
        ],
        animationDuration: 2000
      }
    }
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
}

.wrap {
  position: relative;
  width: 60vmin;
  height: 60vmin;
  .echarts {
    max-width: 100%;
    max-height: 100%;
  }
}
</style>
