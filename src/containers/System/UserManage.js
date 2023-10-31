import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss'
import { getAllUsers, createNewUserService, deleteUser, editUserService } from '../../services/userService'
import ModalUser from './ModalUser';
import { emitter } from '../../utils/emitter';
import ModalEditUser from './ModalEditUser';
import { assign } from 'lodash';
class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = { // save value and use state in render => render in render()
            arrUsers: [],
            isOpenModal: false,
            isOpenEditUser: false
        }
    }

    //set gia cua bien truoc khi render ra man hanh
    async componentDidMount() {
        await this.getAllUsersFromReact();
    }
    getAllUsersFromReact = async () => {
        let response = await getAllUsers('All');
        if (response && response.errCode === 0) {
            this.setState({
                arrUsers: response.users
            })
        }
    }
    handleAddNewUser = () => {
        this.setState({
            isOpenModal: true
        })
    }
    handleToggleUser = () => {
        this.setState({
            isOpenModal: !this.state.isOpenModal
        })
    }
    handleToggleEditUser = () => {
        this.setState({
            isOpenEditUser: !this.state.isOpenEditUser
        })
    }
    createNewUser = async (data) => {
        try {
            let response = await createNewUserService(data);
            if (response && response.errCode !== 0) {
                alert(response.errMessage)
            }
            else {
                await this.getAllUsersFromReact()
                this.setState({
                    isOpenModal: false
                })
                emitter.emit('EVENT_CLEAR_MODAL_DATA', { 'id': 'your id' })
            }

        } catch (error) {

        }
    }
    handleDeleteUser = async (item) => {
        try {
            let response = await deleteUser(item.id);
            if (response && response.errCode === 0) {
                await this.getAllUsersFromReact();
            } else {
                alert(response.errMessage)
            }
        } catch (e) {
            console.log(e);
        }

    }
    handleEditUser = (user) => {
        this.setState({
            isOpenEditUser: true,
            dataUser: user,
        })
    }

    doEditUser = async (data) => {
        try {
            let response = await editUserService(data);
            if (response && response.errCode === 0) {
                this.setState({
                    isOpenEditUser: false
                })
                await this.getAllUsersFromReact();

            }
            else {
                alert(response.errMessage)
            }

        } catch (e) {
            console.log(e)
        }
    }
    //tao ra web 
    render() {
        let arrUsers = this.state.arrUsers;
        return (
            <div className="users-container">
                <ModalUser
                    isOpen={this.state.isOpenModal}
                    toggleFromParent={this.handleToggleUser}
                    createNewUser={this.createNewUser}
                />
                {this.state.isOpenEditUser &&
                    <ModalEditUser
                        isOpen={this.state.isOpenEditUser}
                        toggleFromEditUserParent={this.handleToggleEditUser}
                        currentUser={this.state.dataUser}
                        editUser={this.doEditUser}
                    />}
                <div className='title text-center'>Manage users With ReactJS</div>
                <div className='mx-1'>
                    <button className='btn btn-primary px-3'
                        onClick={() => this.handleAddNewUser()}
                    ><i className="fas fa-user-plus px-2"></i> Add new user</button>
                </div>
                <div className='users-table mt-3 mx-2'>
                    <table id="customers">
                        <tbody>
                            <tr>
                                <th>Email</th>
                                <th>FirstName</th>
                                <th>LastName</th>
                                <th>Address</th>
                                <th>Action</th>
                            </tr>

                            {
                                arrUsers && arrUsers.map((item, index) => {
                                    // console.log('tstHuy', item, index)
                                    return (
                                        <tr className='divClass' key={index}>
                                            <td> {item.email} </td>
                                            <td>{item.firstName}</td>
                                            <td> {item.lastName} </td>
                                            <td> {item.address} </td>
                                            <td>
                                                <button onClick={() => { this.handleEditUser(item) }} className='btn-edit'><i className="fas fa-edit"></i></button>
                                                <button onClick={() => { this.handleDeleteUser(item) }} className='btn-delete'><i className="fas fa-trash-alt"></i></button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>

                    </table>
                </div>
            </div>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
