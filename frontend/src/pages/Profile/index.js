import { useEffect, useState } from 'react';
import api from '../../services/api';
import './styles.css';

import {Link, useNavigate} from 'react-router-dom';

import logoImg from '../../assets/logo.svg';
import {FiPower, FiTrash2} from 'react-icons/fi';

export default function Profile(){

    const [incidents, setIncidents] = useState([]);
    
    const navigate = useNavigate();
    
    const ongID = localStorage.getItem('ongID');
    const ongName = localStorage.getItem('ongName');

    useEffect(() => {
        api.get('profile', {
            headers:{
                Authorization: ongID,
            }
        }).then(response => {
            setIncidents(response.data);
        })
    }, [ongID]);

    async function handleDeleteIncident(id){
        try {
            await api.delete(`incidents/${id}`, {
                headers:{
                    Authorization: ongID,
                }
            });

            setIncidents(incidents.filter(incident => incident.id !== id));
            
        } catch (err) {
            alert('Error ao deletar caso, tente novamente');
        }
    }

    function handleLogout(){
        localStorage.clear();
        navigate('/');
    }

    return(
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero" />
                <span>Bem vindo, {ongName}</span>
                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button onClick={handleLogout} type='button'>
                    <FiPower size={18} color="#e02041" />
                </button>
            </header>
            <h1>Casos cadastrados</h1>
                    
            {incidents.length > 0
            ? <ul>
                {incidents.map(incident => (
                    <li key={incident.id}>
                        <strong>CASO:</strong>
                        <p>{incident.title}</p>

                        <strong>DESCRIÇÃO:</strong>
                        <p>{incident.description}</p>

                        <strong>VALOR:</strong>
                        <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incident.value)}</p>

                        <button onClick={() => handleDeleteIncident(incident.id)} type='button'>
                            <FiTrash2 size={20} color="#a8a8b3"/>
                        </button>
                    </li>
                ))}  
            </ul>:
            <div className="null-incidents">
                <p>Nenhum caso cadastrado.</p>
            </div>
            }
        </div>
    );
}
