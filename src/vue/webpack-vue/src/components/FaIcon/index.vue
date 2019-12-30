<template>
  <span :class="`fa fa-${name}`" />
</template>

<script>
export default {
  name: 'FaIcon',

  props: {
    name: {
      type: String,
      required: true,
    },
  },
}
</script>
