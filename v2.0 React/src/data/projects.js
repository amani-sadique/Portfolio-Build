// Placeholder data — two templates: 'ux' follows a standard UX/UI
// case-study structure (problem → research → process → solution → outcome);
// 'fullstack' follows a technical project structure (overview → architecture
// → features → challenge → outcome). Replace every placeholder string with
// your own content. Entries 1 and 3 are the design/build sides of the same
// self-directed project — pairIndex links them so the modal can cross-link.

const projects = [
  {
  type: 'ux',
    category: 'UX Case Study',
    title: 'Trade Warehouse',
    client: 'Glowbal',
    industry: 'HVAC Wholesale',
    duration: '10 Weeks',
    readTime: '6 min',
    image:
      '/ASSETS/trade-warehouse-cover.png',
    summary:
      '10-week placement designing a B2B/B2C e-commerce portal for an HVAC and trades supplies distributor, replacing a manual phone and email order process.',
    problem:
      'The client needed a user-friendly e-commerce platform that catered to both trade and retail customers. The key UX challenge was to create an intuitive interface that accommodated the unique needs and digital habits of trade buyers while remaining accessible to a broader consumer audience.',
    research:
      "Conducted research to understand tradie's digital behaviors and preferences, informing design decisions around usability and accessibility. Analysed the UX of established NZ trade retailers to identify industry best practices and opportunities for differentiation.",
    process:
      'Developed a comprehensive design system including a WCAG AA/AAA-compliant colour palette, typography system, and Material Symbols icon library. Created wireframes and high-fidelity Figma prototypes to communicate design intent and gather feedback from stakeholders.',
    solution:
      'The final design delivered an intuitive, accessibility-focused interface tailored to the needs of both trade and retail users. Key screens included: [PLACEHOLDER FOR SCREENSHOTS]',
    outcome:
      "I collaborated closely with project leads, developers, and clients throughout the multi-sprint delivery process. The project concluded with a suite of handover deliverables including a UX/UI Handover Document, Design System PDF, and client-facing showcase presentation. The client's investment in the next phase of development demonstrated their satisfaction with the design outcomes.",
    prototypeLink: 'https://www.figma.com/design/9KPAV3o0uWfEnn3eOpXtiG/Trade-Warehouse?node-id=0-1&p=f',
  },
  {
    type: 'ux',
    category: 'UX Case Study',
    title: 'Z Energy',
    client: 'Z Energy',
    industry: 'Fuel Retail',
    duration: '3 Weeks',
    readTime: '5 min',
    image: '/ASSETS/z-energy-cover.png',
    summary:
      'UX case study to redesign the fuel station finder for web and mobile, enhancing usability and filtering capabilities to better serve users on the go.',
    problem:
      "The existing station finder interface presented usability challenges, especially for mobile users attempting to quickly find a station based on their specific context and requirements (e.g., fuel type, amenities, proximity to their location).",
    research:
      "Conducted interviews and usability testing with a representative sample of users to identify pain points and uncover key usage patterns.",
    process:
      'Developed wireframes and high-fidelity prototypes for mobile and desktop, exploring intuitive filtering and layout options. Conducted multiple rounds of usability testing, refining the design based on user feedback to optimize task completion and ease of use.',
    solution:
      'The redesigned station finder offered an enhanced user experience, with key features including: [PLACEHOLDER FOR SCREENSHOTS]',
    outcome:
      'The final UI kit and developer handover materials were delivered to the development team. I provided ongoing support to address any questions during the implementation phase. The redesigned experience aimed to significantly improve user success rates and reduce friction when locating a suitable station on the go.',
    prototypeLink: 'https://www.figma.com/design/kbMEQ0iyfRNqPVSZA9J2Ch/M5-Prototyping?node-id=0-1&t=lZGQqz62fi0815VT-1',
  },
  // {
  //   type: 'ux',
  //   category: 'UX Case Study',
  //   title: 'Your Personal Project — The Design',
  //   client: 'Self-directed',
  //   industry: 'Add industry',
  //   duration: 'Add duration',
  //   readTime: 'Add read time',
  //   image: null,
  //   summary:
  //     "Add a summary of this project's design problem and your role — since you're designing and building it yourself, this is a great place to show end-to-end ownership.",
  //   problem:
  //     'Replace with 2–3 sentences: what problem or opportunity this project addresses, and why you chose to build it.',
  //   research:
  //     'Replace with what you did to understand the problem — even for a personal project, a bit of competitor research or informal user interviews adds credibility.',
  //   process:
  //     'Replace with how you moved from insight to design: wireframes, information architecture decisions, UI exploration.',
  //   solution:
  //     'Replace with a description of the final design and the specific decisions that solved the problem.',
  //   outcome:
  //     "Replace with the result — and once you've built it, note how the design held up once you started building it.",
  //   prototypeLink: '#',
  //   pairIndex: 3,
  //   pairLabel: 'See the build side of this project',
  // },
  {
    type: 'fullstack',
    category: 'Full-Stack',
    title: 'Level Up Works',
    role: 'Full Stack Developer',
    stack: 'React, HTML, CSS, JavaScript, MySQL, Postman',
    duration: '6 Weeks',
    readTime: '4 min',
    image:
      'https://framerusercontent.com/images/eEqVEvtAEcZ52UXwAnjJGVLyIyc.png?width=1440&height=779',
    summary:
      'Building an educational platform end-to-end: homepage and login modal, MySQL back-end integration, and API testing with Postman.',
    overview:
      'Level Up Works was a full-stack development project completed in collaboration with four other developers, focused on building a functioning educational platform. My role involved developing the homepage and login/sign-up modal, connecting user input from the front-end to the back-end via a MySQL database, and testing APIs with Postman.',
    architecture:
      'The project utilized React for the front-end, allowing for modular and reusable UI components. The back-end was powered by MySQL, providing a robust and scalable database solution. Postman was used to thoroughly test and debug API endpoints, ensuring smooth communication between the front-end and back-end.',
    features: [
      'Responsive homepage design with engaging visuals and clear calls-to-action',
      'User-friendly login and sign-up modal with form validation and error handling',
      'Secure user authentication and session management',
      'Seamless integration between front-end and back-end components',
    ],
    challenge:
      'One of the key challenges faced during the project was ensuring a smooth and secure flow of user data between the front-end and back-end. To overcome this, I collaborated closely with the back-end developers to design a robust API architecture and implement proper data validation and error handling. Thorough testing using Postman helped identify and resolve any issues, resulting in a seamless user experience.',
    outcome:
      'The primary outcome was a fully functional authentication flow, allowing users to successfully create an account and log in to access the learning content. By connecting the front-end and back-end components, I helped create a cohesive user experience that encouraged engagement with the platform.',
    // liveLink: 'Vercel link',
    repoLink: 'https://github.com/amani-sadique/Level-Up-Works-Full-Stack-Application',
  },
  // {
  //   type: 'fullstack',
  //   category: 'Full-Stack',
  //   title: 'Your Personal Project — The Build',
  //   role: 'Designer & Developer',
  //   stack: 'Add your stack',
  //   duration: 'Add duration',
  //   readTime: 'Add read time',
  //   image: null,
  //   summary:
  //     'Add a summary focused on the technical build of this same project — stack, architecture, and how you shipped it.',
  //   overview:
  //     "Replace with 2–3 sentences: what you built, who it's for, and why it exists.",
  //   architecture:
  //     'Replace with your stack and the reasoning behind it — frontend, backend, database, key libraries or APIs, and why you chose them over alternatives.',
  //   features: [
  //     'Add a specific feature',
  //     'Add another key feature',
  //     'Add a third if relevant — keep this list to 3–5 items',
  //   ],
  //   challenge:
  //     'Replace with ONE specific technical problem you hit and how you solved it. Building something you designed yourself often surfaces constraints you didn\'t anticipate — that gap is worth writing about honestly.',
  //   outcome:
  //     "Replace with what happened: performance numbers, what shipped, or what you'd improve next.",
  //   liveLink: '#',
  //   repoLink: '#',
  //   pairIndex: 1,
  //   pairLabel: 'See the design side of this project',
  // },
];

export default projects;
