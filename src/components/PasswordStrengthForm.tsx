import { ChangeEvent, useState } from 'react';
import { getPasswordStrengthStyles } from '../helpers/getPasswordStrengthStyles';
import { isEmpty } from '../helpers/isEmpty';
import { usePasswordStrengthValidator } from '../hooks/usePasswordStrengthValidator';

const inputClassNames: Record<string, string> = {
  easy: 'outline-easy',
  medium: 'outline-medium',
  strong: 'outline-strong',
};

function PasswordStrengthForm() {
  const [password, setPassword] = useState('');
  const { validate, strength } = usePasswordStrengthValidator();

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setPassword(evt.target.value);
    validate(evt.target.value);
  };

  const { styles } = getPasswordStrengthStyles(strength);

  const outlineClassName = isEmpty(strength) ? '' : inputClassNames[strength];
  const inputClassName = 'password-input ' + `${outlineClassName}`;

  return (
    <div className="password-form-container">
      <form className="password-form">
        <label htmlFor="password" className="password-label">
          Password
        </label>
        <input
          id="password"
          className={inputClassName}
          type="password"
          placeholder="Enter your password..."
          value={password}
          onChange={handleChange}
        />
      </form>

      <div className="strength-indicator">
        <span style={styles.first}></span>
        <span style={styles.second}></span>
        <span style={styles.third}></span>
      </div>
    </div>
  );
}

export default PasswordStrengthForm;
