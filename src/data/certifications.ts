export interface Certification {
  id: string;
  name: string;
  issuer?: string;
}

export const certifications: Certification[] = [
  {
    id: 'android-virtual',
    name: 'Android Developer Virtual Internship',
  },
  {
    id: 'mongodb-dev',
    name: 'MongoDB Developer and Administrator',
  },
  {
    id: 'fullstack-bootcamp',
    name: 'Full Stack Developer Bootcamp',
  },
  {
    id: 'aws-builders',
    name: 'AWS Builders Online Series',
  },
  {
    id: 'reactjs-course',
    name: 'ReactJs - The Complete ReactJs Course for Beginners',
  },
];
