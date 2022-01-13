import React, { Component } from "react";
import {Link} from "react-router-dom";

class HeaderTop extends Component {
    onClick = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
    }
    render() {
        var {checkLogin, order} = this.props;
    	return(
    		<div className="header__top">
            <div className="header__top-contact">
                <div className="header__top-hotline">
                    <i className="fas fa-headphones-alt"></i> 
                    <span className="hide-mobile-tablet">Hotline:</span><a> 0386701897</a>
                </div>
                <div className="header__top-email hide-mobile-tablet">
                    <i className="far fa-envelope"></i> 
                    Email:<a > abcd@biznoithat.com</a>
                </div>
            </div>
            <div className="header__top-account">
                <div className="header__top-place">
                    <Link to="/chi-nhanh" >
                        <i className="fas fa-map-marker-alt"></i>
                        <span className="hide-mobile">Địa điểm các cửa hàng</span><span className="show-mobile">Showroom</span>
                    </Link>
                </div>
                <div 
                    className={checkLogin === "" ? "header__top-login hide-mobile-tablet" : "header__top-login hide-mobile-tablet isLogin"}
                    >
                    <Link to="/dang-nhap" onClick = {this.onClick}>
                        <i className="fas fa-user"></i>Đăng nhập
                    </Link>
                </div>
                <div className={checkLogin === "" ? "header__top-register hide-mobile-tablet":"header__top-register hide-mobile-tablet isLogin"}>
                    <Link to="/dang-ky" onClick = {this.onClick}>
                        <i className="fas fa-user-plus"></i>Đăng ký
                     </Link>
                </div>
                <div className={checkLogin === "" ? "header__top-register hide-mobile-tablet isLogin":"header__top-register hide-mobile-tablet"}>
                    <Link>
                        <i className="fas fa-user"></i>{checkLogin}
                    </Link>
                </div>
                <div className="header__top-cart" data-toggle="modal" data-target="#exampleModal">
                    <a ><i className="fas fa-shopping-cart header__top-cart-icon"></i></a>
                    <input className="header__top-cart-number" type="button" value ={order} id="cart_number"/>
                </div>
             </div>
        </div>

    	);
    }
}

export default HeaderTop;