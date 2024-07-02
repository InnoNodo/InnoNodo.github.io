import React from 'react';

const Bio: React.FC = () => (
    <div>
        <div className="wrapper">
            <img src="images/kirill.jpg" alt="Portrait" className="circular-image" />

            <div className="paragraph-heading">
                About me:
                <div className="paragraph-text">
                    I am a first year bachelor student of Innopolis University.
                    I was born in a little town called Nizhnekamsk. I like to play the guitar and learn new skills in the IT sphere.
                </div>
            </div>

            <div className="paragraph-heading">
                Skills:
                <div>
                    <ul className="custom-ul">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>Telegram bots</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
);

export default Bio;
