// Single source of truth for all site content. Everything here comes from the CV.
export const profile = {
  name: 'Ayesha Ilyas',
  role: 'PHP Laravel Backend Developer',
  location: 'Lahore',
  email: 'ilyasayesha789@gmail.com',
  phone: '+92 304 4809640',
  phoneHref: 'tel:+923044809640',
  github: 'https://github.com/ayesha-ilyas456',
  githubHandle: 'ayesha-ilyas456',
  linkedin: 'https://www.linkedin.com/in/ayesha-ilyas-85a007317',
  summary:
    'BSCS graduate (2025) with 1.5 years of experience building and deploying 11+ web applications. Skilled in Laravel, Yii2, RESTful APIs, MySQL optimization and MVC architecture, with a track record of secure, scalable web solutions and a 30% database performance gain. Expertise in backend development and API integration.',
  quote:
    'I am passionate about building scalable, secure and efficient backend systems.',
  // Drop a photo into /public and set this to e.g. '/ayesha.jpg' to replace the monogram.
  photo: '/ayesha.webp',
}

export const nav = [
  { to: '/', label: 'Index', end: true, desc: 'home' },
  { to: '/projects', label: 'Work', desc: 'all work' },
  { to: '/about', label: 'About', desc: 'bio + experience' },
  { to: '/contact', label: 'Contact', desc: 'get in touch' },
]

export const projects = [
  {
    id: 'medcare',
    slug: 'medcare',
    image: null, // e.g. '/projects/medcare.png' (file goes in public/projects/)
    number: '01',
    title: 'MedCare',
    kind: 'Healthcare system',
    year: '2025',
    note: 'BSCS final year project, NCBA&E University',
    blurb:
      'A healthcare platform for diagnosis workflow, appointment scheduling and medical records management.',
    points: [
      'Laravel RESTful API backend with a Bootstrap 5 and AJAX frontend.',
      'Role-based access for Patient, Doctor and Admin, with secure authentication and data privacy compliance.',
    ],
    tags: ['Laravel', 'REST API', 'RBAC', 'Bootstrap 5', 'AJAX'],
    sites: [],
  },
  {
    id: 'education',
    slug: 'education',
    image: null, // e.g. '/projects/education.png' (file goes in public/projects/)
    number: '02',
    title: 'Educational Platforms',
    kind: 'Learning platforms',
    year: '2025—26',
    blurb:
      'Laravel-based LMS platforms for course and student management, covering enrollment, assignments and progress reporting.',
    points: [],
    tags: ['Laravel', 'LMS', 'Enrollment', 'Progress reporting'],
    sites: ['ipe-education.com', '24houracademy.com', 'pmpteachers.com'],
  },
  {
    id: 'commerce',
    slug: 'commerce',
    image: null, // e.g. '/projects/commerce.png' (file goes in public/projects/)
    number: '03',
    title: 'E-Commerce & Business Websites',
    kind: 'E-commerce & CMS',
    year: '2025—26',
    blurb:
      'Dynamic websites with product management and payment integration, including catalogs, shopping carts and an SEO-optimized CMS.',
    points: [],
    tags: ['E-commerce', 'Payment gateways', 'CMS', 'SEO'],
    sites: ['electromix.com', 'styleexcel.com', 'horizonpk.com', 'salaartech.com'],
  },
  {
    id: 'hospitality',
    slug: 'hospitality',
    image: null, // e.g. '/projects/hospitality.png' (file goes in public/projects/)
    number: '04',
    title: 'Hospitality & Service Solutions',
    kind: 'Booking & community',
    year: '2025—26',
    blurb:
      'Booking and service management features: hotel booking with real-time availability, and a charity platform with donation and volunteer management.',
    points: [],
    tags: ['Booking', 'Real-time availability', 'Donations', 'Volunteers'],
    sites: ['themajestichotel.com', 'lifelinewelfare.com'],
  },
  {
    id: 'vms',
    slug: 'vms',
    image: null, // e.g. '/projects/vms.png' (file goes in public/projects/)
    number: '05',
    title: 'VMS & Attendance System',
    kind: 'Internal dashboards',
    year: '2026',
    note: 'Built at Geekinn Private Limited',
    blurb:
      'Web-based dashboards for visitor management, attendance tracking and meal planning.',
    points: [
      'Backend functionality for the Visitor Management System (VMS), attendance management and meal planning dashboards.',
      'RESTful APIs, database integrations and backend services for Resourceinn-related systems.',
    ],
    tags: ['Laravel', 'REST API', 'Dashboards', 'Attendance', 'MySQL'],
    sites: [],
  },
]

export const skillGroups = [
  { label: 'Backend', items: 'PHP (Core, Laravel, Yii2), RESTful API Development, MVC Architecture, Authentication & RBAC, Session Management' },
  { label: 'Frontend', items: 'HTML5, CSS3, JavaScript, jQuery, Bootstrap 4/5, AJAX, Responsive Design, Cross-browser Compatibility' },
  { label: 'Database', items: 'MySQL: Schema Design, Query Optimization, Normalization, Complex Joins, Indexing Strategies' },
  { label: 'DevOps & Tools', items: 'Git, GitHub, cPanel, VS Code, Web Hosting, Domain Configuration, Server Deployment' },
  { label: 'Web Tech', items: 'JSON, XML, AJAX, API Integration, Payment Gateway Integration' },
]

export const skillTicker = [
  'PHP', 'Laravel', 'Core PHP', 'Yii2', 'RESTful APIs', 'MVC', 'RBAC', 'Authentication',
  'MySQL', 'HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Bootstrap', 'AJAX', 'JSON', 'XML',
  'Git', 'GitHub', 'VS Code', 'cPanel',
]

export const focusTicker = [
  'Backend systems', 'REST APIs', 'API integration', 'MySQL optimization', 'RBAC', 'Payment gateways',
  'cPanel deployment', 'LMS', 'E-commerce', 'Booking systems', 'Dashboards',
]

export const experience = [
  {
    role: 'Backend Developer',
    company: 'Geekinn Private Limited',
    place: 'Johar Town, Lahore',
    period: 'July 2026 – Present',
    points: [
      'Developed backend functionality for a Visitor Management System (VMS), attendance management and meal planning dashboards.',
      'Built and maintained RESTful APIs, database integrations and backend services for Resourceinn-related systems.',
    ],
  },
  {
    role: 'Full Stack PHP Developer',
    company: 'Salaar Software Technology Park',
    place: 'Lahore',
    period: 'Sep 2025 – Jul 2026',
    points: [
      'Developed and maintained 11+ live production websites using Core PHP, Laravel and Yii2 across e-commerce, education and hospitality sectors.',
      'Designed and optimized MySQL database schemas, complex queries and indexing strategies, improving application performance by 30%.',
      'Built responsive, cross-browser-compatible user interfaces using HTML5, CSS3, Bootstrap, JavaScript and jQuery.',
      'Developed CRUD operations, RESTful APIs, user authentication, role-based access control (RBAC) and form validation.',
      'Managed website deployments through cPanel, including server configuration, domain setup and production releases.',
    ],
  },
  {
    role: 'Data Analyst Intern',
    company: 'Noah Technologies',
    place: 'Lahore',
    period: 'Oct 2024 – Dec 2024',
    points: [
      'Analyzed and cleaned business datasets to support data-driven decision-making.',
      'Created Excel reports and data visualizations to present business insights.',
    ],
  },
]

export const certifications = [
  { title: 'Web Development (PHP Laravel)', issuer: 'Institute of Professional Excellence' },
  { title: 'Python for Data Science', issuer: 'PNY Training' },
  { title: 'Communication Skills', issuer: 'PSEB' },
]

export const education = {
  degree: 'Bachelor of Science in Computer Science (BSCS)',
  school: 'NCBA&E, Gulberg Main Branch, Lahore',
  period: '2021 – 2025',
  relevant:
    'Data Structures & Algorithms, Web Development, Database Management Systems, Operating Systems, Computer Networks, Software Engineering, Object-Oriented Programming (OOP)',
}

export const site = {
  // false: a project only shows an image area once it has a real `image`.
  // true: show the browser-frame placeholder for projects without one.
  showPlaceholders: false,
  issue: 'Oct 2026',
  builtWith: 'Built with React and Tailwind',
}