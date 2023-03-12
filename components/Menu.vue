<!-- Please remove this file from your project -->
<style>
    .sub-header {
        font-size: 18px;
        font-family: 'Trebuchet MS', sans-serif;
    }
    .main-header {
        font-family: 'Trebuchet MS', sans-serif;
        font-weight: bold;
        padding-left: 15px;
        padding-top: 5px;
    }
    .main-header-nav {
        padding-left: 10%;
        padding-top: 10%;
    }
    .logo {
      height: 60px;
      width: 60px;
    }
    .horiz {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      
    }
    .nav {
      background-color:#272a34!important;
    }
    .link-style {
      color: white;
      text-decoration: none;
      font-family: 'Trebuchet MS', sans-serif;
      font-size: 21px;
    }
    .link-style:hover {
      text-decoration: none;
      color: #4ff98e;
    }
    .active {
      text-decoration: none;
      color: #4ff98e;
    }
    .nav-pills .nav-link.active {
      background-color: #282a34 !important;
      border: solid #4ff98e;
      color: #4ff98e !important;
      box-shadow: 0 10px 30px -15px #4ef98d;

    }
</style>
<template>
 <div>
  <b-navbar class="nav" toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="/">
        <div class="main-header-nav">
          <div class="horiz">
            <img class="logo" src="../assets/images/dev-les-logo.png">
            <h1 class="main-header">DEV-LES</h1>
          </div>
        </div>
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
          <b-nav-item href="#" rigth><NuxtLink class="link-style" :class="{'active':option === '#aboutMe'}"  @click.native="setOptions('#aboutMe')" to="/#aboutMe">About</NuxtLink></b-nav-item>
          <b-nav-item href="#" rigth> <NuxtLink class="link-style" :class="{'active':option === '#experience'}"  @click.native="setOptions('#experience')" to="/#experience">Experience</NuxtLink></b-nav-item>
          <b-nav-item href="#" rigth><NuxtLink class="link-style" :class="{'active':option === '#projects'}" @click.native="setOptions('#projects')" to="/#projects">Projects</NuxtLink></b-nav-item>
           <b-nav-item href="#" rigth><NuxtLink class="link-style" :class="{'active':option === '#contact'}" @click.native="setOptions('#contact')" to="/#contact">Contact</NuxtLink></b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  </div>
</template>

<script setup>
import { ref, set } from 'vue'
import { onMounted } from "vue";

onMounted(() => {
  if($nuxt.$route.hash){
    setOptions($nuxt.$route.hash)
  }
})

let option = ref('');
function setOptions(val) {
  option.value = val;
}
</script>
