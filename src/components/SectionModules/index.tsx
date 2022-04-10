import React from 'react';

import Heading from 'components/Heading';
import Container from 'components/Container';
import CardModule from 'components/CardModule';

import * as S from './styles';
import { SectionModulesProps } from 'types/api';

const SectionModules = ({ title, modules }: SectionModulesProps) => {
  return (
    <Container>
      <Heading reverseColor>{title}</Heading>

      <S.Content>
        {modules.map(({ id, title, subtitle, description }) => (
          <CardModule key={id} title={title} subTitle={subtitle}>
            <div dangerouslySetInnerHTML={{ __html: description }} />
          </CardModule>
        ))}
      </S.Content>
    </Container>
  );
};

export default SectionModules;
