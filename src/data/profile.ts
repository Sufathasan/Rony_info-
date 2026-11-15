const publicAsset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export const profile = {
  name: 'Md Mahmudul Hasan Rony',
  shortTitle: 'Banking & Financial Services Professional | Strategic Alliance Specialist | Business Development Professional',
  intro: 'Nearly a decade of experience in Bangladesh\'s banking and financial sector, specializing in strategic partnerships, business development, merchant relationships, and financial services. Passionate about financial inclusion, sustainable finance, and creating meaningful business relationships.',
  portrait: publicAsset('images/rony-profile.png'),
  summitImage: publicAsset('images/global-youth-impact-summit-2027.png'),
  address: 'Gulshan Badda Link Road, Dhaka-1212, Bangladesh',
  mobile: '+8801916077510',
  whatsapp: '8801713116518',
  email: 'ronybd900@gmail.com',
  facebook: 'https://www.facebook.com/share/1DtawAiWxv/',
  linkedin: 'https://www.linkedin.com/in/md-mahmudul-hasan-4ba2621b2/',
  familyImage: publicAsset('images/family-illustration.svg'),
  cvUrl: '/documents/Md-Mahmudul-Hasan-Rony-CV.pdf',
  professionalSummary: 'I have nearly ten years of professional experience in Bangladesh\'s banking and financial sector, and I developed a strong understanding of the role finance plays in economic development, financial inclusion, and social progress. However, I believe that addressing today\'s financial challenges requires more than professional experience; it requires global perspectives, innovative thinking, and international collaboration.',
  focusAreas: [
    'Banking and Financial Services',
    'Strategic Business Alliances',
    'Corporate Relationship Management',
    'Merchant Partnership Development',
    'Business Growth',
    'Financial Inclusion',
    'Sustainable Finance',
    'Youth Empowerment'
  ]
} as const;

export const socialLinks = [
  { label: 'Email', href: 'mailto:ronybd900@gmail.com', icon: 'Mail' },
  { label: 'WhatsApp', href: 'https://wa.me/8801713116518', icon: 'MessageCircle' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/md-mahmudul-hasan-4ba2621b2/', icon: 'Linkedin' },
  { label: 'Facebook', href: 'https://www.facebook.com/share/1DtawAiWxv/', icon: 'Facebook' }
] as const;

export const references = [
  {
    name: 'MD. Shafiqul Hasan',
    position: 'Head of Strategic Alliance & AVP, Card Division',
    organization: 'NRB Bank Limited',
    email: 'mdshafiqul.hassan@nrbbankbd.com',
    mobile: '01709641642'
  },
  {
    name: 'Mahfuzur Rahman',
    position: 'General Manager, Banking Inspection-4',
    organization: 'Bangladesh Bank',
    email: 'mmahfuzur.rahman@bb.org.bd',
    mobile: '01912101515'
  }
] as const;

export const travelNotes = [
  {
    country: 'India',
    flag: '🇮🇳',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=900&q=80',
    reflection: 'A broader perspective on regional markets and cross-border business practices.'
  },
  {
    country: 'Thailand',
    flag: '🇹🇭',
    image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=900&q=80',
    reflection: 'Exposure to dynamic commercial environments and cultural adaptability in regional trade.'
  },
  {
    country: 'Malaysia',
    flag: '🇲🇾',
    image: 'https://images.unsplash.com/photo-1555899434-94d1368aa7af?auto=format&fit=crop&w=900&q=80',
    reflection: 'Learning how regional financial ecosystems support business growth and inclusion.'
  },
  {
    country: 'Singapore',
    flag: '🇸🇬',
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=900&q=80',
    reflection: 'Observing efficient financial systems, innovation, and disciplined business operations.'
  },
  {
    country: 'Indonesia',
    flag: '🇮🇩',
    image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=900&q=80',
    reflection: 'Understanding diverse consumer behaviors and the value of inclusive economic development.'
  }
] as const;

export const mediaReferences = [
  {
    publication: 'The Daily Star',
    url: 'https://www.thedailystar.net/business/economy/banks/news/nrb-bank-astra-airways-strike-deal-3433891',
    image: 'https://www.thedailystar.net/sites/default/files/styles/big_1/public/images/2023/10/03/nrb_bank.jpg',
    summary: 'Coverage related to NRB Bank strategic partnership activity and commercial banking developments.'
  }
] as const;
