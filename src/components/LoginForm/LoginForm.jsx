import { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { authOperations, authSelectors } from '../../redux/auth/';

import styles from './LoginForm.module.scss';

const initialState = {
  email: '',
  password: '',
};

// Компонент формы авторизации
export default function LoginForm() {
  const [state, setState] = useState(initialState);
  const { email, password } = state;

  const isLoading = useSelector(authSelectors.getLoading); // Селектор статуса загрузки

  const dispatch = useDispatch();

  // Диспатчит операцию входа + useCallback
  const onLogin = useCallback(
    state => {
      dispatch(authOperations.logIn(state));
    },
    [dispatch],
  );

  const hanldeChange = e => {
    const { name, value } = e.target;

    setState(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const hanldeSubmit = e => {
    e.preventDefault();

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
          autoComplete="email"
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
          autoComplete="current-password"
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
}
