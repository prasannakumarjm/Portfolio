import {
  Award,
  Boxes,
  BriefcaseBusiness,
  Code2,
  Database,
  Gauge,
  Github,
  Globe2,
  Layers3,
  Mail,
  MapPin,
  Network,
  ServerCog,
  ShieldCheck,
  TerminalSquare,
  Trophy,
  Users,
  Workflow,
} from 'lucide-vue-next'

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export const stats = [
  { label: 'Years Experience', value: 10, suffix: '+', icon: BriefcaseBusiness },
  { label: 'Enterprise Projects', value: 28, suffix: '+', icon: Layers3 },
  { label: 'Team Members Led', value: 14, suffix: '+', icon: Users },
]

export const skillGroups = [
  {
    title: 'Backend',
    icon: ServerCog,
    tone: 'from-cyan-500 to-blue-600',
    skills: [
      { name: 'C#', level: 94 },
      { name: '.NET Core', level: 96 },
      { name: 'ASP.NET MVC', level: 90 },
      { name: 'REST APIs', level: 92 },
    ],
  },
  {
    title: 'Frontend',
    icon: Code2,
    tone: 'from-emerald-500 to-teal-600',
    skills: [
      { name: 'Vue.js', level: 84 },
      { name: 'JavaScript', level: 86 },
      { name: 'Responsive UI', level: 82 },
    ],
  },
  {
    title: 'Databases',
    icon: Database,
    tone: 'from-amber-400 to-orange-600',
    skills: [
      { name: 'PostgreSQL', level: 88 },
      { name: 'SQL Server', level: 91 },
      { name: 'MySQL', level: 84 },
    ],
  },
  {
    title: 'DevOps',
    icon: Workflow,
    tone: 'from-violet-500 to-fuchsia-600',
    skills: [
      { name: 'Docker', level: 82 },
      { name: 'CI/CD', level: 86 },
      { name: 'Drone', level: 80 },
    ],
  },
  {
    title: 'Tools',
    icon: TerminalSquare,
    tone: 'from-rose-500 to-red-600',
    skills: [
      { name: 'Redis', level: 79 },
      { name: 'Nginx', level: 80 },
      { name: 'IIS', level: 88 },
    ],
  },
]

export const roles = [
  {
    title: 'Project Manager',
    company: 'Descpro Technology Pvt. Ltd.',
    period: '2022-Present',
    summary: 'Leading delivery for scalable enterprise products with tight coordination across product, engineering, QA, and infrastructure teams.',
    details: [
      'Own planning, sprint execution, stakeholder updates, and release readiness for business-critical systems.',
      'Guide architecture decisions across .NET Core services, databases, cloud hosting, and deployment pipelines.',
      'Mentor engineers while improving estimation, code quality, and production support practices.',
    ],
  },
  {
    title: 'Technology Lead',
    company: 'Infosys',
    period: '2019-2022',
    summary: 'Led engineering streams for enterprise modernization programs and high-availability application delivery.',
    details: [
      'Designed service integrations, API layers, and database workflows for complex client platforms.',
      'Improved build and deployment reliability with structured CI/CD practices and automation.',
      'Recognized with Ninja Digital Award and INSTA Award for delivery excellence.',
    ],
  },
  {
    title: 'Sr Software Programmer',
    company: 'Descpro',
    period: '2014-2019',
    summary: 'Built robust business applications across backend, database, web UI, and deployment layers.',
    details: [
      'Developed ASP.NET MVC and SQL-backed applications used in operational enterprise environments.',
      'Created secure REST APIs and optimized database queries for performance-sensitive workflows.',
      'Collaborated directly with clients to translate business needs into maintainable features.',
    ],
  },
]

export const projects = [
  {
    title: 'Cloud Data Pipeline System',
    image: 'from-cyan-500 via-blue-600 to-indigo-700',
    icon: Network,
    summary: 'A resilient pipeline for ingesting, validating, transforming, and monitoring enterprise data at scale.',
    stack: ['.NET Core', 'PostgreSQL', 'Docker', 'Drone'],
  },
  {
    title: 'Enterprise Resource Management Platform',
    image: 'from-emerald-500 via-teal-600 to-slate-800',
    icon: Boxes,
    summary: 'Role-based operations suite with approvals, reporting, audit trails, and modular service boundaries.',
    stack: ['ASP.NET MVC', 'SQL Server', 'Vue.js', 'IIS'],
  },
  {
    title: 'High-Performance API System',
    image: 'from-amber-400 via-orange-600 to-red-700',
    icon: Gauge,
    summary: 'Low-latency API platform designed for high request volume, caching, observability, and reliability.',
    stack: ['C#', 'REST APIs', 'Redis', 'Nginx'],
  },
]

export const achievements = [
  { title: 'Ninja Digital Award', company: 'Infosys', icon: Trophy, description: 'Recognized for strong digital delivery and technical ownership.' },
  { title: 'INSTA Award', company: 'Infosys', icon: Award, description: 'Awarded for consistent delivery impact and team contribution.' },
  { title: 'Top Performer', company: 'Descpro', icon: ShieldCheck, description: 'Honored for dependable execution across enterprise programs.' },
]

export const contactLinks = [
  { label: 'Palakkad, Kerala, India', href: '#contact', icon: MapPin },
  { label: 'prasannakumarjj@gmail.com', href: 'mailto:prasannakumarjj@gmail.com', icon: Mail },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: Globe2 },
  { label: 'GitHub', href: 'https://github.com/', icon: Github },
]
