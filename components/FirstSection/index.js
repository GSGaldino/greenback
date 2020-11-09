import styles from './index.module.css';

import Provider from '../Provider';

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
      <Provider>
        <div className={styles.section}>

          <div className={`${styles.title} ${styles.flexItem}`}>
            <h2>Iluminismo financeiro</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a dui odio.</p>
            <a href="/">Saiba mais</a>
          </div>

          <img
            src='/image.png'
            alt="Greenback, consultoria empresarial"
            className={styles.flexItem}
          />

        </div>
        <h2>O que fazemos de melhor</h2>
        <div className={styles.attributes}>
          <Attribute
            text="Consultoria Financeira"
            icon={<MdAttachMoney size={30} />}
          />
          <Attribute
            text={'Gestão Financeira Lucrativa'}
            icon={<MdTrendingUp size={30} />}
          />
          <Attribute
            text="Consultoria de Marketing"
            icon={<FaAngleDoubleRight size={30} />}
          />
        </div>
      </Provider>
    </div>
  )
}
