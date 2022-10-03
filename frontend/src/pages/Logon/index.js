import { useState } from 'react';
import api from '../../services/api';
import './styles.css';

import {Link, useNavigate} from 'react-router-dom';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';
import {FiLogIn} from 'react-icons/fi';
import Modal from '../../components/Modal';

export default function Logon() {
    const navigate = useNavigate();
    

    const [id, setID] = useState('');
    const [modal, setModal] = useState(false);

    async function handleLogin(e){
        e.preventDefault();

        try {
            const reponse = await api.post('sessions', {id});
            
            localStorage.setItem('ongID', id);
            localStorage.setItem('ongName', reponse.data.name);

            navigate('/profile');

        } catch (err) {
            setModal(true);
        }

    }

    return (
        <div className="logon-container">
            { modal && <Modal modal={setModal} title = "Falha no login, tente novamente."/>
            } 
            <section className="form">
                <img src={logoImg} alt="Be The Hero" />

                <form onSubmit={handleLogin}>
                    <h1>Faça seu Logon</h1>
                    
                    <input placeholder='Sua ID' 
                    value={id}
                    onChange={e => setID(e.target.value)}
                    />
                    <button className='button' type='submit'>Entrar</button>

                    <Link className='back-link' to='/register'>
                        <FiLogIn size={16} color="#E02041"/>
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            
            <img src={heroesImg} alt="Heroes"/>
        </div>
    );
}