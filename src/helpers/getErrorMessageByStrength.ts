import { StrengthKeysType } from '../hooks/usePasswordStrengthValidator';

export const getErrorMessageByStrength = (strength: StrengthKeysType) => {
  const messages: Record<StrengthKeysType, string> = {
    default: '',
    invalid: 'The password must have at least 8 characters.',
    easy: 'The password is easy. Only digits, symbols or characters.',
    medium: 'The password is medium. Combination of letters-symbols, letters-digits or digits-symbols.',
    strong: 'The password is strong. Has letters, symbols and numbers ',
  };

  return messages[strength];
};
