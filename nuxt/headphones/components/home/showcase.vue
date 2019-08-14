<template>
  <div class="section-showcase">
    <div class="container">
      <div>
        <h1>The headphones of future.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, sint a. Quis consequatur, doloribus, repudiandae similique, error est cumque totam provident quo assumenda rerum consequuntur iure vitae omnis quam ipsam quas sed ea! Quaerat perspiciatis provident facilis corrupti magni adipisci.</p>
        <a
          class="btn"
          href="#"
        >Read More</a>
      </div>
      <img
        src="https://i.ibb.co/37Y74kv/showcase.jpg"
        alt="banner"
      >
    </div>
  </div>
</template>

<style lang="scss">
.section-showcase {
  margin: 2rem 0;

  .container {
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 3rem;

    @include for-mobile {
      grid-template-columns: 1fr;
      text-align: center;

      div {
        &:first-child {
          order: 2;
        }

        &:nth-child(2) {
          order: -1;
        }
      }

      img {
        width: 80%;
        margin: 0 auto;
      }
    }
  }

  h1 {
    font-size: 4rem;
    color: $--primary-color;
  }

  p {
    margin: 1rem 0;
  }
}
</style>
