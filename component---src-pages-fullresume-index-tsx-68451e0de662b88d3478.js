(self.webpackChunkportfolio_v2=self.webpackChunkportfolio_v2||[]).push([[452,839,254,235,604,135,366],{7333:function(e,t,n){"use strict";n.d(t,{t$:function(){return i},Xz:function(){return s},C7:function(){return a}});var o=n(7294);var i=function(e,t){(0,o.useEffect)((function(){var n=function(n){var o=e.current;o&&!o.contains(n.target)&&t(n)};return document.addEventListener("mousedown",n),document.addEventListener("touchstart",n),function(){document.removeEventListener("mousedown",n),document.removeEventListener("touchstart",n)}}),[e,t])},r="down",a=function(e){var t=void 0===e?{}:e,n=t.initialDirection,i=void 0===n?r:n,a=t.thresholdPixels,l=void 0===a?0:a,s=t.off,c=void 0!==s&&s,m=(0,o.useState)(i),d=m[0],p=m[1];return(0,o.useEffect)((function(){var e=l,t=window.pageYOffset,n=!1,o=function(){var o=window.pageYOffset;Math.abs(o-t)<e||(p(o>t?r:"up"),t=o>0?o:0),n=!1},a=function(){n||(window.requestAnimationFrame(o),n=!0)};return c?p(i):window.addEventListener("scroll",a),function(){return window.removeEventListener("scroll",a)}}),[i,l,c]),d},l=(n(5787),n(5444)),s=function(){return(0,l.useStaticQuery)("1445775394").allMdx.edges}},5787:function(e,t,n){"use strict";var o=n(5444);t.Z=function(){return(0,o.useStaticQuery)("2468095761").site.siteMetadata}},6287:function(e,t,n){"use strict";n.r(t);var o=n(7294),i=n(9),r=n(5444),a=n(8605),l=n(14),s=n.n(l),c=i.ZP.div.withConfig({displayName:"About__AboutContainer",componentId:"gl4e00-0"})(["display:flex;justify-content:center;align-items:center;color:var(--on-bg);max-width:1320px;margin-top:10rem;& p{font-size:1.1rem;color:",";}@media (max-width:1400px){& p{font-size:1rem;}}@media (max-width:1000px){flex-direction:column;}"],"#8C8C8C"),m=i.ZP.div.withConfig({displayName:"About__ParallaxContainer",componentId:"gl4e00-1"})([""]),d=i.ZP.div.withConfig({displayName:"About__ImageContainer",componentId:"gl4e00-2"})(["width:25rem;margin-right:1rem;@media (max-width:1300px){width:23rem;}@media (max-width:1200px){width:21rem;}@media (max-width:1000px){margin-right:0;}@media (max-width:400px){width:100%;}"]),p=i.ZP.div.withConfig({displayName:"About__AboutMeContainer",componentId:"gl4e00-3"})(["width:100%;"]);t.default=function(){var e=(0,o.useState)(0),t=e[0],n=e[1],i=function(){window.pageYOffset<50?n(0):window.pageYOffset<600&&n(window.pageYOffset-50)};(0,o.useEffect)((function(){return window.addEventListener("scroll",i),function(){window.removeEventListener("scroll",i)}}),[]);var l=(0,r.useStaticQuery)("16738932"),u=(0,a.e)(l.file);return o.createElement(c,null,o.createElement(s(),{top:!0},o.createElement(m,{style:{transform:"translateY(-"+.5*t+"px)"}},o.createElement(d,null,o.createElement(a.G,{image:u,alt:"profile image"})))),o.createElement(p,null,o.createElement("h1",null,"My Journey"),o.createElement("p",null,"Growing up, I became very interested in technology because I loved to play games. It naturally grew my interest in computers. I was fascinated by how much you could do with them. I wanted to work in the technology industry but wasn’t too sure of all the available options."),o.createElement("p",null,"My education solidified my background in technology. I joined the Academy of Engineering in high school, where I soldered and made models with Autodesk Inventor. College was when I first got my introduction to programming. Taking the programming courses for my major helped me build a solid foundation in computer science/engineering. I discovered web development through one of my TIM classes (Business Strategy & Information Systems), and ever since then, I explored the field of software engineering. After graduation, I wanted to learn as much as I could in a short period, which led me to attend Hack Reactor."),o.createElement("p",null,"As of now, I’m continuing to learn, working on projects, and looking for the right opportunity where I can build and learn continuously with my passion for technology.")))}},8891:function(e,t,n){"use strict";n.r(t),n.d(t,{Bullet:function(){return f}});var o=n(7294),i=n(9),r=n(14),a=n.n(r),l="#8C8C8C",s=i.ZP.div.withConfig({displayName:"Education__EducationContainer",componentId:"sc-1kgx4nn-0"})(["display:flex;color:var(--on-bg);max-width:1320px;width:100%;margin-top:6rem;flex-direction:column;"]),c=i.ZP.div.withConfig({displayName:"Education__EducationItem",componentId:"sc-1kgx4nn-1"})(["display:flex;margin-bottom:1rem;@media (max-width:576px){flex-direction:column-reverse;}"]),m=i.ZP.div.withConfig({displayName:"Education__EducationDescription",componentId:"sc-1kgx4nn-2"})(["display:flex;flex-direction:column;margin-right:auto;& > *{margin-left:1rem;}& h2{font-weight:400;}& span{color:",";}"],l),d=i.ZP.div.withConfig({displayName:"Education__EducationTime",componentId:"sc-1kgx4nn-3"})(["display:flex;justify-content:flex-end;font-size:1.5rem;color:",";width:150px;margin-top:1rem;margin-left:1rem;& > *{margin:0;}@media (max-width:1400px){font-size:1.25rem;}@media (max-width:1200px){font-size:1.1rem;}@media (max-width:992px){font-size:1rem;}@media (max-width:576px){margin-left:0;font-size:1.25rem;justify-content:flex-start;}"],l),p=i.ZP.div.withConfig({displayName:"Education__EducationLocation",componentId:"sc-1kgx4nn-4"})(["margin-left:1rem;font-size:1.25rem;& > p{color:",";margin:0;}"],l),u=i.ZP.div.withConfig({displayName:"Education__EducationBullets",componentId:"sc-1kgx4nn-5"})(["margin-left:1rem;& > p{color:",";}"],l),f=i.ZP.p.withConfig({displayName:"Education__Bullet",componentId:"sc-1kgx4nn-6"})(["color:",';font-size:1.1rem;&::before{content:"-";margin-right:0.25rem;}'],l),h=["TIM 50: Business Information Systems","TIM 158: Business Strategy & Information Systems","AMS 147: Computational Methods and Applications","CMPE 12/L: Computer Systems & Assembly Language","CMPS 12B/M: Data Structures","CMPE 16: Applied Discrete Mathematics","CMPS 11: Intermediate Programming: Java","CMPE 150/L: Introduction to Computer Networks","CMPS 182: Introduction to Database Management Systems","CMPS 5J: Introduction to Programming: Java"];t.default=function(){return o.createElement(s,null,o.createElement(a(),null,o.createElement("h1",null,"Education")),o.createElement(a(),null,o.createElement(c,null,o.createElement(m,null,o.createElement("h2",null,"Software Engineering Immersive",o.createElement("span",null," - Hack Reactor")),o.createElement(p,null,o.createElement("p",null,"San Francisco, California")),o.createElement(u,null,o.createElement(f,null,"Full Stack JavaScript web development bootcamp."))),o.createElement(d,null,o.createElement("p",null,"2019 - 2020")))),o.createElement(a(),null,o.createElement(c,null,o.createElement(m,null,o.createElement("h2",null,"B.S., Technology and Information Management",o.createElement("span",null," - University of California, Santa Cruz")),o.createElement(p,null,o.createElement("p",null,"Santa Cruz, California")),o.createElement(a(),null,o.createElement(u,null,o.createElement("p",null,"Relevant Coursework:"),h.map((function(e,t){return o.createElement(f,{key:t},e)}))))),o.createElement(d,null,o.createElement("p",null,"2015 - 2019")))))}},8645:function(e,t,n){"use strict";n.r(t),n.d(t,{Bullet:function(){return f}});var o=n(7294),i=n(9),r=n(14),a=n.n(r),l="#8C8C8C",s=i.ZP.div.withConfig({displayName:"Experience__ExperienceContainer",componentId:"fopf18-0"})(["display:flex;color:var(--on-bg);width:100%;max-width:1320px;margin-top:6rem;flex-direction:column;"]),c=i.ZP.div.withConfig({displayName:"Experience__ExperienceItem",componentId:"fopf18-1"})(["display:flex;@media (max-width:576px){flex-direction:column-reverse;}"]),m=i.ZP.div.withConfig({displayName:"Experience__ExperienceDescription",componentId:"fopf18-2"})(["display:flex;flex-direction:column;margin-right:auto;& > *{margin-left:1rem;}& h2{font-weight:400;}& span{color:",";}"],l),d=i.ZP.div.withConfig({displayName:"Experience__ExperienceTime",componentId:"fopf18-3"})(["display:flex;justify-content:flex-end;font-size:1.5rem;color:",";width:150px;margin-top:1rem;margin-left:1rem;& > *{margin:0;}@media (max-width:1400px){font-size:1.25rem;}@media (max-width:1200px){font-size:1.1rem;}@media (max-width:992px){font-size:1rem;}@media (max-width:576px){margin-left:0;font-size:1.25rem;justify-content:flex-start;}"],l),p=i.ZP.div.withConfig({displayName:"Experience__ExperienceLocation",componentId:"fopf18-4"})(["margin-left:1rem;font-size:1.25rem;& > p{color:",";margin:0;}"],l),u=i.ZP.div.withConfig({displayName:"Experience__ExperienceBullets",componentId:"fopf18-5"})(["margin-left:1rem;"]),f=i.ZP.p.withConfig({displayName:"Experience__Bullet",componentId:"fopf18-6"})(["color:",';font-size:1.1rem;&::before{content:"-";margin-right:0.25rem;}'],l);t.default=function(){return o.createElement(s,null,o.createElement(a(),null,o.createElement("h1",null,"Experience")),o.createElement(a(),null,o.createElement(c,null,o.createElement(m,null,o.createElement("h2",null,"Summer Camp Leader (Volunteering)",o.createElement("span",null," - Cameron House")),o.createElement(p,null,o.createElement("p",null,"San Francisco, California")),o.createElement(u,null,o.createElement(f,null,"Planned and coordinated mostly outdoor activities along with other leaders for upcoming 8th graders."),o.createElement(f,null,"Supervised outdoor activities such as field trips, cookouts, etc."))),o.createElement(d,null,o.createElement("p",null,"2014")))))}},4422:function(e,t,n){"use strict";n.r(t);var o=n(7294),i=n(9),r=n(14),a=n.n(r),l="#8C8C8C",s=i.ZP.div.withConfig({displayName:"OtherWork__OtherWorkContainer",componentId:"sc-13iogqa-0"})(["display:flex;color:var(--on-bg);max-width:1320px;width:100%;margin-top:6rem;flex-direction:column;"]),c=i.ZP.div.withConfig({displayName:"OtherWork__WorkItem",componentId:"sc-13iogqa-1"})(["display:flex;flex-direction:column;margin-bottom:1rem;margin-left:1rem;& h2{font-weight:400;}@media (max-width:576px){& h2{margin-bottom:0;}}"]),m=i.ZP.div.withConfig({displayName:"OtherWork__WorkTitleLinks",componentId:"sc-13iogqa-2"})(["display:flex;justify-content:space-between;align-items:center;width:100%;flex-wrap:wrap;@media (max-width:576px){flex-direction:column;align-items:flex-start;}"]),d=i.ZP.div.withConfig({displayName:"OtherWork__WorkLinks",componentId:"sc-13iogqa-3"})(["@media (max-width:576px){& p{margin-bottom:0;}}"]),p=i.ZP.a.withConfig({displayName:"OtherWork__GitHubLink",componentId:"sc-13iogqa-4"})([""]),u=i.ZP.div.withConfig({displayName:"OtherWork__WorkDescription",componentId:"sc-13iogqa-5"})(["color:",";font-size:1.1rem;"],l),f=i.ZP.div.withConfig({displayName:"OtherWork__TechContainer",componentId:"sc-13iogqa-6"})(["display:flex;flex-wrap:wrap;color:",";& p{margin:0;margin-right:1rem;opacity:75%;}"],l),h=[{title:"Messenger",description:"A realtime one-to-one chat application.",github:"https://github.com/kangjietan/messenger",tech:["JavaScript","React.js","Redux","Socket-io","PostgreSQL"]},{title:"Twitch Stream Discovery",description:"Discover new streams by watching top clips related to what is currently being streamed on the channel.",github:"https://github.com/kangjietan/streamforge",tech:["TypeScript","React.js","Styled-components","Twitch API"]},{title:"Appointment Scheduler",description:"Web application that allows uesrs to schedule appointments with one another and have the ability to accept, decline, and view their appointments.",github:"https://github.com/kangjietan/pocket-rn",tech:["TypeScript","React.js","Firebase","Firebase Functions","Cloud Firestore"]},{title:"Portfolio-v2",description:"Second iteration of my personal portfolio. This current website developed with Gatsby and TypeScript.",github:"https://github.com/kangjietan/portfolio-v2",tech:["TypeScript","Gatsby.js","Styled-components","MDX"]},{title:"Portfolio-v1",description:"My first portfolio developed with HTML5/CSS3 and Bootstrap.",github:"https://github.com/kangjietan/portfolio-v1",tech:["HTML5","CSS3","Bootstrap"]},{title:"Introduction",description:"Whenever I'm interested in a technology and want to learn it, I work on projects and keep track of them in this Github repository.",github:"https://github.com/kangjietan/introduction"},{title:"Leetcode",description:"Github repository of leetcode problems I've worked on.",github:"https://github.com/kangjietan/leetcode"},{title:"Computational Methods and Applications",description:"UCSC coursework: Applications of computational methods to solving mathematical problems using Matlab. Topics include solution of nonlinear equations, linear systems, differential equations, sparse matrix solver, and eigenvalue problems.",github:"https://github.com/kangjietan/Computational-Methods-and-Applications",tech:["MATLAB","GNU Octave"]},{title:"Computer Systems and Assembly Language",description:"UCSC coursework: Introduction to computer systems and assembly language and how computers compute in hardware and software. Topics include digital logic, number systems, data structures, compiling/assembly process, basics of system software, and computer architecture.",github:"https://github.com/kangjietan/Computer-Systems-and-Assembly-Language",tech:["MIPS","Multimedia Logic","MARS (MIPS Assembler and Runtime Simulator)"]}];t.default=function(){return o.createElement(s,{id:"otherwork"},o.createElement(a(),null,o.createElement("h1",null,"Other Work"),h.map((function(e,t){return o.createElement(a(),{key:t},o.createElement(c,null,o.createElement(m,null,o.createElement("a",{href:e.github,target:"_blank"},o.createElement("h2",null,e.title)),o.createElement(d,null,o.createElement(p,{href:e.github,target:"_blank"},o.createElement("p",null,"GitHub")))),o.createElement(u,null,o.createElement("p",null,e.description)),e.tech?o.createElement(f,null,e.tech.map((function(e,t){return o.createElement("p",{key:t},e)}))):null))}))))}},9938:function(e,t,n){"use strict";n.r(t);var o=n(6156),i=n(7294),r=n(9),a=n(7333),l=n(14),s=n.n(l);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d="#8C8C8C",p=r.ZP.div.withConfig({displayName:"Projects__ProjectContainer",componentId:"gyz0y9-0"})(["display:flex;color:var(--on-bg);max-width:1320px;width:100%;margin-top:6rem;flex-direction:column;"]),u=r.ZP.div.withConfig({displayName:"Projects__ProjectItem",componentId:"gyz0y9-1"})(["display:flex;flex-direction:column;margin-bottom:1rem;margin-left:1rem;& h2{font-weight:400;}@media (max-width:576px){& h2{margin-bottom:0;}}"]),f=r.ZP.div.withConfig({displayName:"Projects__ProjectTitleLinks",componentId:"gyz0y9-2"})(["display:flex;justify-content:space-between;align-items:center;width:100%;@media (max-width:576px){flex-direction:column;align-items:flex-start;}"]),h=r.ZP.div.withConfig({displayName:"Projects__ProjectLinks",componentId:"gyz0y9-3"})(["display:flex;@media (max-width:576px){& p{margin-bottom:0;}}"]),g=r.ZP.a.withConfig({displayName:"Projects__GitHubLink",componentId:"gyz0y9-4"})([""]),y=r.ZP.a.withConfig({displayName:"Projects__LiveSiteLink",componentId:"gyz0y9-5"})(["margin-right:1rem;"]),w=r.ZP.div.withConfig({displayName:"Projects__ProjectDescription",componentId:"gyz0y9-6"})(["color:",";font-size:1.1rem;"],d),b=r.ZP.div.withConfig({displayName:"Projects__ProjectBullets",componentId:"gyz0y9-7"})([""]),v=r.ZP.p.withConfig({displayName:"Projects__Bullet",componentId:"gyz0y9-8"})(["color:",';font-size:1.1rem;&::before{content:"-";margin-right:0.25rem;}'],d),x=r.ZP.div.withConfig({displayName:"Projects__TechContainer",componentId:"gyz0y9-9"})(["display:flex;flex-wrap:wrap;color:",";& p{margin:0;margin-right:1rem;opacity:75%;}"],d),E=["A MERN stack web application where you can have a restaurant randomly chosen for you based on your inputs for the term and location or browse for restaurants to add to a custom or favorites list that you can randomize from. The custom list is just for people who want to make a quick list of restaurants to be randomized. To save your favorites list, you need to be registered. Data about the businesses comes from the backend, where the server acts as a proxy that sends requests to the Yelp Fusion API.","A MERN stack application to browse movies and manage your list of movies that you will watch or ones that you’ve watched already. Data about the movies comes from the backend, where the server acts as a proxy that sends requests to the TMDB API.","A full-stack application where you can have a restaurant randomly chosen for you based on your inputs for the term and location. There is a selection of food/dish images you can click on to search the Yelp Fusion API.","A group project where we took over another group's project Frontend Capstone and scaled the backend to handle production-level traffic. The goal was to scale up to 10k RPS in a 2-week time frame from choosing the database to seeding to testing to scaling. The process only involved horizontally scaling and no vertically scaling. Horizontally scaling was done with the AWS EC2 free tier instance (t2 micro).","A group project where we worked together to make a mockup of SoundCloud. We divided the page into microservices, and each member was responsible for a microservice. I was responsible for the bottom audio player, where I implemented music functionality."],k=[["React","Redux","React Router DOM","Styled-components","Express.js","Passport.js","MongoDB","Yelp Fusion API"],["React","Redux","React Router DOM","Styled-components","Passport.js","Express.js","MongoDB"],["React","CSS3","Express.js","Yelp Fusion API","Google Maps JavaScript API"],["Express.js","Node.js","PostgreSQL","Docker","Loader.io","K6","New Relic","AWS EC2","NGINX"],["React","Styled-components","Express.js","MongoDB","Docker","AWS S3 & EC2"]],C=[["Added user authentication with Passport.js and MongoDB and managed sessions with Express/Passport.","Added functionality to randomize from lists managed by Redux and MongoDB."],["Developed web application to display formatted movie information in a responsive UI from user queries","Managed movie lists in application and TMDB API information using Redux and MongoDB.","Authenticate users with Passport.js and MongoDB and established sessions with Express/Passport.","Integrated TMDB API to retrieve movie information from user search results."],["Developed web application to display formatted information in a responsive UI from user queries.","Integrated google maps showcasing restaurants as markers using Google Maps API.","Integrated Yelp API to retrieve restaurant information from user search results."],["Optimized service to handle 2.2k RPS with latency less than 129ms and 0% error rate by horizontal scaling service to 5 servers on EC2 instances and implementing NGINX as a reverse proxy and load balancer.","Deployed service in Docker container to make horizontally scaling the service seamless.","Load tested the application with Loader.io and K6 and identified bottlenecks within the system.","Implemented RESTful API to support CRUD operations."],["Implemented music player functionality using React state management for HTML audio element/source.","Developed RESTful API to render data retrieved from AWS S3.","Applied styled components to reduce conflicts when deploying with other services.","Deployed service and proxy server in docker containers through Amazon EC2 Instances."]];t.default=function(){var e=(0,a.Xz)().map((function(e,t){return{node:m(m({},e.node),{},{excerpt:E[t],technologies:k[t],bullets:C[t]})}}));return i.createElement(p,null,i.createElement("h1",null,"Projects"),e.map((function(e,t){var n=e.node;return i.createElement(s(),{key:t},i.createElement(u,null,i.createElement(f,null,i.createElement("a",{href:n.frontmatter.site||n.frontmatter.github,target:"_blank"},i.createElement("h2",null,n.frontmatter.title)),i.createElement(h,null,n.frontmatter.site?i.createElement(y,{href:n.frontmatter.site,target:"_blank"},i.createElement("p",null,"Live Site")):null,i.createElement(g,{href:n.frontmatter.github,target:"_blank"},i.createElement("p",null,"GitHub")))),i.createElement(w,null,i.createElement("p",null,n.excerpt)),i.createElement(b,null,n.bullets.map((function(e,t){return i.createElement(v,{key:t},e)}))),i.createElement(x,null,n.technologies.map((function(e,t){return i.createElement("p",{key:t},e)})))))})))}},9118:function(e,t,n){"use strict";n.r(t);var o=n(7294),i=n(9),r=n(14),a=n.n(r),l=i.ZP.div.withConfig({displayName:"Skills__SkillsContainer",componentId:"cxtztl-0"})(["display:flex;color:var(--on-bg);max-width:1320px;flex-direction:column;width:100%;margin:6rem 0px 10rem 0px;"]),s=i.ZP.div.withConfig({displayName:"Skills__Container",componentId:"cxtztl-1"})(["display:flex;z-index:2;margin-top:2rem;margin-left:1rem;flex-wrap:wrap;justify-content:center;"]),c=i.ZP.div.withConfig({displayName:"Skills__Skill",componentId:"cxtztl-2"})(["display:flex;justify-content:center;align-items:center;position:relative;margin-right:1rem;width:125px;height:125px;text-align:center;margin-top:1rem;"]),m=i.ZP.div.withConfig({displayName:"Skills__SkillOverlay",componentId:"cxtztl-3"})(["position:absolute;top:0;left:0;width:100%;height:100%;opacity:24%;border:1px solid var(--on-bg);transition:border-radius 0.5s ease;&:hover{background-color:var(--on-bg);opacity:10%;border-radius:50%;}"]),d=["JavaScript","TypeScript","React","Gatsby.js","Redux.js","Node.js","Express.js","HTML5","CSS3","MongoDB","Git"];t.default=function(){var e=function(e){var t=document.querySelectorAll(".item"),n=e.pageX,o=e.pageY;t.forEach((function(e){var t=e.offsetLeft+20,i=e.offsetTop+20,r=n-t,a=o-i,l=180*Math.atan2(a,r)/Math.PI;e.style.transform="rotate("+l+"deg)"}))};return o.createElement(l,{onMouseEnter:function(){return document.addEventListener("mousemove",e)},onMouseLeave:function(){return document.removeEventListener("mousemove",e)}},o.createElement("h1",null,"Skills"),o.createElement(a(),null,o.createElement(s,null,d.map((function(e,t){return o.createElement(c,{key:t},o.createElement("p",null,e),o.createElement(m,{className:"item"}))})))))}},8761:function(e,t,n){"use strict";n.r(t);var o=n(7294),i=n(9),r=n(8533),a=n(5444),l=n(6287),s=n(8645),c=n(8891),m=n(9938),d=n(14),p=n.n(d),u=n(4422),f=n(9118),h=i.ZP.div.withConfig({displayName:"fullresume__Container",componentId:"sc-1mbonkf-0"})(["display:flex;justify-content:center;align-items:center;flex-direction:column;padding:0px 150px;@media (max-width:1200px){padding:0px 100px;}@media (max-width:992px){padding:0px 75px;}@media (max-width:768px){padding:0px 50px;}@media (max-width:576px){padding:0px 25px;}"]),g=i.ZP.div.withConfig({displayName:"fullresume__BackHomeContainer",componentId:"sc-1mbonkf-1"})(["position:absolute;top:0;left:0;margin:1rem;cursor:pointer;font-size:1.25rem;text-decoration:underline;"]);t.default=function(){return o.createElement(o.Fragment,null,o.createElement(r.Z,null),o.createElement(p(),{left:!0},o.createElement(g,null,o.createElement(a.Link,{to:"/"},"← Back to portfolio"))),o.createElement(h,null,o.createElement(l.default,null),o.createElement(s.default,null),o.createElement(c.default,null),o.createElement(m.default,null),o.createElement(u.default,null),o.createElement(f.default,null)))}},8533:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var o,i,r,a=n(9),l=(0,a.iv)(['*,::before,::after{box-sizing:border-box;}::before,::after{text-decoration:inherit;vertical-align:inherit;}html{cursor:default;line-height:1.5;-moz-tab-size:4;tab-size:4;-webkit-tap-highlight-color:transparent;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;word-break:break-word;}body{margin:0;}h1{font-size:2em;margin:0.67em 0;}dl dl,dl ol,dl ul,ol dl,ul dl{margin:0;}ol ol,ol ul,ul ol,ul ul{margin:0;}hr{height:0;overflow:visible;}main{display:block;}nav ol,nav ul{list-style:none;padding:0;}pre{font-family:monospace,monospace;font-size:1em;}a{background-color:transparent;}abbr[title]{text-decoration:underline;text-decoration:underline dotted;}b,strong{font-weight:bolder;}code,kbd,samp{font-family:monospace,monospace;font-size:1em;}small{font-size:80%;}audio,canvas,iframe,img,svg,video{vertical-align:middle;}audio,video{display:inline-block;}audio:not([controls]){display:none;height:0;}iframe{border-style:none;}img{border-style:none;}svg:not([fill]){fill:currentColor;}svg:not(:root){overflow:hidden;}table{border-collapse:collapse;}button,input,select{margin:0;}button{overflow:visible;text-transform:none;}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button;}fieldset{border:1px solid #a0a0a0;padding:0.35em 0.75em 0.625em;}input{overflow:visible;}legend{color:inherit;display:table;max-width:100%;white-space:normal;}progress{display:inline-block;vertical-align:baseline;}select{text-transform:none;}textarea{margin:0;overflow:auto;resize:vertical;}[type="checkbox"],[type="radio"]{padding:0;}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto;}::-webkit-input-placeholder{color:inherit;opacity:0.54;}::-webkit-search-decoration{-webkit-appearance:none;}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}::-moz-focus-inner{border-style:none;padding:0;}:-moz-focusring{outline:1px dotted ButtonText;}:-moz-ui-invalid{box-shadow:none;}details{display:block;}dialog{background-color:white;border:solid;color:black;display:block;height:-moz-fit-content;height:-webkit-fit-content;height:fit-content;left:0;margin:auto;padding:1em;position:absolute;right:0;width:-moz-fit-content;width:-webkit-fit-content;width:fit-content;}dialog:not([open]){display:none;}summary{display:list-item;}canvas{display:inline-block;}template{display:none;}a,area,button,input,label,select,summary,textarea,[tabindex]{-ms-touch-action:manipulation;touch-action:manipulation;}[hidden]{display:none;}[aria-busy="true"]{cursor:progress;}[aria-controls]{cursor:pointer;}[aria-disabled="true"],[disabled]{cursor:not-allowed;}[aria-hidden="false"][hidden]{display:initial;}[aria-hidden="false"][hidden]:not(:focus){clip:rect(0,0,0,0);position:absolute;}']),s=(0,a.iv)(["@keyframes line-anim{to{stroke-dashoffset:0;}}@keyframes fill{from{fill:transparent;}to{fill:var(--primary-color);}}@keyframes logo-fill{from{fill:transparent;}to{fill:var(--secondary-color);}}"]),c=(0,a.vJ)(o||(i=["\n  ","\n\n  :root {\n    --primary-color: #BB86FC;\n    --primary-variant-color: #3700B3;\n    --secondary-color: #03DAC6;\n    --bg-color: #121212;\n    --surface-color: #121212;\n    --error-color: #CF6679;\n    --on-primary-color: #000000;\n    --on-secondary-color: #000000;\n    --on-bg: #FFFFFF;\n    --on-surface: #FFFFFF;\n    --on-error: #000000;\n    --high-text-emphasis: 80%;\n    --medium-text-emphasis: 60%;\n    --primary-font: 'Poppins', sans-serif;\n  }\n\n  body {\n    background-color: var(--bg-color);\n    font-family: var(--primary-font);\n  }\n\n  a {\n    text-decoration: none;\n    color: var(--on-bg);\n  }\n\n  a:hover {\n    color: var(--secondary-color);\n  }\n\n  html {\n    scrollbar-width: thin;\n    scrollbar-color: var(--on-bg) var(--bg-color);\n  }\n\n  body::-webkit-scrollbar {\n    width: 1rem;\n  }\n\n  body::-webkit-scrollbar-track {\n    background: var(--bg-color);\n  }\n\n  body::-webkit-scrollbar-thumb {\n    background-color: var(--on-bg);\n    border: 3px solid var(--bg-color);\n    border-radius: 10px;\n  }\n\n  ","\n"],r||(r=i.slice(0)),i.raw=r,o=i),l,s)}}]);
//# sourceMappingURL=component---src-pages-fullresume-index-tsx-68451e0de662b88d3478.js.map