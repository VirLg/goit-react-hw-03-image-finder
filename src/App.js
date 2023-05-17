import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import { ImageItem } from 'components/ImageItem/ImageItem';


const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '34368263-756a5eb3a3e360b335b61bac8';

class App extends React.Component {
  state = {
    searchText: '',
    showModal: false,
    images: null,
  };

  heandleSearch = searchText => {
    this.setState({
      searchText: searchText,
    });
  };

  async componentDidUpdate(prevProps, prevState) {
    const { searchText } = this.state;

    if (prevState.searchText !== searchText) {
      try {
        const data = await fetch(`${BASE_URL}/?key=${API_KEY}&q=${searchText}`);
        if (data.status === 200) {
          const resp = await data.json();
          return await this.getFetch(resp);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  getFetch = ({ hits }) => {
    this.setState({ images: hits });
  };
  render() {
    return (
      <div className="App">
        <SearchBar onSubmit={this.heandleSearch} />
        {this.state.images && <ImageItem images={this.state.images} />}
      </div>
    );
  }
}

export default App;
