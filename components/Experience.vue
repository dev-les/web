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
.comp-logo {
    background: white;
    border-radius: 50%;
    width: 150px;
    height: 150px;
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
        <b-nav-item :active="option === 'ally'" @click="setOptions('ally')">Ally</b-nav-item>
        <b-nav-item :active="option === 'xenial'" @click="setOptions('xenial')">Xenial</b-nav-item>
        <b-nav-item :active="option === 'truist'" @click="setOptions('truist')">Truist</b-nav-item>
        <b-nav-item :active="option === 'masco'" @click="setOptions('masco')">Masco</b-nav-item>
      </b-nav>
    <div>
      <div v-for="(exp, index) of expDisplayed" :key="index">
       
        <div class="skill-container">
             <img class="comp-logo" :src="`${exp.logo}`"/>
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
import { experiences } from '../data/experienceData'
let expDisplayed = ref([]);
let option = ref('truist');

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
