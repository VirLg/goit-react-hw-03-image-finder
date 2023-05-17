import React from "react";
import {ModalBackdrop, ModalItem} from './ModalWindow.styled'

class ModalWindow extends React.Component{
  
componentDidMount(){
    document.addEventListener("keydown",this.handlePressEscape)
}
handlePressEscape=(e)=>{
console.log('press');
    if(e.code==='Escape') this.props.close()

}



    render(){
        return(
        
<ModalBackdrop className="Modal__Backdrop">
<ModalItem className="Modal__Item">
<img src="" alt="" />
</ModalItem>
</ModalBackdrop>

        )
    }
}

export default ModalWindow