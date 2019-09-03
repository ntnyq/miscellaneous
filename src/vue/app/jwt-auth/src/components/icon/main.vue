<template>
  <i :class="`goy-icon goy-icon-${name}`"
    @click="$emit('click')"
    @mouseover="$emit('mouseover')"
    @mouseout="$emit('mouseout')"></i>
</template>

<script>
import './style.scss';

export default {
  name: 'GoyIcon',
  props: ['name']
}
</script>



