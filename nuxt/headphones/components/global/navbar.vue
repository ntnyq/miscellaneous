<template>
  <nav class="navbar">
    <div class="container">
      <h1 class="logo">Phono</h1>
      <ul class="nav">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss">
.navbar {
  padding: 0.3rem 0;
  font-size: 1.2rem;

  .container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
  }

  .logo {
    font-size: 2rem;
  }

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    justify-self: flex-end;
  }

  a {
    padding: 0 1rem;

    &:hover {
      color: #555;
    }
  }
}
</style>
