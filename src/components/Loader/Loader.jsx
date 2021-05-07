import Template from 'react-loader-spinner';

import styles from './Loader.module.scss';

// Компонент спиннера
export default function Loader() {
  return (
    <div className={styles.loader}>
      <Template type="Rings" color="#2196f3" height={100} width={100} />
    </div>
  );
}
