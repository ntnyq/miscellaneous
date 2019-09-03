<template>
  <div class="section-footer py-4 btn-primary">
    <div class="container">
      <div>
        <h2 class="text-2 mb-1">
          Lorem ipsum dolor sit.
        </h2>
        <div class="medias">
          <a href="http://twitter.com">
            <i class="fa fa-twitter fa-2x"></i>
          </a>
          <a href="http://facebook.com">
            <i class="fa fa-facebook fa-2x"></i>
          </a>
          <a href="http://youtube.com">
            <i class="fa fa-youtube fa-2x"></i>
          </a><a href="http://twitter.com">
            <i class="fa fa-twitter fa-2x"></i>
          </a>
        </div>
      </div>
      <div>
        <h3>Company Info</h3>
        <ul>
          <li><a href="#">All products</a></li>
          <li><a href="#">About US</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Services</a></li>
        </ul>
      </div>
      <div>
        <h3>Blog Posts</h3>
        <li><a href="#">Lorem ipsum dolor sit.</a></li>
        <li><a href="#">Lorem ipsum dolor sit.</a></li>
        <li><a href="#">Lorem ipsum dolor sit.</a></li>
        <li><a href="#">Lorem ipsum dolor sit.</a></li>
      </div>
      <div>
        <h3>Subscribe US</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis tempora rerum ut?
        </p>
        <form
          name="email-form"
          class="mt-1"
          action=""
          method="post"
        >
          <div class="email-form">
            <span class="form-control-wrap">
              <input
                id="email"
                name="email"
                type="email"
                size="40"
                placeholder="E-mail"
                class="form-control"
              >
            </span>
            <button
              type="button"
              value="submit"
              class="form-control submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.section-footer {
  background-color: $--primary-color;
  padding: 4rem 0;
  color: #fff;

  .container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;
  }

  .medias {
    display: flex;
    padding: 0 1rem;
    justify-content: space-around;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  h3 {
    margin-bottom: 0.7rem;
  }

  a {
    line-height: 1.9;
    color: #ccc;

    i {
      margin-right: 0.5rem;
      color: #555;
    }
  }
  @include for-mobile {
    padding: 2rem 0;

    .container {
      grid-template-columns: 1fr;
      text-align: center;
    }

    div {
      &:nth-child(2),
      &:nth-child(3) {
        display: none;
      }
    }
  }
}

.email-form {
  position: relative;
  display: inline-block;
  width: 100%;
  margin-top: 1rem;
  background-color: #555;
  border-radius: 20px;
  line-height: 0;

  .form-control {
    display: inline-block;
    width: 100%;
    height: 45px;
    margin: 0;
    padding: 0 3rem 0 1.5rem;
    background-color: transparent;
    border-radius: 20px;
    font-family: inherit;
    border: none;
    outline: none;
    font-size: 1rem;
    color: #ddd;
  }

  .submit {
    position: absolute;
    top: 0;
    right: 0;
    display: block;
    width: 3rem;
    height: 45px;
    padding-right: 4rem;
    background-color: #eee;
    border-radius: 0 20px 20px 0;
    font-size: 1rem;
    font-weight: bold;
    text-align: center;
    color: $--primary-color;
    cursor: pointer;
    box-sizing: border-box;
  }
}

.btn {
  display: inline-block;
  background: $--primary-color;
  padding: 0.8rem 1.5rem;
  border-radius: 30px;
  border: none;
  outline: none;
  font-size: 1.1re;
  cursor: pointer;
  color: #fff;

  &:hover {
    background-color: $--secondary-color;
  }
}
</style>
