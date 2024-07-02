import React, { useState } from 'react';
import { Comic, EmailResponse } from '../types';
import axios from "axios";

const ComicDisplay: React.FC = () => {
    const [email, setEmail] = useState('');
    const [comic, setComic] = useState<Comic | null>(null);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            const encodedEmail = encodeURIComponent(email);
            const url = `https://fwd.innopolis.university/api/hw2?email=${encodedEmail}`;

            const emailResponse = await axios.get<EmailResponse>(url);
            const comicUrl = `https://fwd.innopolis.university/api/comic?id=${emailResponse.data}`;
            const comicResponse = await axios.get<Comic>(comicUrl);

            setComic(comicResponse.data);
        } catch (error) {
            console.error("Error fetching comic data:", error);
        }
    };

    return (
        <div>
            <form id="emailForm" onSubmit={handleSubmit}>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit">Submit</button>
            </form>

            {comic && (
                <div className={"container-for-comics"}>
                    <img id="comicImage" src={comic.img} alt={comic.alt} />
                    <h1 id="comicTitle">Title: {comic.safe_title}</h1>
                    <p id="comicDate">
                        Uploaded on: {new Date(parseInt(String(comic.year)), parseInt(String(comic.month)) - 1, parseInt(String(comic.day))).toLocaleDateString()}
                    </p>
                </div>
            )}
        </div>
    );
};

export default ComicDisplay;
