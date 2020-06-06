import React from 'react'
import Modal from 'react-modal';

var subtitle;
const [modalIsOpen,setIsOpen] = React.useState(false);

class Logout extends React.Component {
    
    openModal() {
        setIsOpen(true);
      }
     
    afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
      }
     
    closeModal(){
        setIsOpen(false);
      }

    render(){
        return(
            <div>
                <button onClick={this.openModal}>Open Modal</button>
                <Modal
                isOpen={modalIsOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                contentLabel="Example Modal">
                <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2>
                <button onClick={this.closeModal}>close</button>
                <div>I am a modal</div>
                <form>
                    <input />
                    <button>tab navigation</button>
                    <button>stays</button>
                    <button>inside</button>
                    <button>the modal</button>
                </form>
                </Modal>
            </div>
        )
    }

}

export default Logout
