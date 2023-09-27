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
        </div>
        <div v-for="(pos, index) of exp.positions" :key="index">
          <div style="text-align: center; padding-top:15px;"><b>{{pos.title}}</b></div>
            <div style="text-align: center; padding-top:5px; padding-bottom: 10px;">{{pos.date}}</div>
            <div class="job-decription">
            <ul>
              <li class="" v-for="(item, index) of pos.description" :key="index">
                 {{item}}
              </li>
            </ul>
        </div>
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
let experiences = [{name: "Truist Financial Corporation", logo:require("../assets/images/truist.png"), 
positions:[{
    title:"Software Engineer - The Foundry/Long Game Team",
    description:[
        'Collaborated with internal teams including design, QA testers, and backend engineers to integrate a react native application with the banks systems in 6 months.',
        'Spearheaded the design and implementation of an automated build and distribution pipeline for a React Native app, significantly streamlining the Dev to QA handover time from 2/3 days to just 20 minutes',
        'Optimized the performance of background refresh for a react native application.',
        'Addressed bugs and implemented additional features for a React Native mobile savings game.'
        ], 
    date:'June 2022 - Present'},{
    title:"Software Engineer - Emerging Channels Team",
    description:[
        'Collaborated within an Emerging Channels team to create Full Stack MVP projects, encompassing a chatbot, video streaming service, and Amazon Alexa Skills',
        'Contributed in end-to-end web development of an internal admin tool while using an iterative Scrum-based approach',
        'Engineered a full-stack feature for an internal administrative tool, enabling seamless uploading of media content to a Content Delivery Network (CDN).',
        'Automated a pipeline process to deploy configuration servers across test and dev environments, using Bash commands, Spring Config Server, Docker, and Gitlab.',
        'Generated comprehensive documentation for assisting new team members in configuring and operating Node.js applications.',
        'Designed and delivered a VR bank branch as a proof of concept to demonstrate the potential applications of VR technology to the bank\'s board of directors.',
        ], 
    date:'October 2021 - June 2022'},
  {title:"Software Engineer - Retail Web Team",
    description:[
      'Collaborated in the development of full stack features for online banking web application, employing Java, Spring Boot, and Angular technologies',
      'Developed a script to find hard coded css properties and replace them with design system tokens, helping save weeks of work for the team.',
      'Updated a fully responsive transaction table from an Angular material component to an in house design system table component.',
      'Lead the team\'s efforts in fixing major accessibility issues for the online banking app.'], 
    date:'July 2020 - October 2021'}],
type:'truist'},
{
  name: "MASCO Support Services",
  logo:require("../assets/images/masco-sqr.png"), 
positions:
[{title:"IT Intern", 
  description:[
    'Contributed to the creation of the company\'s inaugural mobile application utilizing the Xamarin framework, REST API, and Azure Cloud Services.',
    'Effectively transformed Visual Basic (VB) code from a desktop application into a C# application.',
    'Implemented automation for a weekly sales report through the utilization of Excel, VBA, and a tabular model.',
    'Identified and resolved issues, as well as incorporated new features into the company\'s WPF application utilizing Visual Basic (VB) code.'
  ], 
  date:'May 2019 - July 2020'}], 
type:'masco'
}];

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
