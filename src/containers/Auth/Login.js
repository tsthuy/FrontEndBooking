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
    }


    render() {
        return (
            <div className='login-background'>
                <div className='login-container'>
                    <div className='login-content'>
                        <h1 className='login-name'>Login</h1>
                        <form>
                            <label>User Login</label>
                            <input placeholder='Enter Your Username' type='password' className='form-control user'></input>
                            <label>Password</label>

                            <input placeholder='Enter Your Password' type='password' className='form-control pass'></input>
                            <button className='form-control submit' type='submit'>Login</button>
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
