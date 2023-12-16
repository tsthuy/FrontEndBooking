import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import './About.scss'
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo1 from "../../../assets/images/about/vtv1.webp"
import logo2 from "../../../assets/images/about/vtv1 (1).webp"
import logo3 from "../../../assets/images/about/vnexpress.webp"
import logo4 from "../../../assets/images/about/infonet.webp"
import logo5 from "../../../assets/images/about/ictnews.webp"
import logo6 from "../../../assets/images/about/cuc-cong-nghe-thong-tin-bo-y-te-2.webp"
import logo7 from "../../../assets/images/about/165432-vtcnewslogosvg.webp"
class About extends Component {

    render() {


        return (
            <div className='about-cover'>
                <h2>Truyền thông nói về Booking Care</h2>
                <div className='about-content-cover'>
                    <div className='about-content-left'>
                        <iframe width="592" height="332"
                            src="https://www.youtube.com/embed/FyDQljKtWnI"
                            title="CÀ PHÊ KHỞI NGHIỆP VTV1 - BOOKINGCARE - HỆ THỐNG ĐẶT LỊCH KHÁM TRỰC TUYẾN"
                            frameBorder="0" allow="accelerometer; autoplay; clipboard-write; 
                        encrypted-media; gyroscope;
                         picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                    <div className='about-content-right'>
                        <div className='right-cover'>
                            <div className='social-left'>
                                <a><img src={logo1}></img></a>
                                <a><img src={logo3}></img></a>
                                <a><img src={logo6}></img></a>
                                <a><img src={logo1}></img></a>

                            </div>
                            <div className='social-right'>
                                <a><img src={logo5}></img></a>
                                <a><img src={logo7} height="34px"></img></a>
                                <a><img src={logo4}></img></a>

                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
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

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
