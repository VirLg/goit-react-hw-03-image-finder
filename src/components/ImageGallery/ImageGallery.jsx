import React from 'react';
import { getGalleryFetch } from '../Api/Api';


class ImageGallery extends React.Component {
  state = {
    images: [],
    error: '',
    isLoading:false,
  };

  async componentDidUpdate(prevProps) {
    if (prevProps.searchText !== this.props.searchText) {
      try {
        this.setState({isLoading:true})
        const { hits } = await getGalleryFetch(this.props.searchText);

        if (true) {
          this.setState({ images: hits });
          return;
        }
      } catch (error) {
        this.setState({ error: error.message });
      }
    }
  }

  render() {
    const { images,isLoading } = this.state;

    return (<>{
      isLoading&&(
        <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      )
    }
      <ul className="gallery">
        {images.map(({ id, previewURL, tags }) => (
          <li key={id}>
            <img src={previewURL} alt={tags} />
          </li>
        ))}
      </ul>
      </>);
  }
}

export default ImageGallery;
