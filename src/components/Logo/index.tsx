import React from 'react';
import { ImageProps } from 'types/api';
import * as S from './styles';
import { getImageUrl } from 'utils/getImageUrl';

const Logo = ({ data }: ImageProps) => {
  const { url, alternativeText } = data.attributes;
  return <S.LogoWrapper src={getImageUrl(url)} alt={alternativeText} />;
};
export default Logo;
