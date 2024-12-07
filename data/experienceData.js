export const experiences = [
    {
        name: "Ally Financial",
        logo:require("../assets/images/ally.jpg"), 
        positions:[
            {
              title:"Senior Software Engineer - Audit Assist AI Team", 
              description:[
                'Collaborated on the development of a ChatGpt AI-powered audit system designed to assist auditors in generating content for audit processes and present it in a clear, easily digestible format',
                'Developed and refined ChatGPT prompts to generate JSON-formatted responses for seamless integration with a React application.',
                'Designed and implemented REST API endpoints with Node.js, Express.js, AWS API Gateway, and Apigee to support CRUD operations on a PostgreSQL database.',
                'Engineered a Python script to streamline the insertion and updating of encrypted data in a database ',
                'Guided and supported junior engineers, fostering team growth and knowledge sharing.',
                'Identified and eliminated unused AWS resources, reducing monthly costs by $800 dollars.',
                'Implemented secured routing for the application using React Router to allow navigation between different pages.',
                'Contributed in the implementation of an export functionality between the app and another internal audit tool, to reduce the need to copy and paste data.',
                'Designed and developed a whiteboard page that let users add and remove draggable cards across the screen, allowing users to view multiple audit pages at the same time.',
                'Integrated a drag and drop functionality for a list of accordions, to allow the ability to reorder components'
              ], 
              date:'June 2024 - Present'
            }
        ], 
        type:'ally'
    },
    {
        name: "Xenial",
        logo:require("../assets/images/xenial.jpg"), 
        positions:[
            {
              title:"Software Engineer III", 
              description:[
                'Developed full-stack features for a Point of Sale (POS) system, enhancing user functionality and transaction management.',
                'Updated deployment script for a AWS ECS container to help with crashes caused by memory usage.',
                'Proactively resolved over 10 software bugs, contributing to project stability.',
                'Created new REST API endpoints using Node.js, Express.js, AWS ECS and MongoDB',
                'Conducted backend and client side unit test using mocha.js, chai.js and jest.js to improve apps code quality',
                'Implemented new client side feature to improve user configuration experience using Angular.js and Typescript.',
                'Observed and monitored API logs and performance using AWS cloudwatch.'
              ], 
              date:'Novemeber 2023 - June 2024'
            }
        ], 
        type:'xenial'
    },
    {
        name: "Truist Financial Corporation", logo:require("../assets/images/truist.png"), 
        positions:[
            {
                title:"Software Engineer - The Foundry/Long Game Team",
                description:[
                    'Collaborated with internal teams including design, QA testers, and backend engineers to integrate a react native application with the banks systems in 6 months.',
                    'Spearheaded the design and implementation of an automated build and distribution pipeline for a React Native app, significantly streamlining the Dev to QA handover time from 2/3 days to just 20 minutes',
                    'Optimized the performance of background refresh for a react native application.',
                    'Addressed bugs and implemented additional features for a React Native mobile savings game.'
                ], 
                date:'June 2022 - Novemeber 2023'},{
                title:"Software Engineer - Emerging Channels Team",
                description:[
                    'Collaborated within an Emerging Channels team to create Full Stack MVP projects, encompassing a chatbot, video streaming service, and Amazon Alexa Skills',
                    'Contributed in end-to-end web development of an internal admin tool while using an iterative Scrum-based approach',
                    'Engineered a full-stack feature for an internal administrative tool, enabling seamless uploading of media content to a Content Delivery Network (CDN).',
                    'Automated a pipeline process to deploy configuration servers across test and dev environments, using Bash commands, Spring Config Server, Docker, and Gitlab.',
                    'Generated comprehensive documentation for assisting new team members in configuring and operating Node.js applications.',
                    'Designed and delivered a VR bank branch as a proof of concept to demonstrate the potential applications of VR technology to the bank\'s board of directors.',
                    ], 
                date:'October 2021 - June 2022'
            },
            {title:"Software Engineer - Retail Web Team",
              description:[
                'Collaborated in the development of full stack features for online banking web application, employing Java, Spring Boot, and Angular technologies',
                'Developed a script to find hard coded css properties and replace them with design system tokens, helping save weeks of work for the team.',
                'Updated a fully responsive transaction table from an Angular material component to an in house design system table component.',
                'Lead the team\'s efforts in fixing major accessibility issues for the online banking app.'], 
                  date:'July 2020 - October 2021'
            }],
              type:'truist'
    },
    {
        name: "MASCO Support Services",
        logo:require("../assets/images/masco-sqr.png"), 
        positions:[
            {
              title:"IT Intern", 
              description:[
                'Contributed to the creation of the company\'s inaugural mobile application utilizing the Xamarin framework, REST API, and Azure Cloud Services.',
                'Effectively transformed Visual Basic (VB) code from a desktop application into a C# application.',
                'Implemented automation for a weekly sales report through the utilization of Excel, VBA, and a tabular model.',
                'Identified and resolved issues, as well as incorporated new features into the company\'s WPF application utilizing Visual Basic (VB) code.'
              ], 
              date:'May 2019 - July 2020'
            }
        ], 
        type:'masco'
    }
];