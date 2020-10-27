import styles from './index.module.css';

import { MdAttachMoney } from 'react-icons/md';

export default function FirstSection() {
  const Attribute = ({ text, icon }) => {
    return (
      <div className={styles.attribute}>
        <p>{text}</p>
        <div>
          {icon}
        </div>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <img src='/image.png' alt="Greenback, consultoria empresarial" />
      <h2>O que fazemos de melhor</h2>

      <Attribute
        text="Consultoria Financeira"
        icon={<MdAttachMoney size={30}/>}
      />
    </div>
  )
}
