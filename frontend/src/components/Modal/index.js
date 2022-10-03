import './styles.css';
import { useNavigate } from 'react-router-dom';

export default function Modal(props){
    const navigate = useNavigate();

    return (
        <div className='poup'>
            <div className='poup-body'>
                <p>{props.title}{props.ongID}</p>
                <div className='pop-buttons'>
                    <button onClick={props.type === 'confirm' ? () => navigate('/') :() => props.modal(false)}>OK</button>
                </div>
            </div>
        </div>
    )
}