import self from '../img/self.png';
import { colors } from '../colors/mainGradient';

export const info = {
  firstName: 'Siddharth',
  lastName: 'Sankar',
  initials: 'SS',
  position: 'Computer science undergraduate/full-stack developer',
  selfPortrait: self,
  gradient: `-webkit-linear-gradient(135deg, ${colors})`,
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: '🇨🇦🍁🌃',
      text: 'based in India',
    },
    {
      emoji: '🎨👨‍💻📱',
      text: 'CS at SFSU',
    },
    {
      emoji: '📧📨📩',
      text: 'ssankar@sfsu.edu',
    },
  ],
  socials: [
    {
      link: 'https://ibb.co/0D4s5kF', // this should be https://yourname.com/resume.pdf once you've deployed
      icon: 'fa fa-user-circle',
      label: 'resume',
    },
    {
      link: 'https://www.instagram.com/siddhaarrrth/',
      icon: 'fa fa-instagram',
      label: 'instagram',
    },
    {
      link: 'https://github.com/siddharths23',
      icon: 'fa fa-github',
      label: 'github',
    },
    {
      link: 'https://www.linkedin.com/in/siddharth-sankar-143463214/',
      icon: 'fa fa-linkedin',
      label: 'linkedin',
    },
  ],
  bio: "Hey! I'm Siddharth Sankar, an undergraduate computer science student at San Francisco State University,CA. I'm currently in my final semester, working as a team lead for two projects(a multiplayer unity game and a gpt-AI travel planning application) and plan to graduate by MAY 2023. I have always tried to involve myself in projects and have gained valuable experience in software and web development though my previous internships at exciting startups. I focus on full-stack development using the MERN stack(Mongodb,ExpressJS,ReactJS,NodeJS). Please feel free to go through all my information to determine if I could be a good candidate that can make a meaningfull contribution to your team.",
  skills: {
    languages: ['C++', 'Java', 'JavaScript', 'Python'],
    webDev: ['HTML/CSS', 'react.js', 'node.js', 'express.js', 'redux'],
    databases: ['MySQL', 'mongoDB'],
    OperatingSystems: ['Linux', 'Windows'],
    others: ['Google cloud', 'VScode', 'PostMan', 'Git Bash'],
  },
  experience: [
    {
      title: 'Web Development Intern',
      company: ' Essentiate.com',
      duration: 'May 2022- Sep 2022',
      description:
        'Developed and implemented a user-friendly data analytics blog page using ReactJs and MySQL, increased site traffic by 50% with an AI chatbot, and utilized Linux kernel and Git for enhanced security and team collaboration.',
    },
    {
      title: 'Instructional Teaching Assistant',
      company: ' San Francisco State University',
      duration: 'June 2022 - present',
      description:
        'Served as a teaching assistant and grader for CSC 220 - Data Structures, holding weekly office hours to support students in completing assignments and improving their mastery of the language.',
    },
    {
      title: 'Software Engineering Intern',
      company: ' Thought Frameworks Inc',
      duration: ' Aug 2021 - Oct 2021',
      description:
        'Responsible for debugging and testing websites by applying various test cases using Appium, Selenium, and Webdriver.io to enhance mobile application functionality. Collaborated with a team of engineers to effectively report and track bugs found in an online application that provided driver information using Jira.      ',
    },
  ],
  portfolio: [
    {
      title: 'Scribble',
      //live: 'https://ingrid0126.com/', //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: 'https://github.com/siddharths23/Scribble', // this should be a link to the **repository** of the project, where the code is hosted.
    },
    {
      title: 'Picshare Gallery',
      source: 'https://github.com/siddharths23/web-dev-term-project',
    },
    {
      title: 'Interpreter',
      source: 'https://github.com/siddharths23/interpreter',
    },
    {
      title: 'OmniFood Frontend',
      source: 'https://github.com/siddharths23/Omnifood--Online-delivery-website',
    },
  ],
};
