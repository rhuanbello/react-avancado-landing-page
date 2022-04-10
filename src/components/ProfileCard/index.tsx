import React from 'react';

import { GrGithub } from 'react-icons/gr';
import { FaDribbble, FaTwitter } from 'react-icons/fa';

import * as S from './styles';
import { getImageUrl } from 'utils/getImageUrl';
import { ImageProps, SocialLinksProps } from 'types/api';

const icons = {
  twitter: <FaTwitter />,
  github: <GrGithub />,
  dribbble: <FaDribbble />
};

type Props = {
  photo: ImageProps;
  name: string;
  role: string;
  description: string;
  socialLinks: Array<SocialLinksProps>;
};

const ProfileCard: React.FC<Props> = ({
  name,
  role,
  photo,
  socialLinks,
  description
}) => {
  const { url, alternativeText } = photo.data.attributes;

  return (
    <S.Card key={name}>
      <S.Image src={getImageUrl(url)} alt={alternativeText} />
      <S.Name>{name}</S.Name>
      <S.Role>{role}</S.Role>
      <S.SocialLinks>
        {socialLinks.map(({ id, title, url }) => (
          <S.Link key={id}>
            <a href={url} title={title} target="_blank" rel="noreferrer">
              {icons[title.toLowerCase()]}
            </a>
          </S.Link>
        ))}
      </S.SocialLinks>
      <S.Description>{description}</S.Description>
    </S.Card>
  );
};

export default ProfileCard;
