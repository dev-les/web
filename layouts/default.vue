<style>
    .footer-style {
        background-color: #272a34 ;
        min-height: 100px;
        padding-bottom: 20px;
    }
    .fa {
        padding: 20px;
        font-size: 30px;
        width: 50px;
        text-align: center;
        text-decoration: none;
        margin: 5px 2px;
    }
    .fa:hover {
        opacity: 0.7;
    }
    .icons {
        width:48px;
        height:48px;
    }
    .center {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .icon-container {
        padding-top:30px;
    }
    .svg-style {
        width: 30px;
        height: 30px;
        color: white;
    }
    .svg-style:hover {
        color: #4ff98e;
        text-decoration: none;
    }
    .bottom-text {
        color: #4ff98e;
        font-family: "SF Mono","Fira Code","Fira Mono","Roboto Mono",monospace;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    .seccond-bottom-text {
         color: #4ff98e;
        font-family: "SF Mono","Fira Code","Fira Mono","Roboto Mono",monospace;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: 20px;
        text-align: center;
    }
</style>
<template>
<div>
<Menu />
<Nuxt />
<footer class="footer-style">
    <div class="center">
        <div class="icon-container">
            <div class="bottom-text">
             Built by Luis Sanchez
            </div>
            <div class="seccond-bottom-text">
                 Using Nuxt.js <span><img width="25px" height="25px" src="../assets/images/nuxt.png"></span>
            </div>
        <b-container class="bv-example-row">
            <b-row>
                <b-col>
                    <a href="https://github.com/dev-les">
                        <div class="svg-style">
                            <svg  xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github">
                                <title>GitHub</title>
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                                </path>
                            </svg>
                        </div>
                    </a>
                </b-col>
                <b-col>
                    <a href="https://www.youtube.com/channel/UCQSook2k99qgz4s_fFzIJnA">
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
                <b-col>
                    <a href="https://www.linkedin.com/in/luis-sanchez-beristain/">
                        <div class="svg-style">
                            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin"><title>LinkedIn</title><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        </div>
                    </a>
                </b-col>
                <!-- <b-col>
                    <a href="#">
                      <div class="svg-style">
                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram"><title>Instagram</title><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                      </div>
                    </a>
                </b-col> -->
            </b-row>
        </b-container>
        </div>
    </div>
</footer>
</div>
</template>

