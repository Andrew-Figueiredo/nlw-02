import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return(
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/45156832?s=460&u=4e298cfd3e838e771947e69a97783ff4c07749b8&v=4" alt="Andrew Figueiredo"/>
                <div>
                    <strong>Andrew Figueiredo</strong>
                    <span>Matemática</span>
                </div>
            </header>

            <p>
                O texto 1 para textar 
                <br/><br/>
                Louco1
            </p>

            <footer>
                <p>
                    Preço/hora 
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em Contato.
                </button>
            </footer>

        </article>
    )
}

export default TeacherItem;