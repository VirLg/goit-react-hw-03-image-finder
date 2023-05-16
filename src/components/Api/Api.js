const BASE_URL= "https://pixabay.com/api/";
const API_KEY = '34368263-756a5eb3a3e360b335b61bac8';

export const getGalleryFetch=async(text)=>{
    console.log(text);
    const data= await fetch(`${BASE_URL}/?key=${API_KEY}&q=${text}`)
    return await data.json()
}

