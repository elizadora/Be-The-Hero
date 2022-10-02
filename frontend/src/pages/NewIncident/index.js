import { useState } from 'react';
import api from '../../services/api';
import './styles.css';

import {Link, useNavigate} from 'react-router-dom';

import logoImg from '../../assets/logo.svg';
import {FiArrowLeft} from 'react-icons/fi'

export default function NewIndicent(){
    const navigate = useNavigate();

    const ongID = localStorage.getItem('ongID');

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    async function handleNewIncident(e){
        e.preventDefault();

        const data = {
            title,
            description,
            value,
        };

        try {
            await api.post('incidents', data, {
                headers:{
                    Authorization: ongID,
                }
            });

            navigate('/profile');
            
        } catch (err) {
            alert('Error ao cadastrar caso, tente novamente.');
        }
    }

    return (
        <div className="new-indicent-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

                    <Link className='back-link' to='/profile'>
                        <FiArrowLeft size={16} color="#E02041"/>
                        Voltar para home
                    </Link>
                </section>
                <form onSubmit={handleNewIncident}>
                    <input placeholder='Título' required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    />
                    <textarea placeholder='Descrição' required
                     value={description}
                     onChange={(e) => setDescription(e.target.value)}
                    />
                    <input placeholder='Valor em reais' required
                     value={value}
                     onChange={(e) => setValue(e.target.value)} 
                    />
                    <button className="button" type='submit'>
                        Cadastrar
                    </button>
                </form>
            </div>
        </div>
    );
}