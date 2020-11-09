import {BsFillPeopleFill} from 'react-icons/bs';
import {MdBusiness,MdShowChart} from 'react-icons/md';

import styles from './index.module.css';

export default function Transfomations(){
  const Item = ({ icon, text }) => (
    <div className={styles.item}>
      <div>
        {icon}
      </div>
      <div>
        {text}
      </div>
    </div>
  )

  return (
    <div className={styles.transformations}>
      <img 
        src="/retangle-white.svg" 
        alt="white retangle"
        style={{
          width: "96%",
          marginLeft: "10px"
        }}
      />

      <h2>Transformações</h2>
      <div className={styles.container}>
        <div className={styles.withEffect}>
          <Item
            icon={<BsFillPeopleFill />}
            text="Mudar a mentalidade do empreendedor"
          />
          <Item
            icon={<MdBusiness />}
            text="Ter gestão de empresa grande"
          />
        </div>
        <div>
          <Item
            icon={<MdShowChart />}
            text="Crescimento com segurança"
          />
        </div>
      </div>
    </div>
  )
}
