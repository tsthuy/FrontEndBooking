import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss'
import { getAllUsers, createNewUserService } from '../../services/userService'
import ModalUser from './ModalUser';
class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = { // save value and use state in render => render in render()
            arrUsers: [],
            isOpenModal: false
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
            }

        } catch (error) {

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
                                                <button className='btn-edit'><i className="fas fa-edit"></i></button>
                                                <button className='btn-delete'><i className="fas fa-trash-alt"></i></button>
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
