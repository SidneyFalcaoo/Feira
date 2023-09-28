import './index.scss';

import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.svg';

export default function Home() {

    return(
        <div className='pagina-home'>
            <h1>Joyeria Cristallo</h1>

            <img src={Logo} alt='logo'/>

            <Link to='/login'>
                <button>
                    <h1>Clique aqui</h1>
                </button>
            </Link>
        </div>
    )
}