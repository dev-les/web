<style>

.skills-container {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  padding-top: 20px;
}
.skill-container {
  padding: 20px;
  text-align: center;
}
.truist {
  background: white;
  border-radius: 50%;
  width: 150px;
  height: 150px;
}
.nav-pills .nav-link.active, .nav-pills .show > .nav-link {
    color: #fff;
    background-color: #6d6b6b;
}

.nav-item .nav-link {
  color: white;
}
.masco {
    background: white;
    width: 270px;
    height: 100px;
}
.description {
    display: flex;
    text-align:right;
}
.description-container {
  align-self: center;
}
.job-decription ul {
  list-style: none; /* Remove default bullets */
}
.job-decription ul li::before{
  content: "\2022";  /* Add content: \2022 is the CSS Code/unicode for a bullet */
  color: #4ff98e; /* Change the color */
  font-weight: bold; /* If you want it to be bold */
  display: inline-block; /* Needed to add space between the bullet and the text */
  width: 1em; /* Also needed for space (tweak if needed) */
  margin-left: -1em; /* Also needed for space (tweak if needed) */
}
</style>
<template>
  <div class="skills-main-container">
    <b-nav style="justify-content: center;" pills>
        <b-nav-item :active="option === 'truist'" @click="setOptions('truist')">Truist</b-nav-item>
        <b-nav-item :active="option === 'masco'" @click="setOptions('masco')">Masco</b-nav-item>
      </b-nav>
    <div>
      <div v-for="(exp, index) of expDisplayed" :key="index">
       
        <div class="skill-container">
             <img class="truist" :src="`${exp.logo}`"/>
            <div style="padding-top:10px;"><b>{{exp.name}}</b></div>
            <div style="padding-top:5px;">{{exp.date}}</div>
        </div>
        <div class="job-decription">
            <ul>
              <li class="" v-for="(item, index) of exp.description" :key="index">
                 {{item}}
              </li>
            </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { onMounted } from "vue";
let expDisplayed = ref([]);
let option = ref('truist');
let experiences = [{name: "Truist Financial Corporation", logo:require("../assets/images/truist.png"), description:['Contributed to the development and release of a retail online banking application using Angular, Java, & Typescript,',
'Advanced the development of an internal admin web application using NuxtJS',
'Automated a pipeline process to deploy configuration servers across 3 different environments. using Gitlab, Docker, and Openshift',
'Mentored 3 Junior developers, 2 interns, and helped expand thier Javascript, git, and CI/CD skillset',
'Worked on an Emerging Channels team to develop Full Stack MVP projects including a chatbot, video streaming service, and Amazon Alexa Skills',
'Created documentation to help new teammates setup and run Node.js applications',
'Developing and maintaining a React Native gaming application.'], position:"Software Engineer", date:'July 2020 - Present', type:'truist'},
{name: "MASCO Support Services", logo:require("../assets/images/masco-sqr.png"), description:['Aided in the development of  the companies first mobile application using Xamarin framework, REST API, and Azure Cloud Services.',
'Successfully converted VB code from a desktop app to a C# app.',
'Automated a weekly sales report using Excel, VBA, and a tabular model.',
'Debugged and added features to companies WPF application using VB code.'], position:"IT Intern", date:'May 2019 - July 2020', type:'masco'},];

onMounted(() => {
 expDisplayed.value = filterByVal(option.value);
})

function setOptions(val) {
  if(val === 'all'){
    expDisplayed.value = experiences;
  }else {
    expDisplayed.value = filterByVal(val);
  }
  option.value = val;

}
function filterByVal(val) {
  let filteredSkills = experiences;
  let test = filteredSkills.filter(exp =>{if(exp.type === val) return exp});
  return test;
}
</script>
