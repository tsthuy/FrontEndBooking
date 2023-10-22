import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss'
import { getAllUsers } from '../../services/userService'
class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = { // save value and use state in render => render in render()
            arrUsers: []
        }
    }

    //set gia cua bien truoc khi render ra man hanh
    async componentDidMount() {
        let response = await getAllUsers('All');
        if (response && response.errCode === 0) {
            this.setState({
                arrUsers: response.users
            })
        }
    }

    //tao ra web 
    render() {
        console.log('check render :', this.state)
        let arrUsers = this.state.arrUsers;
        return (
            <div className="users-container">
                <div className='title text-center'>Manage users With ReactJS</div>
                <div className='users-table mt-3 mx-2'>
                    <table id="customers">
                        <tr>
                            <th>Email</th>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>Address</th>
                            <th>Action</th>
                        </tr>

                        {
                            arrUsers && arrUsers.map((item, index) => {
                                console.log('tstHuy', item, index)
                                return (
                                    <tr className='divClass'>
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
