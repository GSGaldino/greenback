import {useState} from 'react';

import styles from './index.module.css';

export default function Header() {
  const [isOpen, setIfIsOpen] = useState(false);

  function toggleMenu(){
    setIfIsOpen(
      isOpen === false 
        ? true 
        : false
    )
  }

  return (
    <div className={styles.header}>
        <div className={styles.title}>
          <h1>Greenback</h1>
          <h2>Consultoria Empresarial</h2>
        </div>
        <div 
          className={styles.sandwich}
          onClick={toggleMenu}
        >
        </div>
        <nav className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
          <a href="/">Home</a>
          <a href="/">Consultorias</a>
          <a href="/">Artigos</a>
          <a href="/">Contato</a>
        </nav>
    </div>
  )
}
