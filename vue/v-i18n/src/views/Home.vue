<template>
  <div class="home">
    <h1 class="row">{{ $t('home.description') }}</h1>
    <p class="row">{{ $t('home.title') }}</p>
    <div class="lang-toggle row">
      <span>{{ $t('home.toggleLanguage') }}：</span>
      <button @click="toggleLanguage('zh')"
        type="button">{{ $t('home.chinese') }}</button>
      <button @click="toggleLanguage('en')"
        type="button">{{ $t('home.english') }}</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',

  methods: {
    toggleLanguage (lang) {
      this.$i18n.locale = lang
      this.$store.dispatch('setLanguage', lang)
    }
  },

  created () {
    console.log(this.$i18n.t('message'))
  }
}
</script>
