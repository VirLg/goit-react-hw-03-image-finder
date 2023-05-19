import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import Button from 'components/Button/Button';

import ImageGallery from 'components/ImageGallery/ImageGallery';
// import ItemImage from './components/ImageItem/ImageItem';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '34368263-756a5eb3a3e360b335b61bac8';

class App extends React.Component {
  state = {
    searchText: '',

    images: [],
    loading: false,
    error: null,
    page:1,
  };

  heandleSearch = searchText => {
    this.setState({
      searchText: searchText,
    });
  };

  async componentDidUpdate(prevProps, prevState) {
    console.log('!!!!!!!!!!!!');
    const { searchText,page } = this.state;

    if (prevState.searchText !== searchText||prevState.page !== page) {
      try {
        this.setState({ loading: true });
        const data = await fetch(`${BASE_URL}/?key=${API_KEY}&q=${searchText}&per_page=12&page=${page}`);
        if (data.status !== 200) {
          return Promise.reject(new Error('Search is empty'));
        }
        const resp = await data.json();
        return await this.getFetch(resp);
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ loading: false });
      }
    }

    
  }

  getFetch = ({ hits }) => {
    console.log(hits);

       this.setState(prevState=>({ images:[...prevState.images,...hits]}));
  };



handleLoadMore=(number)=>{
  console.log(number);
this.setState({page:number})
} 

  render() {
    return (
      <div className="App">
        {this.state.error && <h1>{this.state.error.message}</h1>}
        {this.state.loading && <div>загружаем</div>}
        <SearchBar onSubmit={this.heandleSearch} />

        <ImageGallery options={this.state.images} />
       <Button page={this.handleLoadMore}/>
      </div>
    );
  }
}

export default App;

// {this.state.images && <ImageItem images={this.state.images} />}
// {
//   /* {<ItemImage options={this.state.images}/>} */
// }
