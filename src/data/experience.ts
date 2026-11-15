export type ExperienceItem = {
  company: string;
  role: string;
  department: string;
  period: string;
  type: 'employment' | 'internship';
  responsibilities: string[];
  achievements: string[];
  logoText: string;
};

export const experienceData: ExperienceItem[] = [
  {
    company: 'LankaBangla Finance PLC.',
    role: 'Assistant Relationship Manager (Senior Officer)',
    department: 'Strategic Alliance',
    period: '9 September 2024 – Present',
    type: 'employment',
    logoText: 'LB',
    responsibilities: [
      'Develop and maintain strategic partnerships with merchants and value-chain stakeholders.',
      'Support relationship management and business development initiatives for financial and retail growth.',
      'Coordinate with internal teams to align card and merchant programs with commercial objectives.'
    ],
    achievements: [
      'Strengthening strategic alliance initiatives for sustainable business development.',
      'Contributing to institutional partnership quality and merchant relationship growth.'
    ]
  },
  {
    company: 'NRB Bank Limited',
    role: 'Incharge (Junior Officer)',
    department: 'Strategic Alliance Team',
    period: '31 August 2023 – 8 September 2024',
    type: 'employment',
    logoText: 'NRB',
    responsibilities: [
      'Managed strategic alliance activities and merchant relationship efforts across partnership portfolios.',
      'Worked closely with internal stakeholders to improve commercial engagement and partner performance.',
      'Supported campaign planning and merchant-focused business development priorities.'
    ],
    achievements: [
      'Contributed to partnership development and merchant acquisition strategies in a competitive banking environment.',
      'Supported business connectivity through effective partner coordination and campaign follow-up.'
    ]
  },
  {
    company: 'LankaBangla Finance PLC.',
    role: 'Officer',
    department: 'Strategic Business Alliance, Card Centre',
    period: '1 January 2022 – 30 August 2023',
    type: 'employment',
    logoText: 'LB',
    responsibilities: [
      'Established and nurtured merchant partnerships for discount and promotional programs.',
      'Negotiated commercial offers and assessed partner performance using transaction and spending data.',
      'Worked with card operations, marketing, and call-center teams to deliver campaign execution.'
    ],
    achievements: [
      'Supported merchant onboarding and campaign management across multiple retail and service segments.',
      'Helped maintain partnership performance through data-driven monitoring and merchant engagement.'
    ]
  },
  {
    company: 'LankaBangla Finance PLC.',
    role: 'Team Leader',
    department: 'Strategic Business Alliance, Card Centre',
    period: '1 August 2016 – 31 December 2021',
    type: 'employment',
    logoText: 'LB',
    responsibilities: [
      'Led merchant acquisition and strategic partnership development across high-value categories.',
      'Negotiated exclusive discount, cashback, rewards, BOGO, and 0% EMI offers for card members.',
      'Monitored campaign delivery, merchant performance, branding, and customer communication initiatives.'
    ],
    achievements: [
      'Signed more than 400 discount partners and approximately 200 EMI partners between 2016 and 2026.',
      'Delivered merchant follow-up, branding support, campaign execution, and business target achievement.'
    ]
  },
  {
    company: 'Bangladesh Bank',
    role: 'Intern',
    department: 'Accounts & Budgeting Department',
    period: 'July 2015 – September 2015',
    type: 'internship',
    logoText: 'BB',
    responsibilities: [
      'Supported departmental work in accounts and budgeting processes within the central bank framework.',
      'Learned about financial administration and institutional processes in a public financial environment.'
    ],
    achievements: [
      'Gained foundational exposure to the central bank environment and budgeting practices in Bangladesh.'
    ]
  }
];
