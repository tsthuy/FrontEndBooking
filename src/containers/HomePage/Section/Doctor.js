import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import './Doctor.scss'
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SpecialtyLogo from '../../../assets/images/SPECIALTY/112457-co-xuong-khop.jpg'
class Doctor extends Component {

    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 2
        };

        return (
            <div className='cover-doctor'>
                <div className='section-specialty'>
                    <div className='specialty-container'>
                        <div className='specialty-header'><div className='header-title'><h2>Cơ Sở Y Tế Nổi Bật</h2></div><div className='more'>Tìm Kiếm</div></div>
                        <div className='specialty-body'>
                            <Slider {...settings}>
                                <div className='specialty-customize'>
                                    <div className='bg-image-doctor'></div>
                                    <div className='bg-title'>Cơ xương khớp 1</div>
                                </div>
                                <div className='specialty-customize'>
                                    <div className='bg-image-doctor'></div>
                                    <div className='bg-title'>Cơ xương khớp 2</div>
                                </div>
                                <div className='specialty-customize'>
                                    <div className='bg-image-doctor'></div>
                                    <div className='bg-title'>Cơ xương khớp 3</div>
                                </div>
                                <div className='specialty-customize'>
                                    <div className='bg-image-doctor'></div>
                                    <div className='bg-title'>Cơ xương khớp 4</div>
                                </div>
                                <div className='specialty-customize'>
                                    <div className='bg-image-doctor'></div>
                                    <div className='bg-title'>Cơ xương khớp 5</div>
                                </div>
                                <div className='specialty-customize'>
                                    <div className='bg-image-doctor'></div>
                                    <div className='bg-title'>Cơ xương khớp 6</div>
                                </div>
                            </Slider>

                        </div>


                    </div>


                </div>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Doctor);
