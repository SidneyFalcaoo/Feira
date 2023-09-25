import './index.scss';
import Cabecalho from '../../components/cabecalho';
import { useState } from 'react';

import axios from 'axios';




export default function Cadastro() {

    const [ nome, setNome ] = useState('')
    const [ email, setEmail ] = useState('');
    const [ senha, setSenha ] = useState('');


    async function Logar() {

        try {
           const resp = await axios.post('http://localhost:5000/usuario/login', {
                nome: nome,
                email: email,
                senha: senha
            });

            if(resp.status === 200)
            {
                
            } 
        } catch (error) {
            alert(error.response.data.erro)
        }
        
    }
    
    return (

        <div className='pagina-cadastro'>
            <Cabecalho/>

            <article className='titulo'>
                <h1>FAÇA SEU CADASTRO</h1>
                <h2>COMPRE NOSSOS MELHORES PRODUTOS</h2>
            </article>
            
            <article className='input'>
                <input type="text" placeholder='Nome completo' value={nome} onChange={e => setNome(e.target.value)}/>
                <input type="text" placeholder='Email'  value={email} onChange={e => setEmail(e.target.value)}/>
                <input type="text" placeholder='***'  value={senha} onChange={e => setSenha(e.target.value)} />

                <button onClick={Logar}> Registrar </button>
            </article>

        </div>
    )
}