import { Channel, Question, ResultContent } from './types';

// Section 1: Avatar & Offer Clarity
// Section 2: Channel Utilization & Diversification
// Section 3: Lead Magnet & Funnel Assets
// Section 4: Nurture & Automation Systems

export const QUESTIONS: Question[] = [
  // --- Section 1: Avatar & Offer Clarity ---
  {
    id: 's1-q1',
    text: 'Do you have a clearly defined ideal customer profile written down?',
    sectionTitle: 'Avatar & Offer Clarity',
    sectionIndex: 1,
    channels: [Channel.ContentMarketing, Channel.PaidAds, Channel.SEO],
  },
  {
    id: 's1-q2',
    text: 'Do you know the top 3 problems your ideal customer is actively trying to solve?',
    sectionTitle: 'Avatar & Offer Clarity',
    sectionIndex: 1,
    channels: [Channel.ContentMarketing, Channel.SEO],
  },
  {
    id: 's1-q3',
    text: 'Is your current offer tailored specifically to that ideal customer and their needs?',
    sectionTitle: 'Avatar & Offer Clarity',
    sectionIndex: 1,
    channels: [Channel.PaidAds, Channel.Referrals],
  },
  {
    id: 's1-q4',
    text: 'Does your website or social media clearly explain what you do and who it’s for?',
    sectionTitle: 'Avatar & Offer Clarity',
    sectionIndex: 1,
    channels: [Channel.SEO, Channel.ContentMarketing],
  },
  {
    id: 's1-q5',
    text: 'Do you regularly update your messaging based on real customer feedback or behavior?',
    sectionTitle: 'Avatar & Offer Clarity',
    sectionIndex: 1,
    channels: [Channel.ContentMarketing, Channel.Referrals],
  },

  // --- Section 2: Channel Utilization & Diversification ---
  {
    id: 's2-q1',
    text: 'Are you currently generating leads from at least 2 different marketing channels? (Cold, Warm, Social Media, Paid Ads)',
    sectionTitle: 'Channel Utilization & Diversification',
    sectionIndex: 2,
    channels: [Channel.PaidAds, Channel.ContentMarketing, Channel.Partnerships],
  },
  {
    id: 's2-q2',
    text: 'Do you consistently use cold outreach (DMs, emails, calls) to generate leads?',
    sectionTitle: 'Channel Utilization & Diversification',
    sectionIndex: 2,
    channels: [Channel.Partnerships, Channel.Referrals],
  },
  {
    id: 's2-q3',
    text: 'Do you receive leads from warm sources like referrals, affiliates, or past clients?',
    sectionTitle: 'Channel Utilization & Diversification',
    sectionIndex: 2,
    channels: [Channel.Referrals],
  },
  {
    id: 's2-q4',
    text: 'Are you posting free content on social media to attract leads weekly?',
    sectionTitle: 'Channel Utilization & Diversification',
    sectionIndex: 2,
    channels: [Channel.ContentMarketing],
  },
  {
    id: 's2-q5',
    text: 'Are you running paid ads (Google, Meta, etc.) to generate leads?',
    sectionTitle: 'Channel Utilization & Diversification',
    sectionIndex: 2,
    channels: [Channel.PaidAds],
  },

  // --- Section 3: Lead Magnet & Funnel Assets ---
  {
    id: 's3-q1',
    text: 'Do you have at least one free lead magnet to attract potential clients?',
    sectionTitle: 'Lead Magnet & Funnel Assets',
    sectionIndex: 3,
    channels: [Channel.ContentMarketing, Channel.SEO],
  },
  {
    id: 's3-q2',
    text: 'Is your lead magnet clearly connected to your main offer?',
    sectionTitle: 'Lead Magnet & Funnel Assets',
    sectionIndex: 3,
    channels: [Channel.PaidAds, Channel.ContentMarketing],
  },
  {
    id: 's3-q3',
    text: 'Do you have a dedicated landing page where people can opt in for your lead magnet?',
    sectionTitle: 'Lead Magnet & Funnel Assets',
    sectionIndex: 3,
    channels: [Channel.PaidAds, Channel.SEO],
  },
  {
    id: 's3-q4',
    text: 'Does your lead magnet consistently generate new email leads?',
    sectionTitle: 'Lead Magnet & Funnel Assets',
    sectionIndex: 3,
    channels: [Channel.ContentMarketing, Channel.SEO],
  },
  {
    id: 's3-q5',
    text: 'Are you actively promoting your lead magnet on at least one marketing channel?',
    sectionTitle: 'Lead Magnet & Funnel Assets',
    sectionIndex: 3,
    channels: [Channel.ContentMarketing, Channel.Partnerships],
  },

  // --- Section 4: Nurture & Automation Systems ---
  {
    id: 's4-q1',
    text: 'Do you have automated emails that go out after someone opts into your lead magnet?',
    sectionTitle: 'Nurture & Automation Systems',
    sectionIndex: 4,
    channels: [Channel.ContentMarketing, Channel.Referrals],
  },
  {
    id: 's4-q2',
    text: 'Do you send regular follow-up emails or content to stay top-of-mind with leads?',
    sectionTitle: 'Nurture & Automation Systems',
    sectionIndex: 4,
    channels: [Channel.ContentMarketing, Channel.Referrals],
  },
  {
    id: 's4-q3',
    text: 'Is your CRM or email tool set up to track and segment lead activity?',
    sectionTitle: 'Nurture & Automation Systems',
    sectionIndex: 4,
    channels: [Channel.PaidAds, Channel.Partnerships],
  },
  {
    id: 's4-q4',
    text: 'Do you send reminders for any booked calls or consults automatically?',
    sectionTitle: 'Nurture & Automation Systems',
    sectionIndex: 4,
    channels: [Channel.PaidAds, Channel.Referrals],
  },
  {
    id: 's4-q5',
    text: 'Do you have a system in place to re-engage cold or inactive leads?',
    sectionTitle: 'Nurture & Automation Systems',
    sectionIndex: 4,
    channels: [Channel.Referrals, Channel.Partnerships],
  },
];

export const RESULTS: Record<Channel, ResultContent> = {
  [Channel.ContentMarketing]: {
    identity: "The Content Commander",
    headline: "You have a voice. Now let's amplify it.",
    insight: "You understand the power of value-driven marketing. Your instincts to educate and engage are your biggest asset, setting the stage for long-term authority.",
    hiddenProblem: "Creating content without a capture system is just free entertainment. You might be getting likes, but are they turning into leads on autopilot?",
    quickWin: "Add a direct Call-to-Action (CTA) to your top-performing post that leads specifically to a lead magnet, not just your home page.",
    aiAngle: "AI agents can instantly turn your comments section into a lead capture funnel, replying to interested prospects 24/7 while you sleep."
  },
  [Channel.PaidAds]: {
    identity: "The Paid Traffic Pro",
    headline: "You're ready to scale. Let's fix the leaks.",
    insight: "You're willing to invest to grow, which puts you ahead of 90% of business owners. You understand that traffic is a commodity you can buy.",
    hiddenProblem: "Driving paid traffic to a manual follow-up process burns cash. If you can't respond instantly to every lead, your ROI is half what it should be.",
    quickWin: "Audit your 'Speed to Lead'. If it's over 5 minutes, automate an SMS acknowledgment immediately after a form fill.",
    aiAngle: "Stop chasing leads manually. An AI Voice Agent can call your paid leads within 30 seconds of submission to book appointments automatically."
  },
  [Channel.SEO]: {
    identity: "The Search Sovereign",
    headline: "You're building an empire on solid ground.",
    insight: "You value sustainability and long-term assets. You're not looking for a quick fix; you're building a digital storefront that works for years.",
    hiddenProblem: "High traffic with low conversion is the silent killer of SEO. Ranking #1 is useless if visitors don't feel an immediate compulsion to engage.",
    quickWin: "Install a simple 'exit-intent' popup on your highest traffic blog post offering a specific checklist related to that article.",
    aiAngle: "Turn passive readers into active conversations. An embedded AI chat agent can proactively ask visitors questions based on the page they are reading."
  },
  [Channel.Referrals]: {
    identity: "The Trust Catalyst",
    headline: "Your reputation is your goldmine.",
    insight: "You deliver excellence, and your network knows it. Growing via word-of-mouth creates the highest quality customers and strongest retention.",
    hiddenProblem: " relying solely on referrals is risky—it's unpredictable. You lack a control knob to turn up volume when you need more business.",
    quickWin: "Create a simple 'Referral Script' email template and send it to your top 5 happiest clients from the last 6 months.",
    aiAngle: "Automate the ask. An AI system can detect positive sentiment in client communications and automatically trigger a referral request workflow."
  },
  [Channel.Partnerships]: {
    identity: "The Network Connector",
    headline: "You win by helping others win.",
    insight: "You understand leverage. By tapping into other people's audiences, you bypass the cold start problem and gain instant trust.",
    hiddenProblem: "Partnerships are often high-effort to maintain. If you are manually managing every relationship, you become the bottleneck to your own growth.",
    quickWin: "Identify one complementary business and offer a 'guest masterclass' to their audience in exchange for their email list.",
    aiAngle: "Use AI to nurture your partner channels. Automated workflows can keep partners updated on their referrals' status without you writing a single email."
  }
};