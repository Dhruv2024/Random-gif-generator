import axios from 'axios';
import { useEffect, useState } from 'react'

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

function useGif(tag) {
    const [gif, setGif] = useState('');
    const [loading, setLoading] = useState(false);

    async function fetchData(tag) {
        setLoading(true);

        const temp = await axios.get(tag ? `${url}&tag=${tag}` : url);
        // console.log(temp);
        const imageSource = temp.data.data.images.downsized_large.url;
        // console.log(imageSource)
        setGif(imageSource);
        setLoading(false);
    }

    useEffect(() => {
        fetchData()
    }, [])

    return { gif, loading, fetchData };
}

export default useGif;