import React from 'react';

import Heading from 'components/Heading';
import Container from 'components/Container';

import * as S from './styles';
import { SectionAboutProjectProps } from 'types/api';
import { getImageUrl } from 'utils/getImageUrl';

const SectionAboutProject = ({
  title,
  description,
  image
}: SectionAboutProjectProps) => {
  const { alternativeText, url } = image.data.attributes;

  return (
    <S.Wrapper>
      <Container>
        <S.Container>
          <S.Image
            src={getImageUrl(url)}
            alt={alternativeText}
            loading="lazy"
          />
          <div>
            <Heading>{title}</Heading>
            <S.Text dangerouslySetInnerHTML={{ __html: description }} />
          </div>
        </S.Container>
      </Container>
    </S.Wrapper>
  );
};
export default SectionAboutProject;
