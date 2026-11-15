export type Language = 'en' | 'bn';

export type TranslationMap = {
  nav: Record<string, string>;
  hero: Record<string, string>;
  about: Record<string, string>;
  experience: Record<string, string>;
  achievements: Record<string, string>;
  education: Record<string, string>;
  skills: Record<string, string>;
  globalImpact: Record<string, string>;
  exposure: Record<string, string>;
  gallery: Record<string, string>;
  personal: Record<string, string>;
  contact: Record<string, string>;
  references: Record<string, string>;
  footer: Record<string, string>;
};

export const translations: Record<Language, TranslationMap> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      experience: 'Experience',
      achievements: 'Achievements',
      education: 'Education',
      globalImpact: 'Global Impact',
      exposure: 'International Exposure',
      gallery: 'Gallery',
      personal: 'Personal',
      contact: 'Contact'
    },
    hero: {
      badge: 'International Delegate | Global Youth Impact Summit 2027 | Paris, France',
      viewExperience: 'View My Experience',
      downloadCv: 'Download CV',
      contactMe: 'Contact Me',
      introLabel: 'Banking & Financial Services Professional',
      introText: 'Nearly a decade of experience in Bangladesh\'s banking and financial sector, specializing in strategic partnerships, business development, merchant relationships, and financial services.',
      statYears: '10 Years',
      statPartners: '400+ Partners',
      statEmi: '200+ EMI Partners'
    },
    about: {
      heading: 'About Me',
      intro: 'I have nearly ten years of professional experience in Bangladesh\'s banking and financial sector, and I developed a strong understanding of the role finance plays in economic development, financial inclusion, and social progress. However, I believe that addressing today\'s financial challenges requires more than professional experience; it requires global perspectives, innovative thinking, and international collaboration.',
      title: 'Building strategic financial relationships for inclusive growth.'
    },
    experience: {
      heading: 'Professional Experience',
      subtitle: 'Career timeline',
      employment: 'Employment',
      internship: 'Internship',
      responsibilities: 'Responsibilities',
      achievements: 'Key achievements'
    },
    achievements: {
      heading: 'Professional Achievements',
      awardTitle: 'Award & Recognition'
    },
    education: {
      heading: 'Education',
      degree: 'Degree',
      major: 'Major',
      minor: 'Minor',
      group: 'Group',
      cgpa: 'CGPA',
      passingYear: 'Passing Year'
    },
    skills: {
      heading: 'Professional Skills',
      banking: 'Banking & Business Skills',
      technical: 'Technical Skills',
      communication: 'Communication Skills'
    },
    globalImpact: {
      heading: 'Global Youth Impact Summit 2027',
      selected: 'Selected as one of 160 International Delegates',
      edition: 'Edition',
      date: 'Dates',
      location: 'Location',
      representation: 'Representation',
      objective: 'Main discussion topic',
      action: 'Turning Global Insights into Local Impact'
    },
    exposure: {
      heading: 'International Exposure & Global Perspectives',
      subtitle: 'Countries visited'
    },
    gallery: {
      heading: 'Professional Moments & Experiences',
      subtitle: 'A visual collection of professional moments, partnerships, events, achievements, and personal journeys.'
    },
    personal: {
      heading: 'Personal Life',
      caption: 'With Family'
    },
    contact: {
      heading: 'Get in Touch',
      email: 'Email Me',
      whatsapp: 'WhatsApp Me',
      linkedin: 'Connect on LinkedIn',
      facebook: 'Follow on Facebook',
      download: 'Download CV',
      phone: 'Mobile',
      address: 'Address'
    },
    references: {
      heading: 'Professional References',
      role: 'Role',
      organization: 'Organization',
      email: 'Email',
      mobile: 'Mobile'
    },
    footer: {
      text: 'Banking & Financial Services Professional',
      rights: 'All rights reserved.'
    }
  },
  bn: {
    nav: {
      home: 'হোম',
      about: 'আমার সম্পর্কে',
      experience: 'অভিজ্ঞতা',
      achievements: 'কৃতিত্ব',
      education: 'শিক্ষা',
      globalImpact: 'গ্লোবাল ইমপ্যাক্ট',
      exposure: 'আন্তর্জাতিক এক্সপোজার',
      gallery: 'গ্যালারি',
      personal: 'ব্যক্তিগত',
      contact: 'যোগাযোগ'
    },
    hero: {
      badge: 'ইন্টারন্যাশনাল ডেলিগেট | গ্লোবাল ইয়ুথ ইমপ্যাক্ট সামিট 2027 | প্যারিস, ফ্রান্স',
      viewExperience: 'আমার অভিজ্ঞতা দেখুন',
      downloadCv: 'CV ডাউনলোড',
      contactMe: 'যোগাযোগ করুন',
      introLabel: 'ব্যাংকিং ও আর্থিক সেবার পেশাদার',
      introText: 'বাংলাদেশের ব্যাংকিং ও আর্থিক খাতে প্রায় এক দশকের অভিজ্ঞতা, বিশেষত কৌশলগত অংশীদারত্ব, ব্যবসা উন্নয়ন, মার্চেন্ট সম্পর্ক ও আর্থিক সেবায় দক্ষতা।',
      statYears: '১০ বছর',
      statPartners: '৪০০+ পার্টনার',
      statEmi: '২০০+ EMI পার্টনার'
    },
    about: {
      heading: 'আমার সম্পর্কে',
      intro: 'বাংলাদেশের ব্যাংকিং ও আর্থিক খাতে প্রায় দশ বছর পেশাদার অভিজ্ঞতা থাকার ফলে আমি অর্থের ভূমিকা, আর্থিক অন্তর্ভুক্তি ও সামাজিক অগ্রগতির ওপর গভীর ধারণা অর্জন করেছি। তবে আজকের আর্থিক চ্যালেঞ্জ মোকাবিলা করতে হলে শুধু অভিজ্ঞতা নয়, বৈশ্বিক দৃষ্টিভঙ্গি, উদ্ভাবনী চিন্তা ও আন্তর্জাতিক সহযোগিতা প্রয়োজন।',
      title: 'অন্তর্ভুক্ত উন্নয়নের জন্য কৌশলগত আর্থিক সম্পর্ক গড়ে তোলা।'
    },
    experience: {
      heading: 'পেশাদার অভিজ্ঞতা',
      subtitle: 'ক্যারিয়ার টাইমলাইন',
      employment: 'চাকরি',
      internship: 'ইন্টার্নশিপ',
      responsibilities: 'দায়িত্ব',
      achievements: 'মূল অর্জন'
    },
    achievements: {
      heading: 'পেশাদার কৃতিত্ব',
      awardTitle: 'পুরস্কার ও স্বীকৃতি'
    },
    education: {
      heading: 'শিক্ষা',
      degree: 'ডিগ্রী',
      major: 'বিশেষায়ন',
      minor: 'মাইনর',
      group: 'গ্রুপ',
      cgpa: 'CGPA',
      passingYear: 'পাসের বছর'
    },
    skills: {
      heading: 'পেশাদার দক্ষতা',
      banking: 'ব্যাংকিং ও ব্যবসায়িক দক্ষতা',
      technical: 'টেকনিক্যাল দক্ষতা',
      communication: 'যোগাযোগ দক্ষতা'
    },
    globalImpact: {
      heading: 'গ্লোবাল ইয়ুথ ইমপ্যাক্ট সামিট 2027',
      selected: '১৬০ আন্তর্জাতিক ডেলিগেটের একজন হিসেবে নির্বাচিত',
      edition: 'সংস্করণ',
      date: 'তারিখ',
      location: 'অবস্থান',
      representation: 'প্রতিনিধিত্ব',
      objective: 'প্রধান আলোচ্য বিষয়',
      action: 'গ্লোবাল ইনসাইটকে লোকাল ইমপ্যাক্টে রূপান্তর'
    },
    exposure: {
      heading: 'আন্তর্জাতিক এক্সপোজার ও বৈশ্বিক দৃষ্টিভঙ্গি',
      subtitle: 'পরিদর্শিত দেশসমূহ'
    },
    gallery: {
      heading: 'পেশাদার মুহূর্ত ও অভিজ্ঞতা',
      subtitle: 'পেশাদার মুহূর্ত, পার্টনারশিপ, ইভেন্ট, কৃতিত্ব ও ব্যক্তিগত যাত্রার ভিজ্যুয়াল সংগ্রহ।'
    },
    personal: {
      heading: 'ব্যক্তিগত জীবন',
      caption: 'পরিবারের সাথে'
    },
    contact: {
      heading: 'যোগাযোগ করুন',
      email: 'ইমেইল করুন',
      whatsapp: 'হোয়াটসঅ্যাপ করুন',
      linkedin: 'লিংকডইনে যুক্ত হোন',
      facebook: 'ফেসবুকে অনুসরণ করুন',
      download: 'CV ডাউনলোড',
      phone: 'মোবাইল',
      address: 'ঠিকানা'
    },
    references: {
      heading: 'পেশাদার রেফারেন্স',
      role: 'পদ',
      organization: 'প্রতিষ্ঠান',
      email: 'ইমেইল',
      mobile: 'মোবাইল'
    },
    footer: {
      text: 'ব্যাংকিং ও আর্থিক সেবার পেশাদার',
      rights: 'সর্বস্বত্ব সংরক্ষিত।'
    }
  }
};
