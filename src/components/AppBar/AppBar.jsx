import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { authSelectors } from '../../redux/auth';

import Navigation from '../Navigation';
import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu';

import styles from './AppBar.module.scss';

// Компонент хедера приложения (бара)
const AppBar = ({ isAuthenticated }) => {
  return (
    <header className={styles.header}>
      <Navigation />

      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

AppBar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps, null)(AppBar);
