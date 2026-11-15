export type EducationItem = {
  institution: string;
  degree: string;
  details: string;
  result: string;
  year: string;
  type: 'University' | 'Higher Secondary' | 'Secondary';
};

export const educationData: EducationItem[] = [
  {
    institution: 'Independent University, Bangladesh (IUB)',
    degree: 'Bachelor of Business Administration (BBA)',
    details: 'Major: Accounting | Minor: Human Resource Management (HRM)',
    result: 'CGPA: 3.06 / 4.00',
    year: '2015',
    type: 'University'
  },
  {
    institution: 'Govt. AsheK Mahmud College, Jamalpur',
    degree: 'Higher Secondary Certificate (HSC)',
    details: 'Group: Business Studies',
    result: 'CGPA: 3.60 / 5.00',
    year: '2010',
    type: 'Higher Secondary'
  },
  {
    institution: 'Jamalpur Zilla School, Jamalpur',
    degree: 'Secondary School Certificate (SSC)',
    details: 'Group: Humanities',
    result: 'CGPA: 3.88 / 5.00',
    year: '2008',
    type: 'Secondary'
  }
];
