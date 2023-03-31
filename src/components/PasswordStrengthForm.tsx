import { ChangeEvent, useState } from 'react';
import { getPasswordStrengthStyles } from '../helpers/getPasswordStrengthStyles';
import { StrengthKeysType, usePasswordStrengthValidator } from '../hooks/usePasswordStrengthValidator';
import VisibleIcon from '../assets/password-visible.png';
import InvisibleIcon from '../assets/password-invisible.png';

type PasswordType = 'text' | 'password';

const inputClassNames: Record<StrengthKeysType, string> = {
  default: 'password-input',
  invalid: 'password-input outline-invalid',
  easy: 'password-input outline-easy',
  medium: 'password-input outline-medium',
  strong: 'password-input outline-strong',
};

function PasswordStrengthForm() {
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const { validate, strength } = usePasswordStrengthValidator();

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setPassword(evt.target.value);
    validate(evt.target.value);
  };

  const togglePasswordVisibility = () => setIsPasswordVisible(!isPasswordVisible);

  const { styles } = getPasswordStrengthStyles(strength);

  const passwordInputType: PasswordType = isPasswordVisible ? 'text' : 'password';

  return (
    <div className="password-form-container">
      <form className="password-form">
        <label htmlFor="password" className="password-label">
          Password
          <input
            id="password"
            className={inputClassNames[strength]}
            type={passwordInputType}
            placeholder="Enter your password..."
            value={password}
            onChange={handleChange}
          />
          <button type="button" className="password-visibility-btn" onClick={togglePasswordVisibility}>
            <PasswordVisibilityIcon isVisible={isPasswordVisible} />
          </button>
        </label>
      </form>

      <div className="strength-indicator">
        <span style={styles.first}></span>
        <span style={styles.second}></span>
        <span style={styles.third}></span>
      </div>
    </div>
  );
}

function PasswordVisibilityIcon({ isVisible }: { isVisible: boolean }) {
  return isVisible ? <img src={VisibleIcon} /> : <img src={InvisibleIcon} />;
}

export default PasswordStrengthForm;
