import React from 'react';
import ComicDisplay from "../components/ComicDisplay";
import axios from 'axios';

const ComicsPage = ({ initialComic }) => {
  return (
    <div>
      <ComicDisplay initialComic={initialComic} />
    </div>
  );
};

export async function getServerSideProps() {
  const email = "k.nosov@innopolis.university";
  const encodedEmail = encodeURIComponent(email);
  const url = `https://fwd.innopolis.university/api/hw2?email=${encodedEmail}`;

  try {
    const emailResponse = await axios.get(url);
    const comicUrl = `https://fwd.innopolis.university/api/comic?id=${emailResponse.data}`;
    const comicResponse = await axios.get(comicUrl);

    return {
      props: {
        initialComic: comicResponse.data,
      },
    };
  } catch (error) {
    console.error("Error fetching initial comic data:", error);
    return {
      props: {
        initialComic: null,
      },
    };
  }
}

export default ComicsPage;
