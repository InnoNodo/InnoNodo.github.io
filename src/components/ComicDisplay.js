import React, { useState } from 'react';
import axios from 'axios';

const ComicDisplay = ({ initialComic }) => {
  const [email, setEmail] = useState('');
  const [comic, setComic] = useState(initialComic);

  return (
    <div>
      {comic && (
        <div className="container-for-comics">
          <img id="comicImage" src={comic.img} alt={comic.alt} />
          <h1 id="comicTitle">Title: {comic.safe_title}</h1>
          <p id="comicDate">
            Uploaded on: {new Date(comic.year, comic.month - 1, comic.day).toLocaleDateString()}
          </p>
        </div>
      )}
    </div>
  );
};

export default ComicDisplay;
