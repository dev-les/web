<!-- Please remove this file from your project -->
<style>
    .sub-header {
        font-size: 18px;
        font-family: 'Trebuchet MS', sans-serif;
    }
    .main-header {
        font-family: 'Trebuchet MS', sans-serif;
        font-weight: bold;
    }
    .main-header-nav {
        padding-left: 10%;
    }
</style>
<template>
 <div>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="/">
   <!-- <img src="https://placekitten.com/g/30/30" class="d-inline-block align-top"> -->
        <div class="main-header-nav">
            <h1 class="main-header">DEV-LES</h1>
            <h2 class="sub-header">Software Development</h2>
        </div>
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
          <b-nav-item href="#" right><NuxtLink style="text-decoration: none; color: inherit;" to="/">Home</NuxtLink></b-nav-item>
          <b-nav-item href="#" rigth> <NuxtLink style="text-decoration: none; color: inherit;" to="/blog">Blog</NuxtLink></b-nav-item>
          <b-nav-item href="#" rigth><NuxtLink style="text-decoration: none; color: inherit;" to="/about">About</NuxtLink></b-nav-item>
          <b-nav-item href="#" rigth><NuxtLink style="text-decoration: none; color: inherit;" to="/projects">Projects</NuxtLink></b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'NuxtMenu'
}
</script>
