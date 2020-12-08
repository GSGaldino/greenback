import React, { useState } from 'react';
import { 
  FaFacebook, 
  FaInstagram, 
  FaLinkedin, 
  FaWhatsapp, 
  FaYoutube
} from 'react-icons/fa';

import styles from './index.module.css';

export default function FaleConosco() {
  const [fields, setFields] = useState({});
  const url = 'https://greenback-backend.herokuapp.com'

  const handleChange = event => {
    setFields({...fields, [event.target.name]: event.target.value})
  }

  const handleSubmit = async event => {
    event.preventDefault();
    if( !fields.fullname || !fields.email || !fields.phone || !fields.uf || !fields.message){
      return alert('Por favor preencha todos os campos!')
    }

    const response = await fetch(`${url}/api/v1/send`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(fields)
    });
    const data = await response.json();
    if(data){
      event.target.reset();
      return alert(data.message);
    }
    return alert('Erro em nossos servidores! Desculpe, tente novamente mais tarde.')
  }

  return (
    <div className={styles.faleConosco} id="fale-conosco">
      <h2>Fale conosco</h2>
      <form
        onSubmit={handleSubmit}
        className={styles.form}
      >
        <input type="text" placeholder="Nome completo" name="fullname" onChange={handleChange}/>
        <input type="email" placeholder="E-mail" name="email" onChange={handleChange}/>

        <div className={styles.inputGroup}>
          <input type="tel" placeholder="Telefone" name="phone" onChange={handleChange}/>
          <input type="uf" placeholder="Cidade" name="uf" onChange={handleChange}/>
        </div>
        
        <textarea placeholder="Digite aqui sua mensagem" name="message" onChange={handleChange}></textarea>
        <input type="submit" value="Enviar" />
      </form>

      <div className={styles.redes}>
        <p>Ou acessando nossas redes sociais:</p>
        <div className={styles.redesIcons}>
          <a href="/"><FaFacebook size={30} color={'var(--primary-color)'}/></a>
          <a href="/"><FaInstagram size={30} color={'var(--primary-color)'}/></a>
          <a href="/"><FaLinkedin size={30} color={'var(--primary-color)'}/></a>
          <a href="/"><FaWhatsapp size={30} color={'var(--primary-color)'}/></a>
          <a href="/"><FaYoutube size={30} color={'var(--primary-color)'}/></a>
        </div>
      </div>
    </div>
  )
}