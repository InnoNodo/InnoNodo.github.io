import React from 'react';
import {useNavigate} from "react-router-dom";
const SocialNetworks: React.FC = () => {

    const navigate = useNavigate();

    const navigateToComics = () => {
        navigate('/comics');
    };

    return (
        <div>
            <div className="wrapper">
                <div className="paragraph-heading">
                    My Social Networks:
                    <div className="wrapper-links">
                        <a href="https://t.me/nodoser">
                            <img src="/images/Telegram_Messenger.png" className="icon" alt="Telegram Logo"/>
                        </a>
                        <a href="https://github.com/InnoNodo">
                            <img className="icon" src="/images/github.png" alt="Github Logo"/>
                        </a>
                        <a href="https://vk.com/nodoser">
                            <img className="icon" src="/images/vk.png" alt="Github Logo"/>
                        </a>
                        <button onClick={navigateToComics}>
                            Funny comics
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SocialNetworks;
