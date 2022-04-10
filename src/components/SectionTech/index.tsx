import React from 'react';

import Heading from 'components/Heading';
import Container from 'components/Container';

import icons from './content';
import * as S from './styles';
import { SectionTechProps } from 'types/api';
import { getImageUrl } from 'utils/getImageUrl';

const SectionTech = ({ title, techIcons }: SectionTechProps) => {
  return (
    <S.Wrapper>
      <Container>
        <Heading reverseColor>{title}</Heading>
        <S.IconsContainer>
          {techIcons.map(({ title, id, icon }) => {
            const { url, alternativeText } = icon.data.attributes;

            return (
              <S.Icon key={id}>
                <S.Icons
                  src={getImageUrl(url)}
                  alt={alternativeText}
                  loading="lazy"
                />
                <S.IconsName>{title}</S.IconsName>
              </S.Icon>
            );
          })}
        </S.IconsContainer>
      </Container>
    </S.Wrapper>
  );
};

export default SectionTech;
