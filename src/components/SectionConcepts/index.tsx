import React from 'react';

import Container from 'components/Container';
import Heading from 'components/Heading';

import * as S from './styles';
import { SectionConceptsProps } from 'types/api';

const SectionConcepts = ({ title, concepts }: SectionConceptsProps) => {
  return (
    <Container>
      <S.Box>
        <Heading lineBottom>{title}</Heading>
        <S.List>
          {concepts.map(({ title, id }) => (
            <S.Item key={id}>{title}</S.Item>
          ))}
        </S.List>
      </S.Box>
    </Container>
  );
};

export default SectionConcepts;
