

import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar'
import ImageGallery from './components/ImageGallery/ImageGallery'
import ModalWindow from 'components/ModalWindow/ModalWindov';

class App extends React.Component {
state={
  searchText:'',
  showModal:false,
}


toggleModal=()=>{
  this.setState({
    showModal:!this.state.showModal,
  })
}

heandleSearch=(searchText)=>{

  this.setState({
    searchText:searchText,
  })
}

handleModalClick=()=>{
  
}

render(){
  return (
  
    <div className="App">
      <SearchBar onSubmit={this.heandleSearch}/>
      <ImageGallery searchText={this.state.searchText} />
      {this.state.showModal&&<ModalWindow/>}
    </div>
    )}
}

export default App;
