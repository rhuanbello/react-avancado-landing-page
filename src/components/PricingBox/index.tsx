import React from 'react';

import Button from 'components/Button';
import { gaEvent } from 'utils/ga';

import * as S from './styles';
import { PrincingBoxProps } from 'types/api';

const onClick = () =>
  gaEvent({ action: 'click', category: 'buy', label: 'pricing box button' });

const PricingBox = ({
  totalPrice,
  benefits,
  button,
  numberInstallments,
  priceInstallment
}: PrincingBoxProps) => {
  const handleBenefits = (benefits) => {
    const li = benefits
      .replace('<ul>', '')
      .replace('</ul>', '')
      .split('<li>')
      .filter((x) => x);
    return li;
  };
  return (
    <S.Box>
      <S.Prices>
        <S.FullPrice>
          De <span>R${totalPrice}</span> por apenas
        </S.FullPrice>
        <S.DiscountPrice>
          <span>{numberInstallments}x de</span> R${priceInstallment}
        </S.DiscountPrice>
      </S.Prices>
      <S.BenefitsList>
        {handleBenefits(benefits).map((benefit, index) => (
          <S.BenefitsItem
            key={index}
            dangerouslySetInnerHTML={{ __html: benefit }}
          />
        ))}
      </S.BenefitsList>

      <Button href={button.url} onClick={onClick} withPrice>
        <p>{button.label}</p>
        <div>
          <S.ButtonFullPrice>R${totalPrice}</S.ButtonFullPrice>
          <S.ButtonDiscountPrice>
            R${numberInstallments * priceInstallment}
          </S.ButtonDiscountPrice>
        </div>
      </Button>
    </S.Box>
  );
};

export default PricingBox;
