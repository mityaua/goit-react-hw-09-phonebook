import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { authOperations, authSelectors } from '../../redux/auth/';

import styles from './LoginForm.module.scss';

const initialState = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const [state, setState] = useState(initialState);
  const { email, password } = state;

  const isLoading = useSelector(authSelectors.getLoading); // Селектор статуса загрузки

  const dispatch = useDispatch();

  const onLogin = state => dispatch(authOperations.logIn(state)); // Диспатчит операцию входа

  const hanldeChange = event => {
    const { name, value } = event.target;

    setState(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const hanldeSubmit = event => {
    event.preventDefault();

    onLogin(state); // Вызов функции операции входа и передает данные из стейта

    resetForm();
  };

  const resetForm = () => {
    setState(initialState);
  };

  return (
    <form className={styles.form} onSubmit={hanldeSubmit}>
      <label className={styles.label}>
        <span className={styles.text}>Email</span>
        <input
          type="email"
          name="email"
          value={email}
          onChange={hanldeChange}
          className={styles.input}
          placeholder="Your e-mail"
          aria-label="Input for your email"
          disabled={isLoading}
          required
        />
      </label>

      <label className={styles.label}>
        <span className={styles.text}>Password</span>
        <input
          type="password"
          name="password"
          value={password}
          onChange={hanldeChange}
          className={styles.input}
          placeholder="Your password"
          aria-label="Input for your password"
          disabled={isLoading}
          required
        />
      </label>

      <div className={styles.container}>
        <button type="submit" className={styles.button} disabled={isLoading}>
          Log in
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
