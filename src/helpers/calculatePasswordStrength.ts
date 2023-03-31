import { StrengthKeysType, strengthValues } from '../hooks/usePasswordStrengthValidator';
import { containsAll } from './containsAll';
import { containsDigitsAndSymbols } from './containsDigitsAndSymbols';
import { containsLettersAndDigits } from './containsLettersAndDigits';
import { containsLettersAndSymbols } from './containsLettersAndSymbols';
import { containsOnlyDigits } from './containsOnlyDigits';
import { containsOnlyLetters } from './containsOnlyLetters';
import { containsOnlySymbols } from './containsOnlySymbols';
import { isEmpty } from './isEmpty';
import { isLessThanMin } from './isLessThanMin';
import { isNotEmpty } from './isNotEmpty';

export function calculatePasswordStrength(password: string): StrengthKeysType {
  const isEasy =
    containsOnlyLetters(password) ||
    containsOnlyDigits(password) ||
    containsOnlySymbols(password) ||
    isLessThanMin(password);

  const isMedium =
    (containsLettersAndDigits(password) || containsLettersAndSymbols(password) || containsDigitsAndSymbols(password)) &&
    !containsAll(password);

  const isStrong = containsAll(password);

  if (isEmpty(password)) {
    return strengthValues.default;
  }

  if (isLessThanMin(password) && isNotEmpty(password)) {
    return strengthValues.invalid;
  }

  if (isEasy) {
    return strengthValues.easy;
  }

  if (isMedium) {
    return strengthValues.medium;
  }

  if (isStrong) {
    return strengthValues.strong;
  }

  return strengthValues.default;
}
