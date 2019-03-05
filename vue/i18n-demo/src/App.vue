<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

$primaryColor: #284b63;

html,
body {
  height: 100%;
  overflow: hidden;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

#app {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: $primaryColor;
  text-align: center;
  color: #fff;
}

.row {
  margin-bottom: 20px;
}

button {
  padding: 5px 20px;
  appearance: none;
  background: #fff;
  border: none;
  border-radius: 5px;
  outline: none;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  line-height: 1;
  font: inherit;
  color: $primaryColor;
  & + button {
    margin-left: 1em;
  }
}
</style>
