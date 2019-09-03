<template>
  <div class="container">
    <h1>页面Foo</h1>
    <blockquote>1. Foo为普通模块</blockquote>
    <div class="box">
      <p class="num">FooNum: {{fooNum}}</p>
    </div>
    <div class="extra">
      <p>此时RootNum为{{rootNum}}</p>
      <p>此时BarNum为{{barNum}}</p>
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
import { mapGetters, mapActions, mapState } from 'vuex';
import $bus from '@/bus';

export default {
  name: 'Foo',

  computed: {
    ...mapState({
      fooNum: state => state.foo.num,
      barNum: state => state.bar.num
    }),
    ...mapGetters(['rootNum'])
  },

  methods: {
    add () {
      this.fooAdd();
    },

    reduce () {
      this.$store.dispatch('fooReduce');
    },

    ...mapActions([
      'fooAdd'
    ])
  },

  mounted () {
    $bus.$emit('add', 5);
  }
};
</script>
