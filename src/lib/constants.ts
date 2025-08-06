import type { Site, Page } from './types'

export const loaderAnimation = [
  '.loader',
  { opacity: [1, 0], pointerEvents: 'none' },
  { easing: 'ease-out' },
]

export const LINKS = {
  github: 'https://github.com/GemeWolf',
  linkedin: 'www.linkedin.com/in/daniel-lópez-2a7448235',
  mail: 'mailto:contacto@gemewolf.com',
  instagram: 'https://www.instagram.com/gemewolf/',
  discord: 'https://discord.com/users/695150517986263072',
}

// Global
export const SITE: Site = {
  TITLE: 'Astro Sphere',
  DESCRIPTION:
    'Welcome to Astro Sphere, a portfolio and blog for designers and developers.',
  AUTHOR: 'Mark Horn',
}

// Work Page
export const WORK: Page = {
  TITLE: 'Work',
  DESCRIPTION: 'Places I have worked.',
}

// Blog Page
export const BLOG: Page = {
  TITLE: 'Blog',
  DESCRIPTION: 'Writing on topics I am passionate about.',
}

// Projects Page
export const PROJECTS: Page = {
  TITLE: 'Projects',
  DESCRIPTION: 'Recent projects I have worked on.',
}

// Search Page
export const SEARCH: Page = {
  TITLE: 'Search',
  DESCRIPTION: 'Search all posts and projects by keyword.',
}

// Study Page
export const STUDIES = [
  {
    title: 'Software Eengineering',
    institution: 'ULA',
    link: 'https://ula.edu.mx/',
    date: '2021 - 2025',
  }, {
    title: 'Github Education',
    institution: 'Github',
    link: 'https://github.com/education',
    date: '2023 - 2025',
  },
  {
    title: 'Dev Web Fullstack',
    institution: 'Udemy - web development',
    link: 'https://www.udemy.com/',
    date: '2022 - 2024',
  },
  {
    title: 'Javascript',
    institution: 'Udemy - javascript backend',
    link: 'https://www.academia-x.com/',
    date: '2024 - 2025',
  },
]

export const EXPERIENCE = [
  {
    company: 'Dadi Market',
    location: 'Mexico City, Mexico',
    position: 'Software Engineer',
    link: 'https://www.dadimarket.shop/',
    start: '2023',
    end: 'Current',
    tasks: [
      'Script development for fiveM Server',
      'Development for SQL database management',
      'Using Lua and Js to incorporate interfaces with fiveM',
      'Js development for self-moderating discord bots',
      'Testing and debugging',
    ],
  },
  {
    company: 'TwinqTV',
    location: 'Dominican Republic',
    position: 'Full Stack Developer',
    link: 'https://xrespectrp.tebex.io/',
    start: '2024',
    end: '2025',
    tasks: [
      'Development of a fiveM server for roleplay',
      'Script development for fiveM Server',
      'Creation and deployment of database for the server',
      'Security management and optimization for the client and the server',
    ],
  },
  {
    company: 'Pronde',
    location: 'CDMX, México',
    position: 'Back End Developer',
    start: '2023',
    link: 'https://pronde.com/',
    end: '2023',
    tasks: [
      'Database management and API integration for the Pronde platform',
      'Call Center IT Management',
    ],
  },
]
