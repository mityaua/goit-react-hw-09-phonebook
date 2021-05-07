import styles from './AppFooter.module.scss';

// Компонент футера приложения
export default function AppFooter() {
  return (
    <footer className={styles.footer}>
      <small className={styles.text}>
        &copy; {new Date().getFullYear()} Developed by
        <span role="img" aria-label="heart" className={styles.heart}>
          <a
            href="https://github.com/mityaua"
            target="_blank"
            rel="noopener noreferrer"
            title="Developer's Github"
            aria-label="Developer's Github"
            className={styles.link}
          >
            🐸
          </a>
        </span>
      </small>
    </footer>
  );
}
