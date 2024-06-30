import { Comic, EmailResponse } from './types';

document.getElementById('emailForm')?.addEventListener('submit', function(event: Event) {
    event.preventDefault();

    const emailInput = document.getElementById('email') as HTMLInputElement;
    const email = emailInput.value;

    const encodedEmail = encodeURIComponent(email);

    const url = `https://fwd.innopolis.university/api/hw2?email=${encodedEmail}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json() as Promise<EmailResponse>;
        })
        .then(data => {
            const comicUrl = `https://fwd.innopolis.university/api/comic?id=${data}`;
            return fetch(comicUrl);
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json() as Promise<Comic>;
        })
        .then(comicData => {
            console.log('Comic Data:', comicData); // Добавили лог

            const comicImage = document.getElementById('comicImage') as HTMLImageElement;
            const comicTitle = document.getElementById('comicTitle') as HTMLHeadingElement;
            const comicDate = document.getElementById('comicDate') as HTMLParagraphElement;

            comicImage.src = comicData.img;
            comicImage.alt = comicData.alt;

            comicTitle.textContent = `Title: ${comicData.safe_title}`;

            const uploadDate = new Date(parseInt(comicData.year), parseInt(comicData.month) - 1, parseInt(comicData.day));
            console.log(uploadDate);
            comicDate.textContent = `Uploaded on: ${uploadDate.toLocaleDateString()}`
        })
});
