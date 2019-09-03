<template>
  <div
    class="section-text"
    id="about"
  >
    <div class="overlay">
      <div class="section-text-inner py-5">
        <h2 class="text-2">Louder &amp; Clean</h2>
        <h3 class="text-5 mt-1">People aren't Hearing All the Music</h3>
        <p class="mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati magni quasi praesentium magnam, minima vitae cumque itaque hic deleniti, porro ex non provident voluptate doloribus alias dolore cum? Excepturi, pariatur.</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.section-text {
  position: relative;
  background: url('/images/section-b.jpg') no-repeat bottom center;
  background-size: cover;
  min-height: 600px;

  @include for-mobile {
    min-height: 800px;
  }

  &-inner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 860px;
    height: 100%;
    margin: 0 auto;
    padding: 5rem 0;
    text-align: center;
    color: #fff;

    p {
      font-size: 1.5rem;
      margin-top: 1rem;

      @include for-mobile {
        padding: 0 1rem;
        font-size: 1.2rem;
      }
    }
  }

  h2 {
    font-size: 1.8rem;

    @include for-mobile {
      font-size: 1.2rem;
    }
  }

  h3 {
    font-size: 3.5rem;
    margin-top: 1rem;

    @include for-mobile {
      font-size: 2.5rem;
    }
  }
}
</style>
