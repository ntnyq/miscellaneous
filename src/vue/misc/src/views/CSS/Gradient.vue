<template>
  <div class="gradient">
    <div
      v-for="n in 6"
      :key="n"
      class="block"
    />
  </div>
</template>

<style lang="scss">
.gradient {
  &::-webkit-scrollbar {
    display: none;
  }

  .block {
    width: 200px;
    height: 100px;
    margin: 20px;

    &:nth-of-type(1) {
      background: #00a3e6;
      background: linear-gradient(
          315deg,
          rgba(255, 255, 255, 0.5) 0%,
          rgba(255, 255, 255, 0) 100%
        ),
        linear-gradient(315deg, #3fc7ff 0%, #00a3e6 100%);
    }

    &:nth-of-type(2) {
      background: #6700df;
      background: linear-gradient(
          315deg,
          rgba(255, 255, 255, 0.5) 0%,
          rgba(255, 255, 255, 0) 100%
        ),
        linear-gradient(315deg, #af6aff 0%, #6700df 100%);
    }

    &:nth-of-type(3) {
      background: #ff2f2f;
      background: linear-gradient(
          315deg,
          rgba(255, 255, 255, 0.5) 0%,
          rgba(255, 255, 255, 0) 100%
        ),
        linear-gradient(315deg, #fa5a5a 0%, #ff2f2f 100%);
    }

    &:nth-of-type(4) {
      background: #00d67c;
      background: linear-gradient(
          315deg,
          rgba(255, 255, 255, 0.5) 0%,
          rgba(255, 255, 255, 0) 100%
        ),
        linear-gradient(315deg, #20ffa7 0%, #00d67c 100%);
    }

    &:nth-of-type(5) {
      background: #00d67c;
      background: linear-gradient(
          315deg,
          rgba(255, 255, 255, 0.5) 0%,
          rgba(255, 255, 255, 0) 100%
        ),
        linear-gradient(315deg, #ff4ed4 0%, #ff00c1 100%);
    }

    &:nth-of-type(6) {
      background: rgba(0, 0, 0, 0.6);
      background: linear-gradient(
          315deg,
          rgba(255, 255, 255, 0.5) 0%,
          rgba(255, 255, 255, 0) 100%
        ),
        linear-gradient(315deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.6) 100%);
    }
  }
}
</style>
