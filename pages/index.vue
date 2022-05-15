<style>
.desk_img {
  width: 100%;
  height: 20%;
}
.welcome-mssg{
  color: white;
  font-family: 'Trebuchet MS', sans-serif;
  font-weight: bold;
}
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.parallax {
  /* The image used */
  background-image: url("../assets/images/Desk_Frame.png");

  /* Set a specific height */
  width: 100%;
  height: 20%;
  min-height: 680px; 

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.backgroundColor {
  background-color: #343a40;
}
</style>
<template>
<div class="backgroundColor">
<div class="parallax"></div>
<h2 class="centered welcome-mssg">Welcome to my site!</h2>
<div>
<b-container class="bv-example-row">
  <b-row>
    <b-col>
      <b-card
        title="Card Title"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2">
        <b-card-text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </b-card-text>

        <b-button href="#" variant="primary">Go somewhere</b-button>
      </b-card>
    </b-col>
    <b-col>
      <b-card
        title="Card Title"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2">
        <b-card-text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </b-card-text>
        <b-button href="#" variant="primary">Go somewhere</b-button>
      </b-card>
    </b-col>
    <b-col>
      <b-card
          title="Card Title"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2">
          <b-card-text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </b-card-text>
          <b-button href="#" variant="primary">Go somewhere</b-button>
      </b-card>
    </b-col>
  </b-row>
</b-container>
</div>
</div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
