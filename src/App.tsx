import { useState } from 'react';
import {
  Shield,
  Layers,
  Globe,
  Key,
  Share2,
  Edit3,
  Trash2,
  ChevronRight,
  CheckCircle2,
  Clock,
  Calendar
} from 'lucide-react';

interface Topic {
  id: string;
  shortTitle: string;
  subTitle: string;
  title: string;
  tags: string[];
  icon: React.ComponentType<any>;
  iconBg: string;
  iconColor: string;
  imageAlt: string;
  imageNum: number;
  metadata: {
    created: string;
    modified: string;
    xp: number;
    difficulty: string;
  };
  content: {
    lessonsLearnedTitle: string;
    lessonsLearnedText: string;
    takeawaysTitle: string;
    takeawaysList: {
      bold: string;
      text: string;
      subText?: string;
    }[];
  };
}

const TOPICS_DATA: Topic[] = [
  {
    id: 'intruder-bruteforce',
    shortTitle: 'Intruder & Brute Force',
    subTitle: 'Cyber Security Basics',
    title: 'Understanding Cyber Intruders & Brute Force Attacks',
    tags: ['Cyber Security', 'Intruder', 'Burp Suite'],
    icon: Shield,
    iconBg: 'bg-indigo-50 dark:bg-indigo-950/40',
    iconColor: 'text-indigo-600 dark:text-indigo-400',
    imageAlt: 'Image 1: Bruteforce attack use to guess the password of an user',
    imageNum: 1,
    metadata: {
      created: 'July 22, 2026 — 10:42 AM',
      modified: '2 hours ago',
      xp: 150,
      difficulty: 'Intermediate'
    },
    content: {
      lessonsLearnedTitle: 'Who is an Intruder & Brute Force Basics',
      lessonsLearnedText: 'An intruder is an unauthorized user or malicious entity attempting to gain access to a computer network or system. In cybersecurity, intruders are designed to scan for software vulnerabilities to help organizations stop breaches before they infect an attack.\n\nA brute force attack is a trial-and-error method used by hackers to guess login credentials, encryption keys, or hidden URLs. Instead of exploiting a software flaw, the attacker uses automated software to guess thousands or millions of combinations until they find the correct one.',
      takeawaysTitle: 'Why does Brute Force Attack Fail?',
      takeawaysList: [
        {
          bold: 'Multi-Factor Authentication (MFA)',
          text: 'Requires attackers to have more than just a password to gain access, neutralizing single credential compromises.'
        },
        {
          bold: 'Account Lockout & Throttling',
          text: 'Temporarily locks the account or progressively slows down login attempts after a set number of failed tries.'
        },
        {
          bold: 'CAPTCHA',
          text: 'Requires proof of human presence, successfully neutralizing automated bot and script attempts.'
        },
        {
          bold: 'Strong Password Requirements',
          text: 'Forces users to create long, complex, and unique passwords to drastically increase the time needed to crack them.'
        }
      ]
    }
  },
  {
    id: 'payload-types',
    shortTitle: 'Payload Positions',
    subTitle: 'Attack Vector Configurations',
    title: 'Exploiting Payload Positions and Vulnerabilities',
    tags: ['Vulnerability', 'Payloads', 'Burp Suite'],
    icon: Layers,
    iconBg: 'bg-emerald-50 dark:bg-emerald-950/40',
    iconColor: 'text-emerald-600 dark:text-emerald-400',
    imageAlt: 'Image 3: Selection of Scan Types and Payloads in Burp Suite',
    imageNum: 3,
    metadata: {
      created: 'July 22, 2026 — 11:15 AM',
      modified: '1 hour ago',
      xp: 200,
      difficulty: 'Advanced'
    },
    content: {
      lessonsLearnedTitle: 'System Vulnerabilities Faced by Brute Force',
      lessonsLearnedText: 'Systems are vulnerable to brute force when they permit unlimited attempts, have weak policies, or exhibit credential leaks. Specifically:\n1. Lack of Rate Limiting & Account Lockouts: If a server does not temporarily lock accounts, bots can test thousands of credentials per minute.\n2. Weak Password Policies: Sequential/short credentials (e.g., "12345") are guessed in milliseconds.\n3. Password Reuse & Credential Stuffing: Reusing credentials across sites allows attackers to use credential leaks to compromise other platforms.',
      takeawaysTitle: 'Payload Attack Types in Burp Suite',
      takeawaysList: [
        {
          bold: 'Sniper Attack',
          text: 'Tests one position at a time. It takes a single list of payloads and injects them into the first position, then moves to the second, and so on.',
          subText: 'Best for: Fuzzing individual parameters for XSS or SQL Injection.'
        },
        {
          bold: 'Battering Ram',
          text: 'Uses a single list of payloads and injects the current payload into all positions simultaneously.',
          subText: 'Best for: Testing if a system breaks when multiple inputs (username & password) are exactly the same.'
        },
        {
          bold: 'Pitchfork',
          text: 'Uses multiple payload lists and iterates through them simultaneously, stopping when the shortest list runs out.',
          subText: 'Best for: Testing linked data pairs (like known username-password combinations).'
        },
        {
          bold: 'Cluster Bomb',
          text: 'Tests every possible combination of multiple payload lists (Cartesian product).',
          subText: 'Best for: True brute-forcing where username and password pairs are completely unknown.'
        }
      ]
    }
  },
  {
    id: 'web-crawling',
    shortTitle: 'Web Site Crawling',
    subTitle: 'Reconnaissance & Mapping',
    title: 'Mapping Attack Surfaces via Web Site Crawling',
    tags: ['Reconnaissance', 'Crawling', 'Spidering'],
    icon: Globe,
    iconBg: 'bg-amber-50 dark:bg-amber-950/40',
    iconColor: 'text-amber-600 dark:text-amber-400',
    imageAlt: 'Image 2: OWASP Juice shop website crawling',
    imageNum: 2,
    metadata: {
      created: 'July 22, 2026',
      modified: 'July 22, 2026',
      xp: 180,
      difficulty: 'Intermediate'
    },
    content: {
      lessonsLearnedTitle: 'What is Website Crawling & Why is it Useful?',
      lessonsLearnedText: 'Website crawling (also called web spidering) is an automated process that uses software bots to systematically browse the Internet to read, index, and map website content.\n\nIt is useful for Attack Surface Discovery (finding hidden links, unlinked pages, API endpoints, administrative panels) and Speed & Efficiency (crawlers automate navigating deep site hierarchies in minutes, cataloging every request).',
      takeawaysTitle: 'Unsecured Website Risks & Crawl Types',
      takeawaysList: [
        {
          bold: 'Unlinked Public Pages',
          text: 'Developers forget to lock down or unindex pages (e.g. /blackfriday-sale-2025, /index-v2.html), allowing public access without login.'
        },
        {
          bold: 'Admin/Authorized Pages',
          text: 'Finding admin interfaces (/admin, /dashboard, /phpmyadmin) that could lead to full database compromise if not protected.'
        },
        {
          bold: 'Burp Suite Crawl Types',
          text: 'Crawl and Audit (maps & scans), Crawl (maps surface), and API-only scan.'
        },
        {
          bold: 'Authentication & Format Errors',
          text: 'Missing credentials reject access, while malformed requests are rejected or corrected by proxy servers for safety.'
        }
      ]
    }
  },
  {
    id: 'jwt-tokens',
    shortTitle: 'JWT Security',
    subTitle: 'Authentication & Tokens',
    title: 'Securing Stateless Sessions with JSON Web Tokens',
    tags: ['Authentication', 'JWT', 'Security'],
    icon: Key,
    iconBg: 'bg-purple-50 dark:bg-purple-950/40',
    iconColor: 'text-purple-600 dark:text-purple-400',
    imageAlt: 'Image 4: Web Token Decoder and Signatures in Burp Suite',
    imageNum: 4,
    metadata: {
      created: 'July 22, 2026 — 01:10 PM',
      modified: 'Just now',
      xp: 250,
      difficulty: 'Expert'
    },
    content: {
      lessonsLearnedTitle: 'Understanding JSON Web Tokens (JWT)',
      lessonsLearnedText: 'JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed using a secret (with HMAC) or public/private key pair (RSA/ECDSA).',
      takeawaysTitle: 'Why Do We Need to Use JWT Tokens?',
      takeawaysList: [
        {
          bold: 'No Database Lookups (Stateless Validation)',
          text: 'The server signs the token. On subsequent requests, the server only performs a quick mathematical signature check. No database or Redis queries are required.'
        },
        {
          bold: 'Perfect for Microservices & Cloud Architectures',
          text: 'JWTs are self-contained; Server A can issue the token, and Server B can verify it independently without session database lookups.'
        },
        {
          bold: 'Secure Information Exchange',
          text: 'Because JWTs can be digitally signed, the receiver can verify the signature to guarantee the sender identity and that the data was not tampered with.'
        },
        {
          bold: 'Authorization (Role-Based Access Control)',
          text: 'Tokens carry permissions (e.g. {"username": "M.L. Silva", "role": "admin"}), letting backends grant access instantly.'
        }
      ]
    }
  }
];

function App() {
  const [activeTopicId, setActiveTopicId] = useState('intruder-bruteforce');

  const activeTopic = TOPICS_DATA.find(t => t.id === activeTopicId) || TOPICS_DATA[0];
  const ActiveIcon = activeTopic.icon;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 pb-16">
      {/* Top Header Navigation */}
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="h-9 w-9 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold shadow-md shadow-indigo-200">
              I
            </div>
            <span className="font-display font-bold text-lg text-slate-900 tracking-tight">Intellect</span>
            <span className="text-slate-300 font-light">|</span>
            <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full uppercase tracking-wider">
              Security Lab
            </span>
          </div>
          <div className="text-sm font-medium text-slate-500">
            Active Study: <span className="text-slate-900 font-semibold">Burpsuite Suite Analysis</span>
          </div>
        </div>
      </header>

      {/* Main Workspace Grid */}
      <main className="max-w-6xl mx-auto px-6 mt-8">
        {/* Category Title */}
        <div className="mb-6">
          <h2 className="font-display text-xs font-bold text-indigo-600 tracking-widest uppercase mb-1">
            Learning Module
          </h2>
          <h1 className="font-display text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
            Experience with Burpsuite
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

          {/* LEFT COLUMN: Main Blog Post Content */}
          <div className="lg:col-span-2 space-y-6">

            {/* Image Placeholder Frame */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="aspect-[16/9] w-full bg-slate-900 relative flex flex-col items-center justify-center text-slate-400 p-6 border-b border-slate-200 group">
                {/* Background Grid Pattern Decoration */}
                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                <div className="relative z-10 flex flex-col items-center text-center space-y-4 max-w-md">
                  <div className="h-16 w-16 rounded-2xl bg-slate-800/80 border border-slate-700 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                    <ActiveIcon className="h-8 w-8" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-mono text-xs text-indigo-400 tracking-widest uppercase">IMAGE PLACEHOLDER</p>
                    <h3 className="font-display font-bold text-white text-lg">{activeTopic.imageAlt}</h3>
                    <p className="text-xs text-slate-500">Insert your custom screenshot for Image {activeTopic.imageNum} here.</p>
                  </div>
                </div>

                {/* Bottom decorative bar */}
                <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
              </div>
            </div>

            {/* Article Card */}
            <article className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-8">

              {/* Category & Tags Header */}
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {activeTopic.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-bold tracking-wider uppercase text-slate-600 bg-slate-100 px-2.5 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                  {activeTopic.title}
                </h2>
              </div>

              <hr className="border-slate-200" />

              {/* Lessons Learned / Primary Text Section */}
              <div className="space-y-4">
                <h3 className="font-display text-lg font-bold text-slate-900 tracking-tight flex items-center space-x-2">
                  <span className="h-6 w-1 bg-indigo-600 rounded"></span>
                  <span>Lessons Learned</span>
                </h3>
                <div className="text-slate-600 leading-relaxed text-sm sm:text-base space-y-4 whitespace-pre-line">
                  {activeTopic.content.lessonsLearnedText}
                </div>
              </div>

              {/* Key Takeaways Section */}
              <div className="space-y-5">
                <h3 className="font-display text-lg font-bold text-slate-900 tracking-tight flex items-center space-x-2">
                  <span className="h-6 w-1 bg-purple-600 rounded"></span>
                  <span>{activeTopic.content.takeawaysTitle}</span>
                </h3>

                <ul className="grid grid-cols-1 gap-4">
                  {activeTopic.content.takeawaysList.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start space-x-3 bg-slate-50 p-4 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors duration-200"
                    >
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <span className="font-semibold text-slate-900 text-sm sm:text-base block">
                          {item.bold}
                        </span>
                        <p className="text-slate-600 text-sm leading-relaxed">
                          {item.text}
                        </p>
                        {item.subText && (
                          <span className="inline-block mt-1 font-mono text-[11px] text-indigo-600 bg-indigo-50/50 px-2 py-0.5 rounded border border-indigo-100/50">
                            {item.subText}
                          </span>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <hr className="border-slate-200" />

              {/* Footer Actions */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <div className="flex items-center space-x-6">
                  <button className="flex items-center space-x-2 text-slate-500 hover:text-indigo-600 text-xs font-bold uppercase tracking-wider transition-colors duration-200">
                    <Edit3 className="h-4 w-4" />
                    <span>Edit Entry</span>
                  </button>
                  <button className="flex items-center space-x-2 text-slate-500 hover:text-indigo-600 text-xs font-bold uppercase tracking-wider transition-colors duration-200">
                    <Share2 className="h-4 w-4" />
                    <span>Share</span>
                  </button>
                </div>
                <button className="flex items-center space-x-2 text-rose-600 hover:text-rose-700 hover:bg-rose-50 px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors duration-200">
                  <Trash2 className="h-4 w-4" />
                  <span>Archive</span>
                </button>
              </div>

            </article>

          </div>

          {/* RIGHT COLUMN: Sidebar (Metadata & Content List) */}
          <div className="space-y-6 lg:sticky lg:top-24">

            {/* Metadata Card */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-6">
              <h3 className="font-display font-bold text-slate-900 text-lg tracking-tight">
                Metadata
              </h3>

              <div className="space-y-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase block">Created</span>
                  <div className="flex items-center space-x-2 text-slate-700 text-sm font-medium">
                    <Calendar className="h-4 w-4 text-slate-400" />
                    <span>{activeTopic.metadata.created}</span>
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase block">Last Modified</span>
                  <div className="flex items-center space-x-2 text-slate-700 text-sm font-medium">
                    <Clock className="h-4 w-4 text-slate-400" />
                    <span>{activeTopic.metadata.modified}</span>
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase block">Difficulty Level</span>
                  <div className="flex items-center space-x-2">
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${activeTopic.metadata.difficulty === 'Expert' ? 'bg-rose-100 text-rose-700' :
                        activeTopic.metadata.difficulty === 'Advanced' ? 'bg-amber-100 text-amber-700' :
                          'bg-sky-100 text-sky-700'
                      }`}>
                      {activeTopic.metadata.difficulty}
                    </span>
                  </div>
                </div>

                <hr className="border-slate-100" />

                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider">
                    <span className="text-slate-400">Experience Mastery</span>
                    <span className="text-emerald-600">+{activeTopic.metadata.xp} XP Gained</span>
                  </div>
                  {/* Progress Bar Container */}
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full transition-all duration-500 ease-out"
                      style={{ width: `${(activeTopic.metadata.xp / 300) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content List Card */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
              <h3 className="font-display font-bold text-slate-900 text-lg tracking-tight">
                Content
              </h3>

              <div className="space-y-2.5">
                {TOPICS_DATA.map((topic) => {
                  const TopicIcon = topic.icon;
                  const isActive = topic.id === activeTopicId;

                  return (
                    <button
                      key={topic.id}
                      onClick={() => setActiveTopicId(topic.id)}
                      className={`w-full flex items-center justify-between p-3.5 rounded-xl border text-left transition-all duration-200 group ${isActive
                          ? 'bg-slate-50 border-slate-300 shadow-sm'
                          : 'bg-white border-slate-150 hover:bg-slate-50/50 hover:border-slate-200'
                        }`}
                    >
                      <div className="flex items-center space-x-3.5">
                        <div className={`h-10 w-10 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-300 ${isActive ? 'scale-105' : 'group-hover:scale-105'
                          } ${topic.iconBg} ${topic.iconColor}`}>
                          <TopicIcon className="h-5 w-5" />
                        </div>
                        <div className="space-y-0.5">
                          <span className={`font-semibold text-sm block tracking-tight transition-colors ${isActive ? 'text-slate-900 font-bold' : 'text-slate-700 group-hover:text-slate-900'
                            }`}>
                            {topic.shortTitle}
                          </span>
                          <span className="text-[11px] text-slate-400 block font-medium">
                            {topic.subTitle}
                          </span>
                        </div>
                      </div>

                      <ChevronRight className={`h-4 w-4 text-slate-400 transition-transform duration-200 ${isActive ? 'translate-x-0.5 text-indigo-500' : 'group-hover:translate-x-0.5'
                        }`} />
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-6 mt-16 pt-8 border-t border-slate-200 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="font-display font-bold text-slate-900 text-base">Intellect</h4>
          <p className="text-slate-400 text-xs mt-1">© 2026 Intellect. Keep learning.</p>
        </div>
        <div className="flex items-center space-x-4 text-xs font-medium text-slate-500">
          <a href="#" className="hover:text-indigo-600 transition-colors">Privacy Policy</a>
          <span>•</span>
          <a href="#" className="hover:text-indigo-600 transition-colors">Terms of Service</a>
          <span>•</span>
          <a href="#" className="hover:text-indigo-600 transition-colors">Documentation</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
