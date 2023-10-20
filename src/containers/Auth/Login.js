import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import './Login.scss';
import { FormattedMessage } from 'react-intl';
import { divide } from 'lodash';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isShowPass: false,
            isShow: false,
        }
    }
    handleOnchangeUser = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    handleOnchangePass = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    handleLogin = () => {
        console.log('username : ', this.state.username, ', password : ', this.state.password)
        console.log('all state', this.state)
    }
    handleShowPass = () => {
        this.setState({
            isShowPass: !this.state.isShowPass,
            isShow: !this.state.isShow
        })
    }
    render() {
        return (
            <div className='login-background'>
                <div className='login-container'>
                    <div className='login-content'>
                        <h1 className='login-name'>Login</h1>
                        <form>
                            <label>User Name</label>
                            <input placeholder='Enter Your Username' type='text' className='form-control user' value={this.state.username}
                                onChange={(event) => {
                                    this.handleOnchangeUser(event);
                                }}
                            ></input>
                            <div className='show'>
                                <div>
                                    <label>Password</label>

                                    <input placeholder='Enter Your Password' type={this.state.isShowPass ? 'text' : 'password'} className='form-control pass'
                                        value={this.state.password}
                                        onChange={(event) => {
                                            this.handleOnchangePass(event);
                                        }}
                                    ></input>
                                </div>
                                <div onClick={() => {
                                    this.handleShowPass();
                                }}>

                                    <i class={this.state.isShow ? "fas fa-eye" : "fas fa-eye-slash"}></i>
                                </div>
                            </div>

                            <button className='form-control submit' type='submit'
                                onClick={() => {
                                    this.handleLogin();
                                }}
                            >Login</button>
                            <a className='forget' href='#'>Forget your password?</a>
                            <span className='text-center'>Or login with:</span>
                            <div className='social-icon'>
                                <i class="fab fa-google-plus-g google"></i>
                                <i class="fab fa-facebook-f facebook"></i>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        lang: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
