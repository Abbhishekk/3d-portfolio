import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  threejs,
  flask,
  abcoedtech,
  acetech,
  sms,
  acetechWebsite,
  sports,
  pomodoro,
  nifse,
  camera
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "AI Integration",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Flask",
    icon: flask,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  
];

const experiences = [
  {
    title: "PHP Developer",
    company_name: "AbCoEdTech pvt. ltd.",
    icon: abcoedtech,
    iconBg: "#E6DEDD",
    date: "August 2023 - November 2023",
    points: [
      "Developing and maintaining web applications using PHP and other related technologies.",
      " We have implemented SQl based database and PHP in the development.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  
  {
    title: "Freelance Developer",
    company_name: "Acetech",
    icon: acetech,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Developed Student management system using PHP and MySQL.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Student Management System",
    description:
      "A Student Management System (SMS) is a digital platform that automates student-related tasks, from enrollment to grade tracking, streamlining administrative processes for institutions.",
    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap5",
        color: "pink-text-gradient",
      },
    ],
    image: sms,
    source_code_link: "https://github.com/Abbhishekk/student-management-sysytem",
  },
  {
    name: "Acetech institution official website ",
    description:
      "Official website for ACETECH institution where students can login/register or even explore different available courses. Student can track their fees and course by loging in it",
    tags: [
      {
        name: "HTML5",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "green-text-gradient",
      },
      {
        name: "PHP",
        color: "pink-text-gradient",
      },
    ],
    image: acetechWebsite,
    source_code_link: "https://acetech.abcoedtech.com/",
  },
  {
    name: "Sports Scheduler",
    description:
      "A sports scheduler is a tool that helps you plan and organize sports events or tournaments. It can help you set the dates, times, venues, and teams for each game or match. Some sports schedules also allow you to track scores, standings, play-offs, and other information related to your sports.",
    tags: [
      {
        name: "NodeJs",
        color: "blue-text-gradient",
      },
      {
        name: "PostgreSql",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCss",
        color: "pink-text-gradient",
      },
    ],
    image: sports,
    source_code_link: "https://github.com/Abbhishekk/sports-scheduler",
  },
  
  {
    name: "Pomodoro Timer",
    description:
      "The Pomodoro Technique is a time management method that involves breaking your work into focused intervals (usually 25 minutes) separated by short breaks.",
    tags: [
      {
        name: "HTML5",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: pomodoro,
    source_code_link: "https://github.com/Abbhishekk/Pomodoro",
  },
  {
    name: "NIFSE college official website ",
    description:
      "National Institute of Fire Safety Engineering is a college for fire engineering. ",
    tags: [
      {
        name: "HTML5",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Codeignitor",
        color: "pink-text-gradient",
      },
      {
        name: "Javascript",
        color: "orange-text-gradient",
      },
    ],
    image: nifse,
    source_code_link: "https://nifse.in/",
  },
  {
    name: "Basic Camera App ",
    description:
      "Basic camera app developed using Flask framework. ",
    tags: [
      {
        name: "HTML5",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
      {
        name: "Flask",
        color: "orange-text-gradient",
      },
    ],
    image: camera,
    source_code_link: "https://github.com/Abbhishekk/Camera_App",
  },
];

const descriptions = {
  work: "Folowing projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it, it reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.",
  about: " Motivated professional with expertise in Full Stack development. Proven track record of delivering exceptional results. Skilled in backend programming. Seeking new challenges and opportunities for growth. Let's connect and explore collaboration possibilities.",
  
}

export { services, technologies, experiences, testimonials, projects,descriptions };