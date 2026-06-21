// lib/content.ts
import type { IconKey } from "./icons";

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "Partners", href: "#partners" },
  { label: "Contact", href: "#contact" },
];

export const heroStats = [
  { value: "10+", label: "Years of Experience" },
  { value: "48M+", label: "Monthly Reach" },
  { value: "76+", label: "Employees" },
  { value: "80+", label: "International Clients" },
];

export const aboutHighlights = [
  {
    title: "Content & Strategy",
    desc: "Custom content, creative digital strategies, and tailored campaigns for leading tech and gaming brands across the region.",
  },
  {
    title: "Esports Leadership",
    desc: "The leading esports entity in Egypt — tournament planning, live broadcasting, and end-to-end consultancy services.",
  },
  {
    title: "AHW Store Ecosystem",
    desc: "A dedicated e-commerce platform for system integration, custom PC builds, hardware, and gaming accessories.",
  },
];

export const ecosystemBrands = [
  {
    name: "Arabhardware",
    description:
      "The largest tech & gaming media outlet in the MENA region — full content marketing solutions since day one.",
    href: "https://arabhardware.net",
    isCenter: true,
  },
  {
    name: "AHW Store",
    description:
      "#1 online hardware store in Egypt — 10,000+ clients and 20M EGP in sales within 10 months.",
    href: "https://ahw.store",
    isCenter: false,
  },
  {
    name: "AHW Esports",
    description:
      "Premier esports news and tournament coverage across the MENA region.",
    href: "#",
    isCenter: false,
  },
  {
    name: "ArGamez",
    description:
      "The latest gaming news, reviews, and exclusive gameplay coverage.",
    href: "#",
    isCenter: false,
  },
  {
    name: "ARTech",
    description:
      "Phone and tech reviews, news, and app recommendations.",
    href: "#",
    isCenter: false,
  },
];

export const subscriberStats: {
  label: string;
  value: number;
  suffix: string;
  icon: IconKey;
}[] = [
  { label: "YouTube Subscribers", value: 975000, suffix: "+", icon: "youtube" },
  { label: "Facebook Followers", value: 953000, suffix: "+", icon: "facebook" },
  { label: "Twitter / X Followers", value: 350000, suffix: "+", icon: "twitter" },
  { label: "Instagram Followers", value: 132000, suffix: "+", icon: "instagram" },
  { label: "TikTok Followers", value: 209500, suffix: "+", icon: "tiktok" },
  { label: "Monthly Website Visitors", value: 500000, suffix: "+", icon: "globe" },
];

export interface Service {
  slug: string;
  title: string;
  desc: string;
  /** Longer-form intro used on the service detail page. */
  intro: string;
  /** What's included — shown as a feature list on the detail page. */
  highlights: string[];
}

export const services: Service[] = [
  {
    slug: "studios-rental",
    title: "Studios Rental",
    desc: "Fully-equipped gaming and tech broadcasting studios available for entertainment and broadcasting needs.",
    intro:
      "Step into broadcast-ready spaces purpose-built for tech and gaming content — lighting, acoustics, and camera setups handled, so your team can focus on what airs.",
    highlights: [
      "Multiple studio layouts for podcasts, reviews, and live shows",
      "Pre-configured lighting and acoustic treatment",
      "On-site technical support during your booking",
      "Flexible hourly and day-rate packages",
    ],
  },
  {
    slug: "production",
    title: "Production",
    desc: "Refined audio and video production — shooting, recording, and editing to amplify your brand message.",
    intro:
      "From concept to final cut, our production team shapes raw footage and sound into content that holds attention and carries your brand's voice consistently.",
    highlights: [
      "Full-cycle video and audio production",
      "Scriptwriting and shot planning support",
      "Professional editing, color, and sound mixing",
      "Quick-turnaround formats for social and long-form alike",
    ],
  },
  {
    slug: "broadcasting-services",
    title: "Broadcasting Services",
    desc: "High-end broadcast production tailored to your needs, built on years of variant production experience.",
    intro:
      "We run live broadcasts the way audiences expect from a major network — multi-camera switching, real-time graphics, and a crew that's done this for years.",
    highlights: [
      "Multi-camera live production and switching",
      "Real-time graphics and lower-thirds overlays",
      "Streaming to multiple platforms simultaneously",
      "Experienced crew for events of any scale",
    ],
  },
  {
    slug: "gaming-hardware-rental",
    title: "Gaming Hardware Rental",
    desc: "Gamer-approved equipment rentals for personal use, esports events, and tournaments — PCs, consoles, VR, and peripherals.",
    intro:
      "Tournament-grade PCs, consoles, VR rigs, and peripherals delivered, set up, and supported — built for the demands of competitive events and large activations.",
    highlights: [
      "High-performance gaming PCs and consoles",
      "VR setups and competitive peripherals",
      "Delivery, setup, and on-site technical support",
      "Scalable from single stations to full tournament floors",
    ],
  },
  {
    slug: "esports",
    title: "Esports",
    desc: "Sustainable league ecosystems, rule authoring, and tournament operations with high competitive integrity.",
    intro:
      "As the leading esports entity in Egypt, we build leagues that last — from rulebooks and competitive structure to the live operations that keep tournaments fair and watchable.",
    highlights: [
      "League and tournament rule authoring",
      "End-to-end tournament operations",
      "Competitive integrity and anti-cheat oversight",
      "Broadcast-ready event production",
    ],
  },
  {
    slug: "consultation",
    title: "Consultation",
    desc: "Strategic advice and expertise to inform your brand's message, story, and decision-making.",
    intro:
      "Ten years of regional media experience, distilled into direct strategic guidance — so your brand's next move is grounded in what actually works in this market.",
    highlights: [
      "Brand positioning and messaging strategy",
      "Market and competitor insight specific to MENA",
      "Campaign planning and channel strategy",
      "Ongoing advisory engagements available",
    ],
  },
  {
    slug: "digital-content-creation",
    title: "Digital Content Creation",
    desc: "Topic ideation and written or visual content creation that resonates with your audience.",
    intro:
      "We research what your audience actually wants to read and watch, then produce the written and visual content that earns their attention — consistently, not just once.",
    highlights: [
      "Audience-driven topic research and ideation",
      "Written content in Arabic and English",
      "Visual and short-form video content",
      "Editorial calendars built around your launches",
    ],
  },
  {
    slug: "media-planning-buying",
    title: "Media Planning & Buying",
    desc: "Bespoke media planning across the MENA region — audience research, targeting, and campaign strategy.",
    intro:
      "Every media dollar placed with intent — built on regional audience research, precise targeting, and campaign structures designed around measurable outcomes.",
    highlights: [
      "Audience research across MENA & GCC markets",
      "Cross-platform media buying and negotiation",
      "Performance tracking and optimization",
      "Budget planning aligned to campaign goals",
    ],
  },
  {
    slug: "event-coverage",
    title: "Event Coverage",
    desc: "Direct your audience to actively follow event segments and details through all agreed channels.",
    intro:
      "We document your event as it happens and push it out live across the channels your audience already follows — so the moment isn't lost once the doors close.",
    highlights: [
      "Live coverage across social and broadcast channels",
      "Photography and videography teams on-site",
      "Real-time updates and audience engagement",
      "Post-event recap content and highlights",
    ],
  },
  {
    slug: "influencer-marketing",
    title: "Influencer Marketing",
    desc: "Leveraging our database and influencer network to extend your message to a broad, engaged audience.",
    intro:
      "Access a vetted network of tech and gaming creators across the region, matched to your brand and managed end-to-end so the message stays on-point.",
    highlights: [
      "Vetted influencer database across MENA",
      "Creator matching based on brand fit",
      "Campaign management and performance reporting",
      "Long-term ambassador programs available",
    ],
  },
  {
    slug: "social-media-management",
    title: "Social Media Management",
    desc: "Creating, publishing, and analyzing content while engaging your community across platforms in Arabic.",
    intro:
      "Day-to-day community management that actually sounds like your brand — content creation, publishing, and audience engagement handled natively in Arabic.",
    highlights: [
      "Native Arabic content creation and community management",
      "Consistent publishing schedules across platforms",
      "Direct audience engagement and moderation",
      "Monthly performance analytics and reporting",
    ],
  },
  {
    slug: "gaming-event-activation",
    title: "Gaming Event Activation",
    desc: "Interactive experiences at major esports events, trade shows, and gaming conventions.",
    intro:
      "We design hands-on activations for esports events, trade shows, and gaming conventions that give attendees a reason to stop, play, and remember your brand.",
    highlights: [
      "Custom interactive booth and activation design",
      "On-site staffing and event operations",
      "Integration with esports and gaming convention floors",
      "Branded engagement experiences for attendees",
    ],
  },
];

export const partners = [
  "AOC",
  "SEAGATE",
  "KINGSTON",
  "GIGABYTE",
  "BENQ",
  "QNAP",
  "TRANSCEND",
  "HIKVISION",
  "SYNOLOGY",
  "WONDERSHARE",
  "THERMALTAKE",
  "COOLER MASTER",
  "WESTERN DIGITAL",
  "DEEP COOL",
  "AMD",
  "MSI",
  "ASROCK",
  "ADATA",
  "CORSAIR",
  "HYPERX",
  "NZXT",
  "NIKON",
  "CD PROJEKT RED",
  "BLIZZARD",
  "LOGITECH",
  "ASUS",
  "LENOVO",
  "ACER",
  "NVIDIA",
  "EPIC GAMES",
  "SONY",
  "UBISOFT",
  "TENCENT",
  "ACTIVISION",
  "EA SPORTS",
  "GOOGLE",
  "PLAYSTATION",
  "RIOT GAMES",
];

export const contactInfo = {
  eyebrow: "Get in touch",
  title: "Let's build something the industry talks about.",
  desc: "Tell us about your brand, your audience, and what you're trying to launch — our team replies within one business day.",
  email: "info@arabhardware.net",
  locations: [
    { city: "Cairo, Egypt", detail: "Regional HQ & studios" },
    { city: "Riyadh, KSA", detail: "GCC operations" },
  ],
};

export const footerLinks = {
  menu: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Ecosystem", href: "#ecosystem" },
    { label: "Partners", href: "#partners" },
    { label: "Contact", href: "#contact" },
  ],
  social: [
    { label: "Facebook", href: "https://www.facebook.com/arabhardware", icon: "facebook" },
    { label: "X / Twitter", href: "https://x.com/arabhardware", icon: "twitter" },
    { label: "YouTube", href: "https://www.youtube.com/user/ahardware", icon: "youtube" },
    { label: "Instagram", href: "https://www.instagram.com/arabhardware", icon: "instagram" },
    { label: "TikTok", href: "https://www.tiktok.com/@arabhardware", icon: "tiktok" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/577649", icon: "linkedin" },
  ] satisfies { label: string; href: string; icon: IconKey }[],
};