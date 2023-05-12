import React from "react";
import {getGalleryFetch} from '../Api/Api'

class ImageGallery extends React.Component{

state={}

async componentDidUpdate(prevProps){
    if(prevProps.searchText !== this.props.searchText){
const {hits} = await getGalleryFetch(this.props.searchText)
console.log(hits);
    }
}



render(){
    return
}
}

export default ImageGallery
