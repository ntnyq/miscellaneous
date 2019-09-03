<template>
  <div class="section-gallery">
    <div
      class="gallery"
      id="gallery"
    >
      <a
        href="/images/p1.jpg"
        class="big"
      >
        <img
          src="/images/p1.jpg"
          alt=""
        />
      </a>
      <a
        href="/images/p2.jpg"
        class="big"
      >
        <img
          src="/images/p2.jpg"
          alt=""
        />
      </a>
      <a
        href="/images/p3.jpg"
        class="big"
      >
        <img
          src="/images/p3.jpg"
          alt=""
        />
      </a>
      <a
        href="/images/p4.jpg"
        class="big"
      >
        <img
          src="/images/p4.jpg"
          alt=""
        />
      </a>
      <a
        href="/images/p5.jpg"
        class="big"
      >
        <img
          src="/images/p5.jpg"
          alt=""
        />
      </a>
      <a
        href="/images/p6.jpg"
        class="big"
      >
        <img
          src="/images/p6.jpg"
          alt=""
        />
      </a>
    </div>
  </div>
</template>

<script>
import SimpleLightbox from 'simple-lightbox'
import 'simple-lightbox/dist/simpleLightbox.min.css'

export default {
  mounted () {
    new SimpleLightbox({ elements: '.gallery a' })
  }
}
</script>

<style lang="scss">
.section-gallery {
  .gallery {
    display: grid;
    grid-template-columns: repeat(5, 1fr);

    a {
      &:first-child {
        grid-row: 1/3;
        grid-column: 1/3;
      }

      &:nth-of-type(2) {
        grid-column-start: 3;
        grid-column-end: 5;
      }
    }

    img,
    a {
      width: 100%;
      height: 100%;
    }

    @include for-mobile {
      display: grid;
      grid-template-columns: repeat(3, 1fr);

      a {
        &:first-child {
          grid-row: 1/1;
          grid-column: 1/1;
        }

        &:nth-child(2) {
          grid-column: 2/4;
          grid-row: 2/2;
        }

        &:last-child {
          display: none;
        }
      }
    }
  }
}
</style>
