<template>
  <div class="wrap">
    <the-navbar />
    <home-showcase />
    <home-about />
    <home-gallery />
    <the-footer />
  </div>
</template>

<script>
import TheNavbar from '@/components/global/navbar'
import TheFooter from '@/components/global/footer'
import HomeShowcase from '@/components/home/showcase'
import HomeAbout from '@/components/home/large-text'
import HomeGallery from '@/components/home/gallery'

export default {
  name: 'Index',

  components: {
    TheNavbar,
    TheFooter,
    HomeShowcase,
    HomeAbout,
    HomeGallery
  }
}
</script>

<style lang="scss">
.container {
  max-width: 1100px;
  padding: 0 2rem;
  margin: 0 auto;
  overflow: hidden;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: $--overlay-color;
}
</style>
