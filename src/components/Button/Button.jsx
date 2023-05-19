import { Component } from "react"
import {ButtonCss} from './Button.styled'
class Button extends Component{
state={
    page:2,
}

increment=()=>{
    this.setState(()=>({
        page:this.state.page +1,
    }))
    this.handleOnClick(this.state.page)
}


handleOnClick=()=>{
    
    this.props.page(this.state.page)
}

render(){
    return(
        <>
    <ButtonCss type="button" onClick={this.increment} >Load More</ButtonCss>
    </>
    )
}
}

export default Button