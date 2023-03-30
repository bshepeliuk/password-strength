import { isEmpty } from '../helpers/isEmpty';
import { isLessThanMin } from '../helpers/isLessThanMin';

type ClassValuesType = 'invalid' | 'empty' | 'easy' | 'medium' | 'strong';
type StylesType = Record<'first' | 'second' | 'third', ClassValuesType>;

export const useGetPasswordStrengthStyles = (
  strength: string,
  password: string,
) => {
  const styles: StylesType = {
    first: 'empty',
    second: 'empty',
    third: 'empty',
  };

  if (isEmpty(strength)) {
    return {
      styles,
    };
  }

  if (isLessThanMin(password) && !isEmpty(password)) {
    styles.first = 'invalid';
    styles.second = 'invalid';
    styles.third = 'invalid';
  }

  if (!isLessThanMin(password)) {
    styles.first = 'invalid';
    styles.second = 'empty';
    styles.second = 'empty';
  }

  if (strength === 'medium') {
    styles.first = 'medium';
    styles.second = 'medium';
  }

  if (strength === 'strong') {
    styles.first = 'strong';
    styles.second = 'strong';
    styles.third = 'strong';
  }

  return {
    styles,
  };
};
