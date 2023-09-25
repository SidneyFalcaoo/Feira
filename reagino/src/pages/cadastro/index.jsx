import './index.scss';
import Cabecalho from '../../components/cabecalho';
import { useState } from 'react';




export default function Cadastro() {

    const [ nome, setNome ] = useState('')
    const [ email, setEmail ] = useState('');
    const [ senha, setSenha ] = useState('');
    
    return (

        <div className='pagina-cadastro'>
            <Cabecalho/>

            <article className='titulo'>
                <h1>FAÇA SEU CADASTRO</h1>
                <h2>COMPRE NOSSOS MELHORES PRODUTOS</h2>
            </article>
            
            <article className='input'>
                <input type="text" placeholder='Nome completo' />
                <input type="text" placeholder='Email'/>
                <input type="text" placeholder='Senha' />

                <button> Registrar </button>
            </article>

        </div>
    )
}