<style>
.projects-main-container {
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
    padding-top: 20px;
}
.projects-container {
  display: contents;
}
.project-container {
  padding: 20px;
  text-align: center;
}
.thumbnail {
  width: 316px;
  height: 190px;
  box-shadow: 0 10px 30px -15px rgba(2,12,27,0.7);
}
.description {
    display: flex;
    text-align:right;
}
.project-display {
    background-color: #262831;
    box-shadow: 0 10px 30px -15px rgba(2,12,27,0.7);
    width: 100%;
    position: relative;
}
.project-display #display-img {
    width: 100%;
    padding-top:20px;
}
#close {
    right: 0;
    position: absolute;
    margin-top: 7px;
    margin-right: 6px;
}
.display-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 25px;
    justify-content: center;
}

.tech {
    display: flex;
    text-align: center;
    justify-content: center;
    flex-flow: row wrap;
    color: white;
}
.tech-container {
    padding-top: 10px;
    color: #4ff98e;
}
.project-links {
    justify-content: center;
    padding-top: 0 !important;
}
@media all and (max-width: 800px) {
  .display-container {
    padding: 0;
    padding-top: 20px;
  }
}


</style>
<template>
  <div class="projects-main-container">
        <div v-if="selected === false" class="projects-container">
        <div  v-for="(proj, index) of projDisplayed" :key="index" @click="select(proj)">
            <div class="project-container">
                <img class="thumbnail" :src="`${proj.img}`"/>
                <div style="padding-top:15px; font-size:21px;"><b>{{proj.name}}</b></div>
            </div>
        </div>
        </div>
         <div class="project-display" v-if="selected === true">
            <div id="close" @click="close()"><img width="32px" height="32px" src="../assets/images/close.png"></div>
            <div class="display-container">
                 <h3>{{project.name}}</h3>
                <img id="display-img" :src="`${project.gif}`">
                <div style="text-align: center; padding: 3px;">
                    <div style="text-align: center; padding: 3px;">{{project.description}}</div>
                    <div class="tech-container">
                    <h5>Tech used</h5>
                    <div class="tech">
                        <div v-for="(item, index) of project.tech" :key="index"> &nbsp; {{item}}<span v-if="index !== project.tech.length - 1">,</span></div>
                    </div>
                    <h5 style="padding-top:10px">Links</h5>
                     <b-container class="bv-example-row project-links ">
                        <b-row>
                            <b-col v-if="project.github">
                                <a :href="project.github">
                                    <div class="svg-style">
                                        <svg  xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github">
                                            <title>GitHub</title>
                                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                                            </path>
                                        </svg>
                                    </div>
                                </a>
                            </b-col>
                            <b-col v-if="project.vid">
                                <a :href="project.vid">
                                <div class="svg-style">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-activity">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-youtube">
                                            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                                            <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02">
                                            </polygon>
                                        </svg>
                                    </svg>
                                </div>
                                </a>
                            </b-col>
                        </b-row>
                    </b-container>
                    </div>
                </div>
            </div>
         </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { onMounted } from "vue";
let projDisplayed = ref([]);
let selected = ref(false);
let project = ref({});
let projects = [{name: 'Spotify VR Player', opt:"SVRP", img:require('../assets/images/spotifyVR.png'),gif:require('../assets/gifs/spotifyvr.gif'), description:'Web app spotify player that lets you connect to your spotify account and play music in a metaverse.', vid:'https://youtu.be/a3mAyD_UNoY', tech:['React.js', 'Express.js','Node.js','Spotify API', 'Spotify SDK']},
{name: 'React Metaverse', opt:"RCTM", img:require("../assets/images/metaverse.png"), gif:require('../assets/gifs/metaverse.gif'), description:'A Web VR Metaverse of a sci-fi purple mountainous planet.', vid:'https://youtu.be/J9Snqj3D3cg', github:'https://github.com/dev-les/React-Metaverse', tech:['React.js', 'Node.js','Aframe']},
{name: 'Lazy Loading', opt:"LZL",  img:require("../assets/images/Lazyload.png"), gif:require('../assets/gifs/lazyload.gif') , description:'A Full Stack lazy load/infinite scroll implementation.', vid:'https://youtu.be/nf26d8SHwaw', github:'https://github.com/dev-les/lazy-load', tech:['Vue.js', 'Express.js','Node.js','Postgres', 'Docker']},
{name: 'SMS Admin Chat Bot', opt:"SMSAB",  img:require("../assets/images/adminbot.jpg"), gif:require('../assets/gifs/adminbot.gif'), description:'A poc chat bot that allows you to edit your websites colors and text via sms.', vid:'https://youtu.be/Zpzm5y9hWNU', tech:['React.js', 'Express.js', 'AWS Lexbot', 'AWS Lambda', 'Node.js']},
{name: 'AR Moving Image', opt:"ARMI",  img:require("../assets/images/movingImage.png"), gif:require('../assets/gifs/movingimg.gif'), description:'Mobile AR app that creates a moving effect on an image when viewed through your phone\'s camera.', vid:'https://youtu.be/1AQLHCD2sWU', github:'https://github.com/dev-les/Moving_Image', tech:['Swift','ARKit']}];

onMounted(() => {
 projDisplayed.value = projects;
})

function select(proj) {
  selected.value = true;
  project.value = proj;

}
function close() {
    selected.value = false;
}
</script>
