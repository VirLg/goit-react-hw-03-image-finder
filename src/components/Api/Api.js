const BASE_URL= "https://pixabay.com/api/";
const API_KEY = '34368263-756a5eb3a3e360b335b61bac8';

export const getGalleryFetch=async(text)=>{
    try{
      
    const data= await fetch(`${BASE_URL}/?key=${API_KEY}&q=${text}`)
    
    if(data.status===200){
    return await data.json()
    }
    throw new Error(data.status)
    } 
    catch(error){
        console.log(error.status);
    }
}
 
