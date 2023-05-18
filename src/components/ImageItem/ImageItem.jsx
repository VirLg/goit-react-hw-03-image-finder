import { Component } from 'react';
import ModalWindow from '../ModalWindow/ModalWindov';

class ImageItem extends Component {
  state = {
    images: null,
    activeCard: null,
    toggleSwitch: false,
  };

  toggleModal = () => {
    this.setState({ toggleSwitch: !this.state.toggleSwitch });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.images !== this.props.card) {
      this.setState({ images: this.props.card });
    }
  }

  handleActivCard = largeImageURL => {
    if (largeImageURL) {
      this.setState({activeCard:largeImageURL})
      this.toggleModal();
    }

    console.log(largeImageURL);
    return largeImageURL;
  };

  render() {
    return (
      <>
        {this.state.images &&
          this.state.images.map(
            ({ id, previewURL, tags, largeImageURL }, idx) => (
              <li className="gallery__item" key={id}>
                <img
                  src={previewURL}
                  alt={tags}
                  onClick={() => this.handleActivCard(largeImageURL)}
                />
              </li>
            )
          )}
          
      {this.state.toggleSwitch&&<ModalWindow 
            itemCard={this.state.activeCard}/>}
      </>
    );
  }
}

export default ImageItem;

// const onClick=(evt)=>{

//     console.log(evt);
// }

// class ItemImage extends React.Component{

// handleClick = (options) =>{
// const{images}=options
// this.setState({images})

// console.log(images);
// }

//   render(){
//     return(<>
//      {this.state.images&&this.state.images.map(({ id, previewURL, tags }) => (
//   <li key={id}>
//     <img src={previewURL} alt={tags} />
//   </li>))

//   }
//   </>)
// }
// }

// export default ItemImage

// {images.map(({ id, previewURL, tags }) => (
//   <li key={id}>
//     <img src={previewURL} alt={tags} onClick={this.handleClick}/>
//   </li>
// ))}
