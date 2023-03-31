import { useState } from 'react';
import { calculatePasswordStrength } from '../helpers/calculatePasswordStrength';

export const strengthValues = {
  default: 'default',
  invalid: 'invalid',
  easy: 'easy',
  medium: 'medium',
  strong: 'strong',
} as const;

export type StrengthKeysType = keyof typeof strengthValues;

export const usePasswordStrengthValidator = () => {
  const [currentStrength, setCurrentStrength] = useState<StrengthKeysType>(strengthValues.default);

  const validate = (password: string) => {
    const strength = calculatePasswordStrength(password);
    setCurrentStrength(strength);
  };

  return {
    validate,
    strength: currentStrength,
  };
};
