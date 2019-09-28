<template>
  <div class="tinymce">
    <textarea :id="id"></textarea>
  </div>
</template>

<script>
import defaultConfig from './config'

export default {
  name: 'tinymce',

  props: {
    value: {
      type: String,
      default: ''
    },

    config: {
      type: Object,
      default: () => ({ theme: 'modern', height: 300 })
    },

    url: {
      type: String,
      default: ''
    },

    accept: {
      type: Array,
      default: () => ['image/jpeg', 'image/png']
    },

    maxSize: {
      type: Number,
      default: 2 * 1024 * 1024 // 2MB
    },

    withCredentials: {
      type: Boolean,
      default: false
    }
  },

  data () {
    const id = Date.now()

    return {
      id,
      editor: null
    }
  },

  methods: {
    initEidtor () {
      const vm = this

      window.tinymce.init({
        ...defaultConfig,

        images_upload_handler (blobInfo, success, failure) {
          const { size, type } = blobInfo.blob()
          if (size > vm.maxSize) {
            failure('文件体积过大')
          }

          if (vm.accept.includes(type)) {
            uploadPic()
          } else {
            failure('图片格式错误')
          }

          function uploadPic () {
            const xhr = new XMLHttpRequest()
            const formData = new FormData()

            xhr.withCredentials = vm.withCredentials
            xhr.open('POST', vm.url)
            xhr.onload = () => {
              if (xhr.status !== 200) {
                vm.$emit('on-upload-fail')
                return failure(`上传失败: ${xhr.status}`)
              }

              const json = JSON.parse(xhr.responseText)

              vm.$emit('on-upload-complete', [json, success, failure])
            }

            formData.append('file', blobInfo.blob())
            xhr.send(formData)
          }
        },

        ...this.config,

        selector: `#${this.id}`,

        setup (editor) {
          vm.editor = editor

          editor.on('init', () => {
            // vm.isLoading = false
            vm.$emit('on-ready')
            editor.setContent(vm.value)
          })

          editor.on('input change undo redo', () => {
            vm.$emit('input', editor.getContent())
          })
        }
      })
    }
  },

  watch: {
    value () {
      console.log(this.editor)
      this.editor && this.editor.setContent(this.value) && this.editor.focus()
    }
  },

  beforeDestroy () {
    this.$emit('on-destroy')
    window.tinymce.remove(`#${this.id}`)
  },

  mounted () {
    this.initEidtor()
  }
}
</script>

<style lang="scss">
.tinymce {
  position: relative;
}
</style>
