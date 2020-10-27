import styles from './index.module.css';

import { MdAttachMoney, MdTrendingUp } from 'react-icons/md';
import { FaAngleDoubleRight } from 'react-icons/fa';

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
      <div className={styles.attributes}>
        <Attribute
          text="Consultoria Financeira"
          icon={<MdAttachMoney size={30} />}
        />
        <Attribute
          text={'Gestão \n Financeira \n Lucrativa'}
          icon={<MdTrendingUp size={30} />}
        />
        <Attribute
          text="Consultoria de Marketing"
          icon={<FaAngleDoubleRight size={30} />}
        />
      </div>
    </div>
  )
}
