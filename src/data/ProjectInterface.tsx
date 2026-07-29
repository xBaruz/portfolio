export default interface ProjectInterface {
  id: string;
  title: string;
  titleEn?: string;
  img: string;
  imgPosition?: string;
  screenshots?: string[];
  github?: string;
  githubFrontend?: string;
  githubBackend?: string;
  technologies: string[];
  description: string;
  descriptionEn?: string;
  features: string[];
  featuresEn?: string[];
}
