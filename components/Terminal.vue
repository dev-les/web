<!-- Please remove this file from your project -->
<style>
   body {
  background: #282a34;
}

.terminal-window {
  text-align: left;
  max-width: 600px;
  height: 360px;
  border-radius: 10px;
  margin: auto;
  position: relative;
  box-shadow: 0 10px 30px -15px rgb(2 12 27 / 70%);
}

.terminal-window header {
  background: #6d6b6b;
  height: 30px;
  border-radius: 8px 8px 0 0;
  padding-left: 10px;
}

.terminal-window header .button {
  width: 12px;
  height: 12px;
  margin: 10px 4px 0 0;
  display: inline-block;
  border-radius: 8px;
}

.terminal-window header .button.green {
  background: #3BB662;
}

.terminal-window header .button.yellow {
  background: #E5C30F;
}

.terminal-window header .button.red {
  background: #E75448;
}

.terminal-window section.terminal {
  color: white;
  font-family: Menlo, Monaco, "Consolas", "Courier New", "Courier";
  font-size: large;
  background: #302e2d;
  padding: 10px;
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  top: 30px;
  bottom: 0;
  overflow: auto;
}
.typewriter {
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .15em solid #4ff98e; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: .15em; /* Adjust as needed */
  font-family: Menlo, Monaco, "Consolas", "Courier New", "Courier";
  animation: 
    typing 3.5s steps(40, end),
    blink-caret .75s step-end infinite;
}
.history {
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  /* white-space: nowrap; Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: .15em; /* Adjust as needed */
  font-family: Menlo, Monaco, "Consolas", "Courier New", "Courier";
}
@keyframes blink{
    0% { opacity:1; }
    50% { opacity:0; }
    100% { opacity:1; }
}
@-webkit-keyframes blink{
    0% { opacity:1; }
    50% { opacity:0; }
    100% { opacity:1; }
}
@-moz-keyframes blink{
    0% { opacity:1; }
    50% { opacity:0; }
    100% { opacity:1; }
}
/* The typing effect */
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: #4ff98e; }
}

.terminal-data { display: none; }
.terminal-window .gray { color: gray; }
.terminal-window .green { color: green;}
</style>
<template>
<div style="padding-top: 7%;">
<div class="terminal-window">
  <header>
    <div class="button green"></div>
    <div class="button yellow"></div>
    <div class="button red"></div>
  </header>
  <section class="terminal">
    <div class="history" v-html="history"></div>
    <span class="typewriter">{{testVar}}</span>
    
  </section>
</div>
</div>

</template>

<script setup>

import { onMounted } from "vue";
import { ref } from 'vue'
let testVar = ref('$ ');
let history = ref('');
var i = 0;
var rec= 0;
var txt = ['Welcome to my website! &#128640;'];
var message = '# &#128075; Hi, my name is Luis Sanchez <br>#<br> # I am a Fullstack Engineer &#128187; specializing in developing exceptional digital experiences<br><br>';
var speed = 70;

function typeWriter() {
  if (i < txt[rec].length ) {
   testVar.value += txt[rec].charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }else {
    history.value += `${testVar.value}`;
    testVar.value = '$ ';
    rec++;
    if(rec < txt.length){
        i=0;
        history.value += '<br><br>'
        setTimeout(typeWriter, speed);
    }else{
      history.value += '<br>#<br>'+ message  
    }
  }
}

onMounted(() => {
    typeWriter();
})

</script>
