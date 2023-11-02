import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import './HandBook.scss'
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class HandBook extends Component {

    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1
        };

        return (
            <div className='handbook-cover'>
                <div className='specialty-container'>
                    <div className='specialty-header'><div className='header-title'><h2>Cẩm Nang</h2></div><div className='more'>Xem Thêm</div></div>
                    <div className='specialty-body'>
                        <Slider {...settings}>
                            <div className='specialty-customize'>
                                <div className='bg-image-handbook'></div>
                                <div className='bg-title'>Cơ xương khớp 1</div>
                            </div>
                            <div className='specialty-customize'>
                                <div className='bg-image-handbook'></div>
                                <div className='bg-title'>Cơ xương khớp 2</div>
                            </div>
                            <div className='specialty-customize'>
                                <div className='bg-image-handbook'></div>
                                <div className='bg-title'>Cơ xương khớp 3</div>
                            </div>
                            <div className='specialty-customize'>
                                <div className='bg-image-handbook'></div>
                                <div className='bg-title'>Cơ xương khớp 4</div>
                            </div>
                            <div className='specialty-customize'>
                                <div className='bg-image-handbook'></div>
                                <div className='bg-title'>Cơ xương khớp 5</div>
                            </div>
                            <div className='specialty-customize'>
                                <div className='bg-image-handbook'></div>
                                <div className='bg-title'>Cơ xương khớp 6</div>
                            </div>
                        </Slider>

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

export default connect(mapStateToProps, mapDispatchToProps)(HandBook);
