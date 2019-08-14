<template>
  <div class="section-gallery">
    <div
      class="gallery"
      id="gallery"
    >
      <a
        href="https://i.ibb.co/CHLBZnp/gal2323.jpg"
        class="big"
      >
        <img
          src="https://i.ibb.co/CHLBZnp/gal2323.jpg"
          alt=""
        />
      </a>
      <a
        href="https://i.ibb.co/4pBbhfY/gal39834.jpg"
        class="big"
      >
        <img
          src="https://i.ibb.co/4pBbhfY/gal39834.jpg"
          alt=""
        />
      </a>
      <a
        href="https://i.ibb.co/xSnHP7g/gal43884.jpg"
        class="big"
      >
        <img
          src="https://i.ibb.co/xSnHP7g/gal43884.jpg"
          alt=""
        />
      </a>
      <a
        href="https://i.ibb.co/QN6Bnrb/gal4958.jpg"
        class="big"
      >
        <img
          src="https://i.ibb.co/QN6Bnrb/gal4958.jpg"
          alt=""
        />
      </a>
      <a
        href="https://i.ibb.co/dGZvj75/gal4545.jpg"
        class="big"
      >
        <img
          src="https://i.ibb.co/dGZvj75/gal4545.jpg"
          alt=""
        />
      </a>
      <a
        href="https://i.ibb.co/S6FVFNt/gal74744.jpg"
        class="big"
      >
        <img
          src="https://i.ibb.co/S6FVFNt/gal74744.jpg"
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
