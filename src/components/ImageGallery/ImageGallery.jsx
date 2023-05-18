import React from 'react';
import ImageItem from '../ImageItem/ImageItem'
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
      <>
        <ul className="gallery">
          <ImageItem card={this.state.images} />
          
        </ul>
      </>
    )
  }

}

export default ImageGallery;

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
