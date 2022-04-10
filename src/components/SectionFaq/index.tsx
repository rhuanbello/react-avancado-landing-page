import React from 'react';

import Container from 'components/Container';
import Heading from 'components/Heading';

import * as S from './styles';
import { SectionFaqProps } from 'types/api';

const SectionFaq = ({ title, questions }: SectionFaqProps) => (
  <S.Wrapper>
    <S.Content>
      <Container>
        <Heading>{title}</Heading>

        <S.Questions>
          {questions.map(({ id, question, answer }) => (
            <S.Question key={id}>
              <Heading lineBottom>{question}</Heading>
              <div dangerouslySetInnerHTML={{ __html: answer }} />
            </S.Question>
          ))}
        </S.Questions>
      </Container>
    </S.Content>
  </S.Wrapper>
);

export default SectionFaq;
