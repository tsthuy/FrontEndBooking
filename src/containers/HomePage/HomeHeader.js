import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss'
import { FormattedMessage } from 'react-intl';
import { LANGUAGES } from '../../utils/constant';
import { changeLanguageApp } from '../../store/actions/appActions';
import { lang } from 'moment';
class HomeHeader extends Component {
    changeLanguage = (language) => {
        this.props.changeLanguageAppRedux(language)
    }
    render() {
        let language = this.props.lang
        console.log('check lamguage', language);

        return (




            <React.Fragment>
                <div className='home-header-container'>
                    <div className='home-header-content'>
                        <div className='left-content'>
                            <i className="fas fa-bars"></i>
                            <div className='header-logo'></div>
                        </div>
                        <div className='center-content'>
                            <div className='child-center-content'>
                                <div><b><FormattedMessage id="homeheader.medical-specialty" /></b></div>
                                <div className='sub-title'><FormattedMessage id="homeheader.find-doctor" /></div>
                            </div>
                            <div className='child-center-content'>
                                <div><b><FormattedMessage id="homeheader.facility" /></b></div>
                                <div className='sub-title'><FormattedMessage id="homeheader.select-hospital" /></div>
                            </div>
                            <div className='child-center-content'>
                                <div><b><FormattedMessage id="homeheader.doctor" /></b></div>
                                <div className='sub-title'><FormattedMessage id="homeheader.select-package" /></div>
                            </div>
                            <div className='child-center-content'>
                                <div><b><FormattedMessage id="homeheader.Package" /></b></div>
                                <div className='sub-title'><FormattedMessage id="homeheader.general-check" /></div>
                            </div>
                        </div>
                        <div className='right-content'>

                            <div className='schedule'>
                                <div><i className="fas fa-calendar-check"></i></div>
                                <div><FormattedMessage id="homeheader.schedule" /></div>
                            </div>
                            {/* <div className='language'>
                            <div><i className="fas fa-language"></i></div>
                            <div>VN</div>
                        </div> */}
                            <div className='language'>
                                <div><i className="fas fa-globe"></i></div>
                                <div><span onClick={() => { this.changeLanguage(LANGUAGES.VI) }} className={language === LANGUAGES.VI ? "language-vi active" : "language-vi"}>VN</span> /
                                    <span onClick={() => { this.changeLanguage(LANGUAGES.EN) }} className={language === LANGUAGES.EN ? "language-en active" : "language-en"}>EN</span></div>
                            </div>
                            <div className='support'>
                                <div><i className="fas fa-question-circle"></i></div>
                                <div><FormattedMessage id="homeheader.help" /></div>
                            </div>
                        </div>

                    </div>
                </div >
                <div className='home-header-banner'>
                    <div className='shadow-cover-up'>
                        <div className='title1'>
                            <FormattedMessage id="banner.title1" />
                        </div>
                        <div className='title2'>
                            <FormattedMessage id="banner.title2" />
                        </div>
                        <div className='search'>
                            <i className="fas fa-search"></i>
                            <input type='text' placeholder='Tìm bác sĩ' />
                        </div>
                        {/* <div className='app-mobile'>
                                <div className='android'>

                                </div>
                                <div className='apple'>

                                </div>
                            </div> */}
                    </div>
                    <div className='shadow-down'>
                        <div className='options'>
                            <div className='option-cover'>
                                <div className='option-icon'><i className="fas fa-hospital"></i></div>
                                <div className='option-title'><FormattedMessage id="package.title1" /> <br></br><FormattedMessage id="package.title11" /></div>
                            </div>
                            <div className='option-cover'>
                                <div className='option-icon'><i className="fas fa-phone-volume"></i></div>
                                <div className='option-title'><FormattedMessage id="package.title2" /><br></br><FormattedMessage id="package.title12" /></div>
                            </div>
                            <div className='option-cover'>
                                <div className='option-icon'><i className="fas fa-file-medical"></i></div>
                                <div className='option-title'><FormattedMessage id="package.title3" /><br></br><FormattedMessage id="package.title13" /></div>
                            </div>
                            <div className='option-cover'>
                                <div className='option-icon'><i className="fas fa-vial"></i></div>
                                <div className='option-title'><FormattedMessage id="package.title4" /><br></br> <FormattedMessage id="package.title14" /></div>
                            </div>
                            <div className='option-cover'>
                                <div className='option-icon'><i className="fas fa-user-md"></i></div>
                                <div className='option-title'><FormattedMessage id="package.title5" /> <br></br><FormattedMessage id="package.title15" /></div>
                            </div>
                            <div className='option-cover'>
                                <div className='option-icon'><i className="fas fa-user-md"></i></div>
                                <div className='option-title'><FormattedMessage id="package.title6" /><br></br><FormattedMessage id="package.title16" /></div>
                            </div>
                            <div className='option-cover'>
                                <div className='option-icon'><i className="fas fa-procedures"></i></div>
                                <div className='option-title'><FormattedMessage id="package.title7" /><br></br><FormattedMessage id="package.title17" /></div>
                            </div>
                            <div className='option-cover'>
                                <div className='option-icon'><i className="fas fa-briefcase-medical"></i></div>
                                <div className='option-title'><FormattedMessage id="package.title18" /><br></br> <FormattedMessage id="package.title8" /></div>
                            </div>
                            <div className='option-cover'>
                                <div className='option-icon'><i className="fas fa-notes-medical"></i></div>
                                <div className='option-title'><FormattedMessage id="package.title9" /><br></br><FormattedMessage id="package.title19" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>




        );
    }

}

const mapStateToProps = state => {
    console.log("language", state.app);
    return {
        isLoggedIn: state.user.isLoggedIn,
        lang: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
