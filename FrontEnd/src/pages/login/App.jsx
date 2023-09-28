import './index.scss';
import Cabecalho from '../../components/cabecalho';
import { Navigate, useNavigate } from 'react-router-dom';

import axios from 'axios';
import { useState } from 'react';


export default function Login() {

  const [ email, setEmail ] = useState('');
  const [ senha, setSenha ] = useState('');
  const navigate = useNavigate();

 
  const [ erro, setErro ] = useState('')

  async function Logar() {
    try {
      
      const resp = await axios.post('http://localhost:5000/usuario/logar', {
        email: email,
        senha: senha
      })

      if( resp.status === 500 ) {
            setErro(resp.data.erro)
      }
      else {
        navigate('/')
      }

    } catch (error) {
      if ( error.response.status  === 500 ) {
        setErro ( error.response.data.erro) 
      }
    }
  }

  return (
    <div className="pagina-login">
      <Cabecalho />

      <article className='titulo'>
        <h1>FAÇA SEU</h1>
        <h1> LOGIN</h1>
      </article>

      <main>
        <article className='input'>
          <input className='scs' type="text" placeholder='Email'  value={email} onChange={(e) => setEmail(e.target.value)} />
          <input className='scs' type="text" placeholder='Senha' value={senha} onChange={(e) => setSenha(e.target.value)}/>
        </article>

        <div className='bt-a'>
          <button className='botones' onClick={Logar}>Entrar</button>
          <a href='/cadastro'><strong>Não tem cadastro ?</strong></a>
        </div>
      </main>
    </div>
  );
}