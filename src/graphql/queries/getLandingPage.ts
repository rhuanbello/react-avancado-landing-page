export const GET_LANDING_PAGE = /* GraphQL */ `
  fragment logo on LandingPage {
    logo {
      data {
        attributes {
          alternativeText
          url
        }
      }
    }
  }

  fragment header on LandingPage {
    header {
      title
      description
      image {
        data {
          attributes {
            alternativeText
            url
          }
        }
      }
      button {
        label
        url
      }
    }
  }

  fragment sectionAboutProject on LandingPage {
    sectionAboutProject {
      title
      image {
        data {
          attributes {
            url
            alternativeText
          }
        }
      }
      description
    }
  }

  fragment sectionTech on LandingPage {
    sectionTech {
      title
      techIcons {
        title
        id
        icon {
          data {
            attributes {
              url
              alternativeText
            }
          }
        }
      }
    }
  }

  fragment sectionConcepts on LandingPage {
    sectionConcepts {
      title
      concepts {
        id
        title
      }
    }
  }

  fragment sectionModules on LandingPage {
    sectionModules {
      title
      modules {
        id
        title
        subtitle
        description
      }
    }
  }

  fragment sectionCalendar on LandingPage {
    sectionCalendar {
      title
      description
    }
  }

  fragment princingBox on LandingPage {
    princingBox {
      totalPrice
      numberInstallments
      priceInstallment
      benefits
      button {
        label
        url
      }
    }
  }

  fragment sectionAboutUs on LandingPage {
    sectionAboutUs {
      title
      authors {
        data {
          attributes {
            photo {
              data {
                attributes {
                  alternativeText
                  url
                }
              }
            }
            name
            role
            description
            socialLinks {
              id
              title
              url
            }
          }
        }
      }
    }
  }

  fragment sectionReviews on LandingPage {
    sectionReviews {
      title
      reviews {
        id
        name
        text
        photo {
          data {
            attributes {
              url
              alternativeText
            }
          }
        }
      }
    }
  }

  fragment sectionFaq on LandingPage {
    sectionFaq {
      title
      questions {
        id
        question
        answer
      }
    }
  }

  query GET_LANDING_PAGE {
    landingPage {
      data {
        attributes {
          ...logo
          ...header
          ...sectionAboutProject
          ...sectionTech
          ...sectionConcepts
          ...sectionModules
          ...sectionCalendar
          ...princingBox
          ...sectionAboutUs
          ...sectionReviews
          ...sectionFaq
        }
      }
    }
  }
`;
