import { NavLink } from 'react-router-dom';
import styles from './NavPane.module.scss';

function NavPane() {
  return (
    <header>
      <h1 className={`'my-h1' ${styles.navTitle}`}> Portfolio</h1>
      <nav className={styles.navPane} aria-label="Main navigation">
        <ul className={styles.navUl}>
          <li className={styles.navLi}><NavLink to="/" className={styles.link}>Home</NavLink></li>
          <li className={styles.navLi}><NavLink to="/profile" className={styles.link}>Profile</NavLink></li>
          <li className={styles.navLi}><NavLink to="/contact" className={styles.link}>Contact</NavLink></li>
          <li className={styles.navLi}><NavLink to="/projects" className={styles.link}>Projects</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default NavPane;
