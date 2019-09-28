<template>
  <div id="app">
    <Tinymce v-model="initValue" />
    <tinymce-editor
      v-model="initValue"
      :init="{height: 300}"
    />
  </div>
</template>

<script>
import Tinymce from '@/components/Tinymce.vue'
import Editor from '@tinymce/tinymce-vue'

export default {
  name: 'app',
  components: {
    Tinymce,
    'tinymce-editor': Editor
  },

  data () {
    return {
      initValue: 'Hello world'
    }
  }
}
</script>
