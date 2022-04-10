import React from 'react';

import Heading from 'components/Heading';
import Container from 'components/Container';
import ProfileCard from 'components/ProfileCard';

import * as S from './styles';
import { SectionAboutUsProps } from 'types/api';

const SectionAboutUs = ({ title, authors }: SectionAboutUsProps) => {
  const { data } = authors;

  return (
    <Container>
      <Heading reverseColor>{title}</Heading>

      <S.Content>
        {data.map(({ attributes }, index) => (
          <ProfileCard key={index} {...attributes} />
        ))}
      </S.Content>
    </Container>
  );
};

export default SectionAboutUs;
