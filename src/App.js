

import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar'
import ImageGallery from './components/ImageGallery/ImageGallery'

class App extends React.Component {
state={
  searchText:'',
}

heandleSearch=(searchText)=>{

  this.setState({
    searchText:searchText,
  })
}


render(){
  return (
    <div className="App">
      <SearchBar onSubmit={this.heandleSearch}/>
      <ImageGallery searchText={this.state.searchText} />
    </div>
  )}
}

export default App;
