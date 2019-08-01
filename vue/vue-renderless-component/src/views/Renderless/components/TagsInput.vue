<script>
export default {
  name: 'TagsInput',

  props: {
    value: {
      type: Array,
      default: () => []
    }
  },

  data () {
    return {
      newTag: ''
    }
  },

  methods: {
    add () {
      const tagText = this.newTag.trim()

      if (tagText && !this.value.includes(tagText)) {
        this.$emit('input', [...this.value, tagText])
        this.newTag = ''
      }
    },

    remove (tagText) {
      this.$emit('input', this.value.filter(tag => tag !== tagText))
    }
  },

  render () {
    return this.$scopedSlots.default({
      tags: this.value,
      addTag: this.add,
      removeTag: this.remove,
      inputAttrs: { value: this.newTag },
      inputEvents: {
        input: evt => { this.newTag = evt.target.value },
        keydown: evt => {
          if (evt.keyCode === 13) {
            evt.preventDefault()
            this.add()
          }
        }
      }
    })
  }
}
</script>
