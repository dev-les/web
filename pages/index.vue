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
  background-image: url("../assets/images/desk.png");

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
.profile-pic {
  width: 350px;
  height: 450px;
}
.img-container {
  display: flex;
  align-items: center;
  border: 5px solid #4ff98e;
}
.backgroundColor {
  background-color: #282a34;
}
.text-style {
  color: white;
  font-family: 'Trebuchet MS', sans-serif !important;
}
.link a {
  color: #4ff98e;
  text-decoration: none;
}
.block {
  padding: 20px;
  width: 100%;
}
.container {
  display: flex;
  align-items: center;
  padding-top: 25px;
}
.title {
  text-decoration: none;
}
@media all and (max-width: 800px) {
  .container {
    /* When on medium sized screens, we center it by evenly distributing empty space around items */
    flex-flow: column wrap;
    align-items: center;
  }
  .block {
    width: 100%;
    padding: 0;
    padding-top: 20px;
  }
  .about {
    padding-bottom: 20px;
  }
  
}
</style>
<template>
<div  class="backgroundColor">
<div class="parallax">
  <Terminal/>
</div>
<div>
<div class="text-style">
    <div class="container">
          <div class="block about">
            <h2 id="aboutMe">About Me</h2>
            <div>Hi! My name is Luis. I am a full stack developer based in Charlotte, NC. I am passionate about learning and building cool things that I can share with others on the internet.
              My interest in software started back in 2014 while learning to program robots in high school.
            <br><br> 
            Jump to today, I've graduated cum laude from the  <span class="link"><a href="https://www.charlotte.edu/">University of North Carolina at Charlotte</a> &#9935;</span> in 2020 with a Bachelor of Science (B.S.) in Computer Science, and have been lucky enough to get to work for a 
            <span class="link">
              <a href="https://jobs.masco.com/mascosupportservices/us/en/">customer support service company</a> and the
            </span>
            <span class="link">
              <a href="https://www.truist.com/">seventh largest bank in the US</a>. Nowadays I mainly focus on further developing and maintaining a react native gaming application at 
              <a href="https://www.truist.com/">Truist</a>.
            </span>
            <br><br>
            <div>Some of my hobbies include watching football &#127944;, movies &#127916;,  listening to music &#127911;, gaming &#127918;, and creating <span class="link"> <a href="https://www.youtube.com/@dev-les/">software engineering videos on youtube</a></span> <img width="22px" height="20px" src="../assets/images/youtube.png">.</div>
            </div>
          </div>
          <div class="img-container">
            <img class="profile-pic" :src="require('../assets/images/profile-pic.jpg')">
          </div>
    </div>
    <div class="container">
      <div class="block">
        <h2 id="skills">Skills</h2>
        <Skill/>
      </div>
    </div>
    <div class="container">
      <div class="block">
        <h2 id="experience">Experience</h2>
        <Experience/>
      </div>
    </div>
    <div class="container">
      <div class="block">
        <h2 id="projects">Projects</h2>
        <Projects/>
      </div>
    </div>
    <div class="container">
      <div class="block">
        <h2 id="contact">Contact</h2>
        <Contact/>
      </div>
    </div>
</div>
</div>
</div>
</template>

<script>
import Terminal from '../components/Terminal.vue'
import Skill from '../components/Skill.vue'
import Experience from '../components/Experience.vue'
import Projects from '../components/Projects.vue'
import Contact from '../components/Contact.vue'
export default {
  components: { Terminal, Skill, Experience, Projects, Contact },
  name: 'IndexPage'
}
</script>
