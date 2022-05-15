<style>
    .footer-style {
        background-color: #343a40;
        min-height: 100px;
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
    .fa-twitter {
        background: #55ACEE;
        color: white;
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
</style>
<template>
<div>
<Menu />
<Nuxt />
<footer class="footer-style">
    <div class="center">
        <div class="icon-container">
        <b-container class="bv-example-row">
            <b-row>
                <b-col>
                    <a href="https://www.youtube.com/channel/UCQSook2k99qgz4s_fFzIJnA">
                        <img class="icons" src="../assets/images/youtube.png"/>
                    </a>
                </b-col>
                <b-col>
                    <a href="#">
                        <img class="icons" src="../assets/images/twitter.png"/>
                    </a>
                </b-col>
                <b-col>
                    <a href="https://www.linkedin.com/in/luis-sanchez-beristain/">
                        <img class="icons" src="../assets/images/linkedin.png"/>
                    </a>
                </b-col>
                <b-col>
                    <a href="#">
                        <img class="icons" src="../assets/images/instagram.png"/>
                    </a>
                </b-col>
                <b-col>
                    <a href="https://www.tiktok.com/@dev_les">
                        <img class="icons" src="../assets/images/tik-tok.png"/>
                    </a>
                </b-col>
            </b-row>
        </b-container>
        </div>
    </div>
</footer>
</div>
</template>

