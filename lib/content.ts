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

export const services = [
  {
    title: "Studios Rental",
    desc: "Fully-equipped gaming and tech broadcasting studios available for entertainment and broadcasting needs.",
  },
  {
    title: "Production",
    desc: "Refined audio and video production — shooting, recording, and editing to amplify your brand message.",
  },
  {
    title: "Broadcasting Services",
    desc: "High-end broadcast production tailored to your needs, built on years of variant production experience.",
  },
  {
    title: "Gaming Hardware Rental",
    desc: "Gamer-approved equipment rentals for personal use, esports events, and tournaments — PCs, consoles, VR, and peripherals.",
  },
  {
    title: "Esports",
    desc: "Sustainable league ecosystems, rule authoring, and tournament operations with high competitive integrity.",
  },
  {
    title: "Consultation",
    desc: "Strategic advice and expertise to inform your brand's message, story, and decision-making.",
  },
  {
    title: "Digital Content Creation",
    desc: "Topic ideation and written or visual content creation that resonates with your audience.",
  },
  {
    title: "Media Planning & Buying",
    desc: "Bespoke media planning across the MENA region — audience research, targeting, and campaign strategy.",
  },
  {
    title: "Event Coverage",
    desc: "Direct your audience to actively follow event segments and details through all agreed channels.",
  },
  {
    title: "Influencer Marketing",
    desc: "Leveraging our database and influencer network to extend your message to a broad, engaged audience.",
  },
  {
    title: "Social Media Management",
    desc: "Creating, publishing, and analyzing content while engaging your community across platforms in Arabic.",
  },
  {
    title: "Gaming Event Activation",
    desc: "Interactive experiences at major esports events, trade shows, and gaming conventions.",
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