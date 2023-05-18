import React from 'react';
import { ModalBackdrop, ModalItem } from './ModalWindow.styled';

class ModalWindow extends React.Component {
  state = {
    item: null,
    close:true,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.item !== this.props.itemCard) {
      this.setState({ item: this.props.itemCard });
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handlePressEscape);
    this.setState({ item: this.props.itemCard })
  }



  handlePressEscape = e => {
    console.log('press');
    if (e.code === 'Escape') this.setState({close:false});
  };

  render() {
    return (<>
     { this.state.close&&<ModalBackdrop className="Modal__Backdrop">
     <ModalItem className="Modal__Item">
       <img src={this.state.item} alt="" />
     </ModalItem>
   </ModalBackdrop>}
   </>);
  }
}

export default ModalWindow;
