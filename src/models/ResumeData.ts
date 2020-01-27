type SkillSection = {
  title: string;
  values: string[];
};

type EducationSchool = {
  school: string;
  degree: string;
  start: string;
  end: string;
  gpa: string;
  coursework: string[];
};

type Organization = {
  organization: string;
  location: string;
  position: string;
  start: string;
  end: string;
  points: string[];
};

type Project = {
  name: string;
  link: string;
  technologies: string[];
  points: string[];
};

export type ResumeData = {
  name: string;
  location: string;
  email: string;
  summary: string[];
  links: {
    github: string;
    linkedin: string;
    website: string;
  };
  skills: SkillSection[];
  education: EducationSchool[];
  experience: Organization[];
  volunteer: Organization[];
  associations: Organization[];
  projects: Project[];
};

export default ResumeData;
