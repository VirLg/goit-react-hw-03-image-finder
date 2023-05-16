import React from 'react';
import { getGalleryFetch } from '../Api/Api';

class ImageGallery extends React.Component {
  state = {
    images: [],
    error:'',
  };

  async componentDidUpdate(prevProps) {
    if (prevProps.searchText !== this.props.searchText) {
      try {
        const { hits } = await getGalleryFetch(this.props.searchText);
          this.setState({images: hits,});
 console.log(this.state.images);
 
      } catch (error) {
        this.setState({ error });
      }
    }
    
  }
  render() {
    console.log(this.state.images);
    return (
      this.state.images.length > 0 && (
        <ul className="gallery">
          {this.state.images.map(({ id, previewURL, tags }) => (
            <li key={id}>
              <img src={previewURL} alt={tags} />
            </li>
          ))}
        </ul>
      )
    );
  }
}

export default ImageGallery;
