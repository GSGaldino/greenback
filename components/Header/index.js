import styles from './index.module.css';

export default function Header() {
  return (
    <div className={styles.header}>
        <div className={styles.title}>
          <h1>Greenback</h1>
          <h2>Consultoria Empresarial</h2>
        </div>
        <div className={styles.sandwich}>
        </div>
    </div>
  )
}
