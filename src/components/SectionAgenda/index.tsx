import React from 'react';

import Container from 'components/Container';
import Heading from 'components/Heading';

import * as S from './styles';
import { SectionCalendarProps } from 'types/api';

const SectionAgenda = ({ title, description }: SectionCalendarProps) => (
  <Container id="agenda">
    <Heading reverseColor>{title}</Heading>
    <S.Text dangerouslySetInnerHTML={{ __html: description }} />
  </Container>
);

export default SectionAgenda;
