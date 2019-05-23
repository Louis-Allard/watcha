import React from "react";
import { Button, Modal, ModalHeader,ModalBody,ModalFooter, Input } from 'reactstrap';

class ModalCreatList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          show: false,
        };    
        this.handleToggle = this.handleToggle.bind(this);
      };    
    render() {
        console.log('this.state.show in ModalCreatList => ' + this.props.show);
        return (
            <React.Fragment>
                <Modal isOpen={this.props.show} >
                    <ModalHeader>
                    Choose list name
                    </ModalHeader>
                    <ModalBody>
                        <Input type="text" name="list" placeholder="List name" />
                    </ModalBody>
                    <ModalFooter>
                        <Button variant="secondary" onClick={this.state.handleToggle}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.state.handleToggle}>
                            Save List
                        </Button>
                    </ModalFooter>
                </Modal>
            </React.Fragment>
        )
    };
};

export default ModalCreatList;