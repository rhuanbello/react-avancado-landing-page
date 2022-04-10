export type LogoProps = {
  alternativeText: string;
  url: string;
};

export type ImageProps = {
  data: {
    attributes: {
      alternativeText: string;
      url: string;
    };
  };
};

export type HeaderProps = {
  title: string;
  description: string;
  image: ImageProps;
  button: {
    label: string;
    url: string;
  };
};

export type SectionAboutProjectProps = {
  title: string;
  image: ImageProps;
  description: string;
};

export type TechIconsProps = {
  title: string;
  id: string;
  icon: ImageProps;
};

export type SectionTechProps = {
  title: string;
  techIcons: Array<TechIconsProps>;
};

type ConceptsProps = {
  title: string;
  id: string;
};

export type SectionConceptsProps = {
  title: string;
  concepts: Array<ConceptsProps>;
};

type ModulesProps = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
};

export type SectionModulesProps = {
  title: string;
  modules: Array<ModulesProps>;
};

export type SectionCalendarProps = {
  title: string;
  description: string;
};

export type PrincingBoxProps = {
  totalPrice: number;
  numberInstallments: number;
  priceInstallment: number;
  benefits: string;
  button: {
    label: string;
    url: string;
  };
};

export type SocialLinksProps = {
  id: string;
  title: string;
  url: string;
};

export type AuthorsProps = {
  attributes: {
    photo: ImageProps;
    name: string;
    role: string;
    description: string;
    socialLinks: Array<SocialLinksProps>;
  };
};

export type SectionAboutUsProps = {
  title: string;
  authors: {
    data: Array<AuthorsProps>;
  };
};

export type QuestionsProps = {
  id: string;
  question: string;
  answer: string;
};

export type ReviewsProps = {
  id: string;
  name: string;
  photo: ImageProps;
  text: string;
};

export type SectionReviewsProps = {
  title: string;
  reviews: Array<ReviewsProps>;
};

export type SectionFaqProps = {
  title: string;
  questions: Array<QuestionsProps>;
};

export type LandingPageProps = {
  logo: ImageProps;
  header: HeaderProps;
  sectionAboutProject: SectionAboutProjectProps;
  sectionTech: SectionTechProps;
  sectionConcepts: SectionConceptsProps;
  sectionModules: SectionModulesProps;
  sectionCalendar: SectionCalendarProps;
  princingBox: PrincingBoxProps;
  sectionAboutUs: SectionAboutUsProps;
  sectionReviews: SectionReviewsProps;
  sectionFaq: SectionFaqProps;
};
