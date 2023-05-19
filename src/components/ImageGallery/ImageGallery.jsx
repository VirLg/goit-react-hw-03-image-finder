import React from 'react';
import PropTypes from 'prop-types';
import ImageItem from '../ImageItem/ImageItem'
import {ImageGalleryCss} from './ImageGallery.styled'
// import ModalWindow from 'components/ModalWindow/ModalWindov';



class ImageGallery extends React.Component{
  state={
    images:null
  }


componentDidUpdate(prevProps, prevState){
  if(prevState.images!==this.props.options){
    this.setState({images:this.props.options})
  }
}


  render(){
    return (
      
        <ImageGalleryCss className="gallery">
          <ImageItem card={this.state.images} />
          
        </ImageGalleryCss>
     
    )
  }

}

export default ImageGallery;

ImageGallery.propTypes={
  options:PropTypes.array.isRequired,
}

// class ImageGallery extends React.Component{
//   state={
//     images:[]
//       }

//     handleClick = ({arr}) =>{
//       this.props.arr()
//         console.log(this.props.arr);

//     this.setState({images:arr})

//     }

//     handleState=()=>{

//     }
//   render(){
//     return(
//       <>
//            <ul className="gallery" >
//              <ImageItem props={this.handleClick}/>
//            </ul>
//          </>
//     )
//   }

// }

// export default ImageGallery

// ================================
// import React from 'react';
// import { ImageItem } from '../ImageItem/ImageItem';

// export const ImageGallery = ({ data }) => {
//   ImageItem(data);

//   return (
//     <>
//       <ul className="gallery">
//         <ItemImage props={data} />
//       </ul>
//     </>
//   );
// };
