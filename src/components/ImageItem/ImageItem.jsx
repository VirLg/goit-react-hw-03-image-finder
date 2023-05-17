export const ImageItem=(props)=>{
    const { images } = props;
    return(<>
      {images.map(({ id, previewURL, tags }) => (
            <li key={id}>
              <img src={previewURL} alt={tags} />
            </li>
          ))}
    </> )
    
   
      
}