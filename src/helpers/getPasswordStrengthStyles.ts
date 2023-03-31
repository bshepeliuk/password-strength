import { CSSProperties } from 'react';
import { StrengthKeysType } from '../hooks/usePasswordStrengthValidator';

type ItemStylesType = Record<StrengthKeysType, CSSProperties>;
type BaseStylesType = Record<StrengthKeysType, Record<'first' | 'second' | 'third', CSSProperties>>;

const itemStyles: ItemStylesType = {
  default: {
    backgroundColor: '#DFDFDE',
    transition: 'all 0.5s ease-out',
  },
  invalid: {
    backgroundColor: '#e74c3c',
    transition: 'all 0.5s ease-out',
  },
  easy: {
    backgroundColor: '#e74c3c',
    transition: 'all 0.5s ease-out',
  },
  medium: {
    backgroundColor: '#f1c40f',
    transition: 'all 0.5s ease-out',
  },
  strong: {
    backgroundColor: '#1abc9c',
    transition: 'all 0.5s ease-out',
  },
};

const baseStyles: BaseStylesType = {
  default: {
    first: itemStyles.default,
    second: itemStyles.default,
    third: itemStyles.default,
  },
  invalid: {
    first: itemStyles.invalid,
    second: itemStyles.invalid,
    third: itemStyles.invalid,
  },
  easy: {
    first: itemStyles.easy,
    second: itemStyles.default,
    third: itemStyles.default,
  },
  medium: {
    first: itemStyles.medium,
    second: itemStyles.medium,
    third: itemStyles.default,
  },
  strong: {
    first: itemStyles.strong,
    second: itemStyles.strong,
    third: itemStyles.strong,
  },
};

export const getPasswordStrengthStyles = (strength: StrengthKeysType) => {
  return {
    styles: baseStyles[strength],
  };
};
