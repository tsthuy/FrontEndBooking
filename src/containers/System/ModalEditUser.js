import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Alert } from 'reactstrap';

import React, { Component } from 'react';

import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { every } from 'lodash';
import { emitter } from '../../utils/emitter';
import _ from 'lodash'
class ModalEditUser extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: '',
        }
        this.listenToEmitter()
    }
    resetInputCreateNewUser = () => {
        this.setState({
            id: '',
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: '',
        })
    }
    listenToEmitter = () => {
        emitter.on('EVENT_CLEAR_MODAL_DATA', () => {
            this.resetInputCreateNewUser();
        })
    }
    componentDidMount() {
        console.log('this form DidMount', this)
        let user = this.props.currentUser
        if (user && !_.isEmpty(user)) {
            this.setState({
                id: user.id,
                email: user.email,
                password: 'harcode',
                firstName: user.firstName,
                lastName: user.lastName,
                address: user.address
            })
        }


    }

    toggle = () => {
        this.props.toggleFromEditUserParent()
    }
    handleOnChangeInput = (event, id) => {

        //bad code
        // this.state[id] = event.target.value;
        // this.setState({
        //     ...this.state
        // }, () => {
        //     console.log("bad code :", this.state)

        // })
        let copyState = {
            ...this.state
        }
        copyState[id] = event.target.value
        this.setState({
            ...copyState
        })
        //good code
    }
    checkValidateInput = () => {
        let isValid = true;
        let arrInput = ['email', 'password', 'firstName', 'lastName', 'address']
        for (let i = 0; i < arrInput.length; i++) {
            // if(!this.state[arrInput])
            if (!this.state[arrInput[i]]) {
                isValid = false
                alert("Missing parameter: " + arrInput[i]);
                break;
            }
        }
        return isValid;
    }
    handleSaveUser = () => {
        let isValid = this.checkValidateInput();
        if (isValid === true) {
            this.props.editUser(this.state);
            console.log('check in edit user', this.state)
        }

    }
    handleAddNewUser = () => {
        let isValid = this.checkValidateInput();
        if (isValid === true) {
            this.props.createNewUser(this.state);
        }
        else {
            console.log("Error")
        }
    }

    render() {
        return (
            <Modal

                isOpen={this.props.isOpen}
                toggle={() => { this.toggle() }}
                className={'modal-user-container'}
                size='lg'
            >

                <ModalHeader toggle={() => { this.toggle() }}>Edit User</ModalHeader>
                <ModalBody>

                    <div className='modal-user-body'>
                        <div className='input-container'>
                            <label>Email</label>
                            <input disabled type='text' value={this.state.email}
                                onChange={(event, id) => {
                                    this.handleOnChangeInput(event, "email")
                                }}
                            />
                        </div>
                        <div className='input-container'>
                            <label>Password</label>
                            <input disabled type='password' value={this.state.password}
                                onChange={(event, id) => {
                                    this.handleOnChangeInput(event, "password")
                                }}
                            />
                        </div>
                        <div className='input-container'>
                            <label>FirstName</label>
                            <input type='text' value={this.state.firstName}
                                onChange={(event, id) => {
                                    this.handleOnChangeInput(event, "firstName")
                                }} />
                        </div>
                        <div className='input-container'>
                            <label>LastName</label>
                            <input type='text' value={this.state.lastName}
                                onChange={(event, id) => {
                                    this.handleOnChangeInput(event, 'lastName')
                                }}
                            />
                        </div>
                        <div className='input-container max-width-input '>
                            <label>Address</label>
                            <input type='text' value={this.state.address}
                                onChange={(event, id) => {
                                    this.handleOnChangeInput(event, "address")
                                }}
                            />
                        </div>
                    </div>

                </ModalBody>
                <ModalFooter>
                    <Button
                        className='px-3' color="primary" onClick={() => { this.handleSaveUser() }}>
                        <i className="far fa-save px-2 py-2"></i>Save Changes
                    </Button>{' '}

                    <Button color="secondary" className='px-3 close' onClick={() => { this.toggle() }}>
                        Close
                    </Button>
                </ModalFooter>
            </Modal>
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);












