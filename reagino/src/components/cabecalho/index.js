import './index.scss';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png'

export default function Cabecalho () {

    return(
        <div className='comp-cabecalho' > 
            <Link className='logo' to='/'>
                <img alt='a-logo' src={Logo} />
            </Link>

            <article className="atributo">
                <section className='barra-pesquisa'>
                    <input type="text" placeholder='Pesquisar' />
                    <img alt='lupa' src='/assets/img/lupa.png' />
                </section>

                <section className="navegacao">
                    <Link to='/'> NOIVADO </Link>
                    <Link to='/'> JOIAS </Link>
                    <Link to='/'> PRESENTES </Link>
                    <Link to='/'> ESPECIAIS </Link>
                </section>
            </article>

            <article className='icones'>
                <Link className='login' to='/login'>
                    <img alt='icone-pessoa' src='/assets/img/pessoinha.png'/>
                </Link>
                
                <Link className='carrinho' to='/'>
                    <img src='/assets/img/carrinho.png' alt="" />
                </Link>
            </article>
        </div>
    )
}