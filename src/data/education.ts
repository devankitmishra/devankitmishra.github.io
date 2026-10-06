export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  field: string;
}

export const education: EducationItem[] = [
  {
    id: 'mca',
    degree: 'Master of Computer Applications',
    institution: 'Indira Gandhi Institute of Technology (IGIT), Sarang',
    period: 'September 2023 - March 2025',
    field: 'Computer Applications',
  },
  {
    id: 'bsc',
    degree: 'Bachelor of Science',
    institution: 'Mangala Mahavidyalaya (MMV), Kakatpur',
    period: 'September 2020 - August 2023',
    field: 'Mathematics and Computer Science',
  },
];
