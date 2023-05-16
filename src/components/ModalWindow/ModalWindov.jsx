const { Component, Children } = require("react");

class ModalWindow extends Component{
componentDidMount(){
    document.addEventListener("keydown",this.handlePressEscape)
}
handlePressEscape=(e)=>{
console.log('press');
    if(e.code==='Escape') this.props.close()

}

    render(){
        return(
        <div className="overlay" onClick={this.close}>
  <div className="modal">
    <img src="" alt="" />
  </div>
</div>
        )
    }
}

export default ModalWindow