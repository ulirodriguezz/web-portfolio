import styles from './NavPane.module.scss';

function NavPane() {
  return (
    <header>
      <nav className={styles.navPane} aria-label="Main navigation">
        <ul className={styles.navUl}>
          <li className={styles.navLi}><a href="#perfil" className={styles.link}>Perfil</a></li>
          <li className={styles.navLi}><a href="#contacto" className={styles.link}>Contacto</a></li>
          <li className={styles.navLi}><a href="#home" className={styles.link}>Home</a></li>
          <li className={styles.navLi}><a href="#portfolio" className={styles.link}>Portfolio</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default NavPane;
