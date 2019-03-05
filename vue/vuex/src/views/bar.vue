<template>
  <div class="container">
    <h1>页面Bar</h1>
    <blockquote>1. Bar为namespaced的模块</blockquote>
    <div class="box">
      <p class="num">BarNum: {{barNum}}</p>
    </div>
    <div class="extra">
      <p>此时RootNum为{{rootNum}}</p>
      <p>此时FooNum为{{fooNum}}</p>
    </div>
    <div class="btns">
      <button @click="add"
        type="button">增加</button>
      <button @click="reduce"
        type="button">减少</button>
    </div>
    <div class="links">
      <router-link to="/index">去首页</router-link>
      <span>|</span>
      <router-link to="/foo">去页面FOO</router-link>
      <span>|</span>
      <router-link to="/bar">去页面BAR</router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import $bus from '@/bus';

export default {
  name: 'Bar',

  computed: {
    ...mapGetters(['fooNum', 'rootNum', 'barNum'])
  },

  methods: {
    add () {
      this.barAdd();
    },

    reduce () {
      this.$store.dispatch('bar/barReduce')
    },

    ...mapActions('bar', [
      'barAdd'
    ])
  },

  mounted () {
    $bus.$emit('sub', 5);
  }
};
</script>
