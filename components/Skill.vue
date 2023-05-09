<style>
.skill {
  width: 100px;
  height: 100px;
}
.skills-main-container {
  padding-top: 20px;
}
.skills-container {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}
.skill-container {
  padding: 20px;
  text-align: center;
}
.aws {
  background: white;
  border-radius: 50%;
}
.nav-pills .nav-link.active, .nav-pills .show > .nav-link {
    color: #fff;
    background-color: #6d6b6b;
}

.nav-item .nav-link {
  color: white;
}

</style>
<template>
  <div class="skills-main-container">
    <b-nav style="justify-content: center;" pills>
        <b-nav-item :active="option === 'fe'" @click="setOptions('fe')">Front-End</b-nav-item>
        <b-nav-item :active="option === 'be'" @click="setOptions('be')">Back-End</b-nav-item>
        <b-nav-item :active="option === 'do'" @click="setOptions('do')">DevOps</b-nav-item>
        <b-nav-item :active="option === 'all'" @click="setOptions('all')">Full Stack</b-nav-item>
      </b-nav>
    <div class="skills-container">
      <div class="skill-container" v-for="(skill, index) of skillsDisplayed" :key="index">
        <img :class="{ 'aws': skill.name === 'AWS' }" class="skill" :src="`${skill.url}`"/>
        <div>{{skill.name}}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { onMounted } from "vue";
let test ="test";
let skillsDisplayed = ref([]);
let option = ref('fe');
let skills = [{name: "React/React-Native", url:require("../assets/images/react-native-144.png"), type:"fe"},
{name: "Vue.js", url:require("../assets/images/vue-js-144.png"), type:"fe"},
{name: "Angular", url:require("../assets/images/angularjs-144.png"), type:"fe"},
{name: "Redux", url:require("../assets/images/redux-144.png"), type:"fe"},
{name: "Typescript", url:require("../assets/images/typescript-144.png"), type:"fe"},
{name: "Javascript", url:require("../assets/images/javascript-144.png"), type:"fe"},
{name: "Swift", url:require("../assets/images/swift-144.png"), type:"fe"},
{name: "NodeJS", url:require("../assets/images/node-js-144.png"), type:"be"},
{name: "Java", url:require("../assets/images/java-144.png"), type:"be"},
{name: "Python", url:require("../assets/images/python-144.png"), type:"be"},
{name: "MySql", url:require("../assets/images/my-sql-144.png"), type:"be"},
{name: "Postgress", url:require("../assets/images/postgresql-144.png"), type:"be"},
{name: "C#", url:require("../assets/images/c-sharp-144.png"), type:"be"},
{name: "OpenShift", url:require("../assets/images/openshift-144.png"), type:"do"},
{name: "AWS", url:require("../assets/images/aws-144.png"), type:"do"},
{name: "Docker", url:require("../assets/images/docker-144.png"), type:"do"},
{name: "Heroku", url:require("../assets/images/heroku-144.png"), type:"do"},
{name: "GitHub", url:require("../assets/images/github-144.png"), type:"do"},
{name: "GitLab", url:require("../assets/images/gitlab-144.png"), type:"do"},
];

onMounted(() => {
 skillsDisplayed.value = filterByVal(option.value);
})

function setOptions(val) {
  if(val === 'all'){
    skillsDisplayed.value = skills;
  }else {
    skillsDisplayed.value = filterByVal(val);
  }
  option.value = val;

}
function filterByVal(val) {
  let filteredSkills = skills;
  let test = filteredSkills.filter(skill =>{if(skill.type === val) return skill});
  console.log(test)
  return test;
}
</script>
