import enterpriseCheque from '../../assets/enterprise_cheque.jpg'

export const sections = [
  {
    id: 'why-miovision',
    tag: 'Career Path',
    headline: "Despite the title, I've always been doing marketing",
    accentWord: 'always been doing marketing',
    body: [
      "I studied Human Geography at UBC planning to become a transportation planner.",
      "I took a surprise turn into tech instead. I started out in marketing and customer success at Baremetrics, then spent 7+ years at Lumen5, where I joined as a generalist and left as Head of Product.",
      "Despite the product-focused title, I built out product marketing in its entirety at Lumen5. In the early days, I wrote the launch copy, trained sales, built the landing pages. If a feature shipped, I was probably the one figuring out how to talk about it.",
    ],
    timeline: [
      { label: 'Apple', sub: 'Genius / training' },
      { label: 'Hootsuite', sub: 'Support + Ops' },
      { label: 'Baremetrics', sub: 'First biz hire' },
      { label: 'Lumen5', sub: 'Product + PMM, 7+ yrs' },
      { label: "What's next?", sub: 'Maybe Miovision?', highlight: true },
    ],
    bg: 'bg-white',
  },
  {
    id: 'advocate',
    tag: 'Product Marketing',
    headline: "I ran product marketing before we had a product marketer",
    accentWord: 'product marketing',
    body: [
      "At Lumen5 I was Head of Product in title, but I was responsible for product marketing my whole time there in one form or another. In the early days I ran it as a team of one, building landing pages, writing social posts and emails, and coming up with plans and pricing. Later I was more of a player-coach: I'd mentor our PMM, run training sessions with sales and CX on new features, and act as the project manager for launches.",
      "Even as we scaled, I've always been (a bit tongue in cheek) an honorary member of our marketing team.",
    ],
    youtube: 'https://www.youtube.com/embed/d9VSYecC5YM',
    youtubeCaption: "Here's a product walkthrough I recorded for a launch. Also note the bus scroll behind me. Real urbanist cred!",
    bg: 'bg-white',
  },
  {
    id: 'track-record',
    tag: 'GTM Results',
    headline: "Proof that our product launches drove results",
    accentWord: 'drove results',
    stats: [
      { value: '40%', numericValue: 40, suffix: '%', accent: true, label: 'lift in paid purchases after repositioning Lumen5 around AI voiceover videos powered by ElevenLabs' },
      { value: '3-4x', numericValue: 3, suffix: '-4x', label: 'product launches per quarter, each one with release notes, walkthrough videos, sales training, and help docs' },
      { value: '20-40%', numericValue: 20, suffix: '-40%', label: 'YoY enterprise revenue growth since I led the pivot from self-serve freemium to Enterprise' },
    ],
    bg: 'bg-gray-50',
  },
  {
    id: 'enterprise',
    tag: 'Enterprise Repositioning',
    headline: "I led a pivot that meant rewriting how we position Lumen5",
    accentWord: 'how we position Lumen5',
    body: "When the self-serve market for video creators got crowded, I led Lumen5's move from freemium to Enterprise. This meant a completely different buyer. We went from marketing to individual creators to selling to teams at brands like KPMG, PwC, and Siemens. The Enterprise business has grown 20-40% YoY in the five years since.",
    image: {
      src: enterpriseCheque,
      alt: 'A framed $1,000 check, our first enterprise payment',
    },
    logosLabel: 'Enterprise customers I worked with',
    logos: ['KPMG', 'Siemens', 'PwC', 'Deloitte', 'Accenture', 'SAP', 'Cisco', 'Swiss Re', 'Best Western', 'Mitsubishi', 'Baker Hughes'],
    bg: 'bg-white',
  },
]

// Final CTA, rendered after the FAQ, just above the footer (matches the full-page design).
export const contactSection = {
  id: 'contact',
  headline: "Let's talk",
  body: "After years building AI products, I want to focus my time exclusively on marketing and storytelling around them. I also want to work on a product that excites my inner urbanist. Miovision is exactly that, sitting at the intersection (pun intended) of cities, mobility, and AI.",
  links: [
    { label: 'Email me', url: 'mailto:kaegandonnelly@gmail.com', primary: true },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/kaegandonnelly' },
  ],
  bg: 'bg-white',
}
