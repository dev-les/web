export const projects = [
    {
        name: 'Mobile HTML Game', 
        opt:"DSIO", 
        img:require('../assets/images/HTMLMobile.png'),
        gif:require('../assets/gifs/htmlmobilegif.gif'), 
        description:'Made a video to show how you can turn a HTML game into a mobile game app using Node.js, React Native, Typescript, Javascript, HTML, CSS.',
        vid:'https://youtu.be/wpMyfnjDMEk', 
        tech:['React Native', 'HTML', 'CSS','Node.js']
    },
    {
        name: 'Text ChatGpt', 
        opt:"DSIO", 
        img:require('../assets/images/textgpt.jpg'),
        gif:require('../assets/gifs/textgptgif.gif'), 
        description:'I created an SMS app to directly communicate and recieve response from ChatGpt.',
        vid:'https://youtu.be/9P9AbhbOYpc', 
        tech:['OpenAIAPI', 'Express.js','Node.js','Twilio']
    },
    {
        name: 'Drop-Shop.io', 
        opt:"DSIO", 
        img:require('../assets/images/dropshoplogo.png'),
        gif:require('../assets/gifs/dropshop.gif'), 
        description:'Automated Shopify store for social media animated banners.',
        urlName:'drop-shop.io', 
        url:'https://drop-shop.io/', 
        tech:['liquid', 'Express.js','Node.js','Shopify Admin API', 'Pub Sub', 'Clound Functions', 'Send Grid', 'Nexrender', 'Typescript', 'Firebase']
    },
    {
        name: 'Spotify VR Player', 
        opt:"SVRP", 
        img:require('../assets/images/spotifyVR.png'),
        gif:require('../assets/gifs/spotifyvr.gif'), 
        description:'Web app spotify player that lets you connect to your spotify account and play music in a metaverse.', 
        vid:'https://youtu.be/a3mAyD_UNoY', 
        tech:['React.js', 'Express.js','Node.js','Spotify API', 'Spotify SDK']
    },
    {
        name: 'React Metaverse', 
        opt:"RCTM", 
        img:require("../assets/images/metaverse.png"), 
        gif:require('../assets/gifs/metaverse.gif'), 
        description:'A Web VR Metaverse of a sci-fi purple mountainous planet.', 
        vid:'https://youtu.be/J9Snqj3D3cg', 
        github:'https://github.com/dev-les/React-Metaverse', 
        tech:['React.js', 'Node.js','Aframe']
    },
    {
        name: 'Lazy Loading', 
        opt:"LZL",  
        img:require("../assets/images/Lazyload.png"), 
        gif:require('../assets/gifs/lazyload.gif') , 
        description:'A Full Stack lazy load/infinite scroll implementation.', 
        vid:'https://youtu.be/nf26d8SHwaw', 
        github:'https://github.com/dev-les/lazy-load', 
        tech:['Vue.js', 'Express.js','Node.js','Postgres', 'Docker']
    },
    {
        name: 'SMS Admin Chat Bot', 
        opt:"SMSAB",  
        img:require("../assets/images/adminbot.jpg"), 
        gif:require('../assets/gifs/adminbot.gif'), 
        description:'A poc chat bot that allows you to edit your websites colors and text via sms.', 
        vid:'https://youtu.be/Zpzm5y9hWNU', 
        tech:['React.js', 'Express.js', 'AWS Lexbot', 'AWS Lambda', 'Node.js']},
    {
        name: 'AR Moving Image', 
        opt:"ARMI",  
        img:require("../assets/images/movingImage.png"), 
        gif:require('../assets/gifs/movingimg.gif'), 
        description:'Mobile AR app that creates a moving effect on an image when viewed through your phone\'s camera.', vid:'https://youtu.be/1AQLHCD2sWU', 
        github:'https://github.com/dev-les/Moving_Image', 
        tech:['Swift','ARKit']
    }
];