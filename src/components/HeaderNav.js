import React, { Component } from "react";
import {Link} from "react-router-dom";
import callAPI from "../utils/callAPI";
import axios from "axios";

class HeaderNav extends Component {

    constructor(props) {
        super(props);
        this.state = {
            txtName:"",
            productPagination: [],
            width:window.innerWidth
        };
    }

    componentWillMount() {
      this.getWidth();
      window.addEventListener('resize', this.getWidth);
    }
    getWidth = () => {
      this.setState({
        width: window.innerWidth
      });
    }
    componentDidMount() {
      callAPI(`products/pagination?page=1`, "GET", null).then(res => {
            this.setState({
                productPagination: res.data
            });
        }).catch(error => {
            console.log(error);
      });
    }
    onChange = (event) =>{
      var target = event.target;
      var name = target.name;
      var value = target.value;
      this.setState({
        [name]:value
      });
    }
    onClick = (value) => {
      axios.post(`http://localhost:8081/products/search`, this.state.txtName).then(res => {
        console.log(res.data);
      }).catch(error => {
        console.log(error);
      });
    }

    getProduct = () => {
      this.props.productPagination(this.state.productPagination);
    }

    render() {
      var {txtName, width} = this.state;
    	return(
    		<div className=" header__nav">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link to = "/" className="navbar-brand"><img src="https://i.imgur.com/QeOTtum.png" alt="" /></Link>
                    <button className="navbar-toggler" id="navbar_menu" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars navbar-toggler-icon"></i>
                    </button>
                  
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav m-auto">
                        <li className="nav-item dropdown">
                          <Link to="/" 
                                className="nav-link dropdown-toggle"  
                                id="navbarDropdown" role="button" 
                                data-toggle={width <= 991 ? "dropdown" :""} aria-haspopup="true" 
                                aria-expanded="false">
                            TRANG CHỦ
                          </Link>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link className="dropdown-item" to="/gioi-thieu">Giới thiệu</Link>
                            <Link className="dropdown-item" >Tin tức</Link>
                            <Link className="dropdown-item" >Tuyển dụng</Link>
                            <Link className="dropdown-item" >Liên hệ</Link>

                        </div>
                        </li>
                        <li className="nav-item dropdown">
                          <Link className="nav-link dropdown-toggle"  
                                id="navbarDropdown" 
                                role="button" 
                                data-toggle={width <= 991 ? "dropdown" :""} aria-haspopup="true" 
                                aria-expanded="false">
                            PHÒNG KHÁCH
                          </Link>
                          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link className="dropdown-item" >Sofa</Link>
                            <Link className="dropdown-item" >Kệ tivi</Link>
                            <Link className="dropdown-item" >Bàn trà</Link>
                            <Link className="dropdown-item" >Tủ trang trí</Link>
                            <Link className="dropdown-item" >Tủ giấy</Link>
                          </div>
                        </li>
                        <li className="nav-item dropdown">
                          <Link className="nav-link dropdown-toggle"  
                                id="navbarDropdown" role="button" 
                                data-toggle={width <= 991 ? "dropdown" :""} aria-haspopup="true" 
                                aria-expanded="false">
                            PHÒNG ĂN
                          </Link>
                          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link className="dropdown-item" >Bàn ăn</Link>
                            <Link className="dropdown-item" >Kệ, tủ trang trí</Link>
                            <Link className="dropdown-item" >Bàn ghế nhà hàng</Link>
                          </div>
                        </li>
                        <li className="nav-item dropdown">
                          <Link className="nav-link dropdown-toggle"  
                                id="navbarDropdown" role="button" 
                                data-toggle={width <= 991 ? "dropdown" :""} aria-haspopup="true" 
                                aria-expanded="false">
                            PHÒNG NGỦ
                          </Link>
                          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link className="dropdown-item" >Giường</Link>
                            <Link className="dropdown-item" >Bàn học</Link>
                            <Link className="dropdown-item" >Đệm</Link>
                          </div>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to = "/tat-ca-san-pham" id="all-product" onClick = {this.getProduct}>ALL</Link>
                        </li>
                        <li className="nav-item nav__mobile-item">
                          <Link className="nav-link">
                            <i className="fas fa-user"></i>Đăng nhập
                          </Link>
                        </li>
                        <li className="nav-item nav__mobile-item">
                          <Link className="nav-link">
                            <i className="fas fa-user-plus"></i>Đăng ký
                          </Link>
                        </li>
                      </ul>
                      <form className="form-inline my-2 my-lg-0 header__nav-search" >
                        <input className="form-control header__nav-input" type="search" placeholder="Search" id="search" 
                          onChange ={this.onChange} 
                          name = "txtName"
                          value = {this.state.txtName}
                          />
                        
                          <button className="header__nav-btn" type="button" id="searchbar" onClick = {() => this.onClick({txtName})} >
                          <Link to = "/tat-ca-san-pham"><i className="fas fa-search"></i></Link>
                          </button>
                      </form>
                    </div>
                </nav>
            </div>

    	);
    }
}

export default HeaderNav;