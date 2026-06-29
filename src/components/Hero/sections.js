import enterpriseCheque from '../../assets/enterprise_cheque.jpg'

export const sections = [
  {
    id: 'why-miovision',
    tag: 'Career Path',
    headline: 'I started my career helping customers',
    accentWord: 'helping customers',
    body: "I studied Human Geography at UBC with the goal of becoming a planner. Life took a surprise turn to tech, where I started out in support and training and have woven those skills through every role since. Most recently I spent 7+ years at Lumen5 in roles across marketing, customer success, and product.",
    timeline: [
      { label: 'Apple', sub: 'Genius / training' },
      { label: 'Hootsuite', sub: 'Support + Ops' },
      { label: 'Baremetrics', sub: 'First biz hire' },
      { label: 'Lumen5', sub: 'AI video, 7+ yrs' },
      { label: "What's next?", sub: 'Maybe Miovision?', highlight: true },
    ],
    bg: 'bg-white',
  },
  {
    id: 'advocate',
    tag: 'Training & Enablement',
    headline: "I love teaching people how products work",
    accentWord: 'teaching',
    body: "I've been training people since my days as an Apple Genius, and I never really stopped, from hands-on sessions for founders at Baremetrics to “training the trainers” on every new feature at Lumen5. I loved being the face of the product.",
    youtube: 'https://www.youtube.com/embed/d9VSYecC5YM',
    youtubeCaption: 'A product walkthrough I recorded. The bus scroll behind me is real, I have the whole roll. 🙊',
    bg: 'bg-white',
  },
  {
    id: 'track-record',
    tag: 'Impact',
    headline: "Proof I'm good with customers",
    accentWord: 'customers',
    stats: [
      { value: '9 mo', numericValue: 9, suffix: ' mo', label: 'to a team-lead promotion at Hootsuite, on the strength of response rate and CSAT' },
      { value: '25%', numericValue: 25, suffix: '%', accent: true, label: 'lift in activation from built-in onboarding and user education at Lumen5' },
      { value: '4 yrs', numericValue: 4, suffix: ' yrs', label: 'as the lone business hire at Baremetrics, building the customer success curriculum from scratch' },
    ],
    bg: 'bg-gray-50',
  },
  {
    id: 'enterprise',
    tag: 'Change Management',
    headline: "I led a pivot that meant retraining everyone",
    accentWord: 'retraining everyone',
    body: "When the self-serve market got crowded, I led Lumen5's transition from freemium to Enterprise. It meant new onboarding workflows, change management, and education for a whole new type of buyer. The Enterprise business has grown 20-40% YoY in the five years since.",
    image: {
      src: enterpriseCheque,
      alt: 'A framed $1,000 check, our first enterprise payment',
      caption: 'I cheekily framed our first ever "Enterprise" cheque.',
    },
    logosLabel: 'Enterprise customers I supported',
    logos: ['KPMG', 'Siemens', 'PwC', 'Deloitte', 'Accenture', 'SAP', 'Cisco', 'Swiss Re', 'Best Western', 'Mitsubishi', 'Baker Hughes'],
    bg: 'bg-white',
  },
  {
    id: 'approach',
    tag: 'Tools & Process',
    headline: 'AI is part of how I work',
    accentWord: 'AI',
    body: "Over 7 years at Lumen5, I worked alongside designers and engineers to build an AI-powered video creator. I would use my AI skills to automate the laborious parts of the role, like updating documentation, giving me more hands-on time with customers.",    techLogos: true,
    bg: 'bg-white',
  },
]

// Final CTA — rendered after the FAQ, just above the footer (matches the full-page design).
export const contactSection = {
  id: 'contact',
  headline: "Let's talk",
  body: "I'm looking for a place where I can combine my product and marketing experience around a mission I care about. Miovision sits right at the intersection of cities, mobility, and product — exactly the kind of problem I do my best work on. Miovision feels like just the place.",
  links: [
    { label: 'Email me', url: 'mailto:hello@lookbothways.fyi', primary: true },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/kaegandonnelly' },
    { label: 'Resumé', url: 'https://canva.link/a7oxdsgap0r5def' },
  ],
  bg: 'bg-white',
}
