import React from 'react';
import { useRouter } from 'next/router';
import Link from "next/link";

const SocialNetworks = () => {
    const router = useRouter();

    const navigateToComics = () => {
        router.push('/comics');
    };

    return (
        <div>
            <div className="wrapper">
                <div className="paragraph-heading">
                    My Social Networks:
                    <div className="wrapper-links">
                        <Link href="https://t.me/nodoser">
                            <img src="/images/Telegram_Messenger.png" className="icon" alt="Telegram Logo"/>
                        </Link>
                        <Link href="https://github.com/InnoNodo">
                            <img className="icon" src="/images/github.png" alt="Github Logo"/>
                        </Link>
                        <Link href="https://vk.com/nodoser">
                            <img className="icon" src="/images/vk.png" alt="VK Logo"/>
                        </Link>
                        <Link href={'/comics'}>
                            <button>Funny comics</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SocialNetworks;
