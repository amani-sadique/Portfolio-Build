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
    title: 'Seen Ventures x Glowbal',
    client: 'Glowbal',
    industry: 'HVAC',
    duration: '10 Weeks',
    readTime: '7 min',
    image:
      'https://framerusercontent.com/images/cLJiv4buwZOoZctXHKMqoOLLono.png?width=1440&height=754',
    summary:
      '10-week placement designing a B2C e-commerce portal for an HVAC distributor, replacing a manual phone and email order process.',
    problem:
      'Replace with 2–3 sentences: what problem or opportunity existed, and for whom, before you got involved.',
    research:
      'Replace with what you did to understand the problem — interviews, competitor analysis, analytics, stakeholder input — and 1–2 key findings that shaped your direction.',
    process:
      'Replace with how you moved from insight to design: wireframes, information architecture decisions, UI exploration. Consider adding 1–2 process images here (sketches, low-fi wireframes, before/after).',
    solution:
      'Replace with a description of the final design and the specific decisions that solved the problem — not just what it looks like, but why it works.',
    outcome:
      "Replace with the result: metrics if you have them (conversion, task completion, time-on-task), qualitative feedback, or what shipped. If you don't have hard metrics, be honest about that and focus on what you learned.",
    prototypeLink: '#',
  },
  {
    type: 'ux',
    category: 'UX Case Study',
    title: 'Your Personal Project — The Design',
    client: 'Self-directed',
    industry: 'Add industry',
    duration: 'Add duration',
    readTime: 'Add read time',
    image: null,
    summary:
      "Add a summary of this project's design problem and your role — since you're designing and building it yourself, this is a great place to show end-to-end ownership.",
    problem:
      'Replace with 2–3 sentences: what problem or opportunity this project addresses, and why you chose to build it.',
    research:
      'Replace with what you did to understand the problem — even for a personal project, a bit of competitor research or informal user interviews adds credibility.',
    process:
      'Replace with how you moved from insight to design: wireframes, information architecture decisions, UI exploration.',
    solution:
      'Replace with a description of the final design and the specific decisions that solved the problem.',
    outcome:
      "Replace with the result — and once you've built it, note how the design held up once you started building it.",
    prototypeLink: '#',
    pairIndex: 3,
    pairLabel: 'See the build side of this project',
  },
  {
    type: 'fullstack',
    category: 'Full-Stack',
    title: 'Level Up Works Full Stack App Build',
    role: 'Add your role',
    stack: 'Add your stack (e.g. React, Node, MySQL)',
    duration: '6 Weeks',
    readTime: 'Add read time',
    image:
      'https://framerusercontent.com/images/eEqVEvtAEcZ52UXwAnjJGVLyIyc.png?width=1440&height=779',
    summary:
      'Building an educational platform end-to-end: homepage and login modal, MySQL back-end integration, and API testing with Postman.',
    overview:
      "Replace with 2–3 sentences: what you built, who it's for, and why it exists.",
    architecture:
      'Replace with your stack and the reasoning behind it — frontend, backend, database, key libraries or APIs, and why you chose them over alternatives.',
    features: [
      "Replace with a specific feature (e.g. 'Real-time order status via WebSocket')",
      'Add another key feature',
      'Add a third if relevant — keep this list to 3–5 items',
    ],
    challenge:
      'Replace with ONE specific technical problem you hit and how you solved it. This is the section developers and hiring managers read most closely — it shows how you think, not just what you can build from a tutorial.',
    outcome:
      "Replace with what happened: performance numbers, user adoption, what shipped, or what you'd improve next.",
    liveLink: '#',
    repoLink: '#',
  },
  {
    type: 'fullstack',
    category: 'Full-Stack',
    title: 'Your Personal Project — The Build',
    role: 'Designer & Developer',
    stack: 'Add your stack',
    duration: 'Add duration',
    readTime: 'Add read time',
    image: null,
    summary:
      'Add a summary focused on the technical build of this same project — stack, architecture, and how you shipped it.',
    overview:
      "Replace with 2–3 sentences: what you built, who it's for, and why it exists.",
    architecture:
      'Replace with your stack and the reasoning behind it — frontend, backend, database, key libraries or APIs, and why you chose them over alternatives.',
    features: [
      'Add a specific feature',
      'Add another key feature',
      'Add a third if relevant — keep this list to 3–5 items',
    ],
    challenge:
      'Replace with ONE specific technical problem you hit and how you solved it. Building something you designed yourself often surfaces constraints you didn\'t anticipate — that gap is worth writing about honestly.',
    outcome:
      "Replace with what happened: performance numbers, what shipped, or what you'd improve next.",
    liveLink: '#',
    repoLink: '#',
    pairIndex: 1,
    pairLabel: 'See the design side of this project',
  },
];

export default projects;
