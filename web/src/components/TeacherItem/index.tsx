import React from 'react';

import whatsappIcon from '../../assets/icons/whatsapp.svg';

import './styles.css';

function TeacherItem(){
    return (
        <article className="teacher-item">
        <header>
            <img src="https://media.discordapp.net/attachments/539491679074385939/739631281574379533/FB_IMG_1596412201244.jpg?width=522&height=653" alt=""/>
            <div>
                <strong>Bolsodão</strong>
                <span>Evangelho de cloroquina</span>
            </div>
        </header>

        <p>
            Texto explicativo da matéria
             <br/><br/>
             Mais texto explicativo
        </p>

        <footer>
            <p>
                Preço/hora
                <strong>R$ 20,00</strong>
            </p>
            <button type="button">
                <img src={whatsappIcon } alt="whatsapp"/>
                Entrar em contato
            </button>
        </footer>
    </article>
    )
}

export default TeacherItem;