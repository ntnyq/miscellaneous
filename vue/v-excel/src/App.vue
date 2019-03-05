<template>
  <div id="app">
    <el-input-number v-model="length"
      :step="10"
      :min="1"
      :max="300"
      style="width: 200px; margin-right: 25px;"></el-input-number>
    <el-button @click="exportExcel"
      type="primary">下载excel</el-button>
  </div>
</template>

<script>
import downloadExcel from '@/vendors/excel'
import Mock from 'mockjs'

export default {
  name: 'App',

  data () {
    return {
      length: 50
    }
  },

  methods: {
    exportExcel () {
      const { length } = this
      const data = []
      Array.apply(null, { length }).map((_, idx) => {
        data.push(
          Mock.mock({
            '序号': '@increment',
            '时间': +Mock.Random.date('T'),
            '作者': '@cname',
            '编辑': '@cname',
            '标题': '@csentence(20, 30)',
            '简述': `我是测试数据-${idx}`,
            '预测': '@float(0, 100, 2, 2)',
            '重要性': '@integer(1, 3)',
            'type|1': ['CN', 'US', 'JP', 'EU'],
            'status|1': ['published', 'draft', 'deleted'],
            '时间2': '@datetime',
            '关注度': '@integer(300, 5000)',
            'platforms|1': ['css', 'js', 'react', 'vue', 'html']
          })
        )
      })

      downloadExcel(data, '测试.xlsx')
    }
  }
}
</script>
