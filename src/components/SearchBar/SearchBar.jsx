import React from "react";

class SearchBar extends React.Component{
    state={
value:'',
    }

heandleChange=({target})=>{
const {value}=target;
this.setState({value:value,})
}    

handleSubmit =(evt)=>{
    evt.preventDefault();

    this.props.onSubmit(this.state.value)
    }

    render(){
        return(<header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>
      
          <input
            className="input"
            type="text"
           
            placeholder="Search images and photos"
            value={this.state.value}
           onChange={this.heandleChange}
            
          />
        </form>
      </header>)
    }
}

export default SearchBar