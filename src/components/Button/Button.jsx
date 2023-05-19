import { Component } from "react"

class Button extends Component{
state={
    page:1,
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
    <button type="button" onClick={this.increment}>Load More</button>
    </>
    )
}
}

export default Button