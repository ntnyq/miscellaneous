<template>
  <div class="container">
    <h1>Root页</h1>
    <blockquote>1. root为根状态</blockquote>
    <div class="box">
      <p class="num">RootNum: {{rootNum}}</p>
    </div>
    <div class="extra">
      <p>此时FooNum为{{fooNum}}</p>
      <p>此时BarNum为{{barNum}}</p>
    </div>
    <div class="btns">
      <button @click="add"
        type="button">增加</button>
      <button @click="sub"
        type="button">减少</button>
      <button @click="addIfOdd"
        type="button">奇数则增加</button>
      <button @click="addAsync"
        type="button">异步增加</button>
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
  name: 'Index',

  computed: {
    ...mapGetters(['rootNum', 'isOdd', 'fooNum', 'barNum'])
  },

  methods: {
    add () {
      this.$store.dispatch('add');
    },

    sub () {
      this.reduce();
    },

    addIfOdd () {
      this.isOdd && this.$store.dispatch('addIfOdd');
    },

    addAsync () {
      this.$store.dispatch('addAsync');
    },

    ...mapActions([
      'reduce'
    ])
  },

  mounted () {
    $bus.$emit('log');
  }
};
</script>
