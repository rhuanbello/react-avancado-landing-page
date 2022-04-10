import React from 'react';

import Logo from 'components/Logo';
import Button from 'components/Button';
import * as S from './styles';

import { gaEvent } from 'utils/ga';
import Container from 'components/Container';
import { HeaderProps, ImageProps } from 'types/api';
import { getImageUrl } from 'utils/getImageUrl';

const onClick = () =>
  gaEvent({ action: 'click', category: 'cta', label: 'hero button' });

type Props = {
  logo: ImageProps;
  header: HeaderProps;
};

const SectionHero = ({ logo, header, sectionAboutProject }: Props) => {
  const { title, description, button, image } = header;
  const { url, alternativeText } = image.data.attributes;

  return (
    <S.Wrapper>
      <Container>
        <Logo {...logo} />

        <S.Content>
          <S.TextBlock>
            <S.Title>{title}</S.Title>
            <S.Description>{description}</S.Description>
            <S.ButtonWrapper>
              <Button href={button.url} onClick={onClick} wide>
                {button.label}
              </Button>
            </S.ButtonWrapper>
          </S.TextBlock>

          <S.Image src={getImageUrl(url)} alt={alternativeText} />
        </S.Content>
      </Container>
    </S.Wrapper>
  );
};
export default SectionHero;
