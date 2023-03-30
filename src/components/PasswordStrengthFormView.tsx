import { ChangeEvent, useState } from 'react';
import { useGetPasswordStrengthStyles } from '../hooks/useGetPasswordStrengthStyles';
import { usePasswordStrengthValidator } from '../hooks/usePasswordStrengthValidator';

function PasswordStrengthFormView() {
  const [password, setPassword] = useState('');
  const { validate, strength } = usePasswordStrengthValidator();
  const { styles } = useGetPasswordStrengthStyles(strength, password);

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setPassword(evt.target.value);
    validate(evt.target.value);
  };

  return (
    <div className="password-form-container">
      <form className="password-form">
        <label htmlFor="password" className="password-label">
          Password
        </label>
        <input
          id="password"
          className="password-input"
          type="password"
          value={password}
          onChange={handleChange}
        />
      </form>

      <div className="strength-indicator">
        <span className={styles.first}></span>
        <span className={styles.second}></span>
        <span className={styles.third}></span>
      </div>
    </div>
  );
}

export default PasswordStrengthFormView;
