import { useState } from 'react';
import { containsAll } from '../helpers/containsAll';
import { containsDigitsAndSymbols } from '../helpers/containsDigitsAndSymbols';
import { containsLettersAndDigits } from '../helpers/containsLettersAndDigits';
import { containsLettersAndSymbols } from '../helpers/containsLettersAndSymbols';
import { containsOnlyDigits } from '../helpers/containsOnlyDigits';
import { containsOnlyLetters } from '../helpers/containsOnlyLetters';
import { containsOnlySymbols } from '../helpers/containsOnlySymbols';
import { isLessThanMin } from '../helpers/isLessThanMin';

export const strengthValues = {
  easy: 'easy',
  medium: 'medium',
  strong: 'strong',
} as const;

export type StrengthKeysType = keyof typeof strengthValues;

export const usePasswordStrengthValidator = () => {
  const [currentStrength, setCurrentStrength] = useState<string>('');

  const validate = (password: string) => {
    const strength = calculatePasswordStrength(password);
    setCurrentStrength(strength ?? '');
  };

  const calculatePasswordStrength = (password: string) => {
    const isEasy =
      containsOnlyLetters(password) ||
      containsOnlyDigits(password) ||
      containsOnlySymbols(password) ||
      isLessThanMin(password);

    const isMedium =
      (containsLettersAndDigits(password) ||
        containsLettersAndSymbols(password) ||
        containsDigitsAndSymbols(password)) &&
      !containsAll(password);

    const isStrong = containsAll(password);

    if (isEasy) {
      return strengthValues.easy;
    }

    if (isMedium) {
      return strengthValues.medium;
    }

    if (isStrong) {
      return strengthValues.strong;
    }
  };

  return {
    validate,
    strength: currentStrength,
  };
};
