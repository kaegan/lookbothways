import enterpriseCheque from '../../assets/enterprise_cheque.jpg'

export const sections = [
  {
    id: 'why-miovision',
    tag: 'Career Path',
    headline: 'I started in customer success and never lost the instinct',
    accentWord: 'customer success',
    body: "I studied Human Geography at UBC with the goal of becoming a planner. Life took a surprise turn to tech, where I started out in marketing and customer success before spending 7+ years at Lumen5. I joined as a generalist and left as Head of Product, but I never stopped doing product marketing along the way. I wrote launch copy, trained sales, built landing pages. If a feature shipped, I was probably the one figuring out how to talk about it.",
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
      "At Lumen5 I was Head of Product in title, but I was also responsible for product marketing my entire time there in various forms. In the early days I ran it as a team of one — building landing pages, writing social posts and emails, coming up with plans and pricing. Later I was more of a player-coach: mentoring our PMM, running training sessions with sales and CX on new features, and project-managing launches. I eventually identified product marketing as a gap and helped hire the first two PMMs to build out the function properly.",
      "Even as we scaled, I've always been (a bit tongue in cheek) an honorary member of the marketing team.",
    ],
    youtube: 'https://www.youtube.com/embed/d9VSYecC5YM',
    youtubeCaption: "A product walkthrough I recorded for a launch. I loved being the face of Lumen5's product.",
    bg: 'bg-white',
  },
  {
    id: 'track-record',
    tag: 'GTM Results',
    headline: "Proof the launches landed",
    accentWord: 'launches landed',
    stats: [
      { value: '40%', numericValue: 40, suffix: '%', accent: true, label: 'lift in paid purchases after repositioning Lumen5 around AI voiceover videos powered by ElevenLabs' },
      { value: '3–4x', numericValue: 3, suffix: '–4x', label: 'product launches per quarter, each one with release notes, walkthrough videos, sales training, and external comms' },
      { value: '20–40%', numericValue: 20, suffix: '–40%', label: 'YoY enterprise revenue growth since I led the pivot from self-serve freemium to Enterprise' },
    ],
    bg: 'bg-gray-50',
  },
  {
    id: 'enterprise',
    tag: 'Enterprise Repositioning',
    headline: "I led a pivot that meant repositioning everything",
    accentWord: 'repositioning everything',
    body: "When the self-serve market got crowded, I led Lumen5's transition from freemium to Enterprise. Completely different buyer, completely different pitch. We went from marketing to individual creators to selling to brand teams at KPMG, PwC, and Siemens. I rebuilt the positioning, wrote new sales enablement materials, and ran training so the team could actually sell it. The Enterprise business has grown 20-40% YoY in the five years since.",
    image: {
      src: enterpriseCheque,
      alt: 'A framed $1,000 check, our first enterprise payment',
      caption: 'I cheekily framed our first ever "Enterprise" cheque.',
    },
    logosLabel: 'Enterprise customers I marketed to',
    logos: ['KPMG', 'Siemens', 'PwC', 'Deloitte', 'Accenture', 'SAP', 'Cisco', 'Swiss Re', 'Best Western', 'Mitsubishi', 'Baker Hughes'],
    bg: 'bg-white',
  },
  {
    id: 'approach',
    tag: 'Shipping AI',
    headline: "I've been shipping AI products since 2018",
    accentWord: 'AI products',
    body: "Over 7 years at Lumen5 I shipped AI-powered features from concept to launch. I introduced an LLM-powered script builder that hit 1.7x its adoption target. I led the transition to AI voiceover videos (powered by ElevenLabs) that boosted paid purchases by 40%. I've sat in the discovery calls, argued the technical trade-offs, and watched the launch metrics. That's why I can write product copy that actually holds up.",
    techLogos: true,
    bg: 'bg-white',
  },
]

// Final CTA — rendered after the FAQ, just above the footer (matches the full-page design).
export const contactSection = {
  id: 'contact',
  headline: "Let's talk",
  body: "I'm looking for a place where I can combine my product and marketing experience around a mission I care about. Miovision sits right at the intersection of cities, mobility, and AI. That's exactly where I do my best work. I'd love to be the person telling that story.",
  links: [
    { label: 'Email me', url: 'mailto:hello@lookbothways.fyi', primary: true },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/kaegandonnelly' },
  ],
  bg: 'bg-white',
}
