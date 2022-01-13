import React, { Component } from "react";
import { Link } from "react-router-dom";
import callAPI from "../utils/callAPI";

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            txtname: "",
            txtphone: "",
            txtmail: "",
            txtpass: "",
            txtaddress:"",
            checkname: false,
            checkname1: false,
            checkphone: false,
            checkphone1: false,
            checkmail: false,
            checkmail1: false,
            checkpass: false,
            checkpass1: false,
            checkall: false,
            checkall1:false,
            showPassWord:false,
            data: {
              username:"",
              email :"",
              phone: "",
              password:"",
              active: 1
            }
        };
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value,
            data : {
              username: this.state.txtname,
              email : this.state.txtmail,
              phone: this.state.txtphone,
              password:this.state.txtpass,
              adderss : this.state.txtaddress,
              active: 1
            }
        });

    }

    onSubmit = () => {

        var rg1 = /^[a-zA-Z]{3}[\s]?[a-zA-Z0-9]*$/i;
        var rg2 = /^\d{3}[-\s]?\d{3}[-\s]?\d{4}$/;
        var rg3 = /(^\w+@[a-zA-Z]+.com$)/i;
        var rg4 = /^[a-zA-Z0-9@*_]{9}$/;

        if (this.state.txtname.trim() === "") {
            this.setState({
                checkname1: true,
            });
        }
        if (this.state.txtphone.trim() === "") {
            this.setState({
                checkphone1: true,
            });
        }
        if (this.state.txtmail.trim() === "") {
            this.setState({
                checkmail1: true,
            });
        }
        if (this.state.txtpass.trim() === "") {
            this.setState({
                checkpass1: true,
            });
        }
        if (rg1.test(this.state.txtname) === false && this.state.txtname.trim() !== "") {
            this.setState({
                checkname: true,
            });
        }
        if (rg2.test(this.state.txtphone) === false && this.state.txtphone.trim() !== "") {
            this.setState({
                checkphone: true,
            });
        }
        if (rg3.test(this.state.txtmail) === false && this.state.txtmail.trim() !== "") {
            this.setState({
                checkmail: true,
            });
        }
        if (rg4.test(this.state.txtpass) == false && this.state.txtpass.trim() !== "") {
            this.setState({
                checkpass: true,
            });
        }
        if (rg1.test(this.state.txtname) && rg2.test(this.state.txtphone) &&
            rg3.test(this.state.txtmail) && rg4.test(this.state.txtpass)) {
            
            callAPI("accounts", "POST", {
              username: this.state.data.username,
              email : this.state.data.email,
              phone: this.state.data.phone,
              password:this.state.data.password,
              adderss : this.state.txtaddress,
              active: 1
            }).then(res => {
              if(res.status === 200){
                window.scrollTo({
                  top: 0,
                  behavior: "smooth"
                });
                this.setState({
                    checkall:true
                });
              }
            }).catch(error => {
                this.setState({
                    checkall1:true
                });
                console.log(error.response.status);
            });
        }

        
    }

    onKeyUp = () => {
        this.setState({
            checkname: false,
            checkname1: false,
            checkphone: false,
            checkphone1: false,
            checkmail: false,
            checkmail1: false,
            checkpass: false,
            checkpass1: false,
            checkall1:false
        });
    }

    showPassWord = () => {
        this.setState({
            showPassWord:true
        });
    }

    closeForm =()=> {
        this.setState({
            checkall:false
        });
    }
    render() {

        return (           
            <div className="content">
              <div className="content__register">
                <nav aria-label="breadcrumb" className="content__register-nav" >
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/" className="content__register-nav-link">Trang chủ</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Đăng ký tài khoản</li>
                  </ol>
                </nav>
                <div className="content__register-item">    
                    <div className="item-text">Đăng ký tài khoản</div>
                    <p 
                        className= "msg"
                        id = {this.state.checkall1 === true ? "msg1" : ""}>
                        Tài khoản đã tồn tại
                    </p>
                    <div className="item-use">
                        <input 
                              type="email" 
                              placeholder="Tên đăng nhập (*)" 
                              className={this.state.checkname1 === true ? "item-input item-input1":"item-input"}
                              name = "txtname"
                              onChange = {this.onChange}
                              value = {this.state.txtname}
                              onKeyUp = {this.onKeyUp}
                        />
                        <span className="item-icon"><i className="fas fa-check"></i></span>
                        <p className={this.state.checkname1 === true ? "msg_emailpass msg_emailpass2":"msg_emailpass"}>Vui lòng nhập tên</p>
                        <p className={this.state.checkname === true? "msg_emailpass1 msg_emailpass3":"msg_emailpass1"} >Họ & Tên không hợp lệ</p>
                    </div>
                    <div className="item-phone">
                        <input 
                              type="email" 
                              placeholder="Số điện thoại (*)" 
                              className={this.state.checkphone1 === true ? "item-input item-input1":"item-input"}
                              name = "txtphone" 
                              onChange = {this.onChange}
                              value = {this.state.txtphone}
                              onKeyUp = {this.onKeyUp}
                        />
                        <span className="item-icon"><i className="fas fa-check"></i></span>
                        <p className={this.state.checkphone1 === true ? "msg_emailpass msg_emailpass2":"msg_emailpass"}>Vui lòng nhập số điện thoại</p>
                        <p className={this.state.checkphone === true? "msg_emailpass1 msg_emailpass3":"msg_emailpass1"} >Số điện thoại không đúng</p>
                    </div>
                    <div className="item-email">
                        <input 
                              type="email" 
                              placeholder="Email (*)" 
                              className={this.state.checkmail1 === true ? "item-input item-input1":"item-input"}
                              name = "txtmail"
                              onChange = {this.onChange}
                              value = {this.state.txtmail}
                              onKeyUp = {this.onKeyUp}
                        />
                        <span className="item-icon"><i className="fas fa-check"></i></span>
                        <p className={this.state.checkmail1 === true ? "msg_emailpass msg_emailpass2":"msg_emailpass"}>Vui lòng nhập Email</p>
                        <p className={this.state.checkmail === true? "msg_emailpass1 msg_emailpass3":"msg_emailpass1"} >Email không hợp lệ</p>
                    </div>
                    <div className="item-email">
                        <input 
                              type="address" 
                              placeholder="Địa chỉ" 
                              className="item-input"
                              name = "txtaddress"
                              onChange = {this.onChange}
                              value = {this.state.txtaddress}
                              onKeyUp = {this.onKeyUp}
                        />
                        <span className="item-icon"><i className="fas fa-check"></i></span>
                    </div>
                    <div className="item-pass">
                        <input 
                              type= {this.state.showPassWord === true ? "text" :"password"}
                              placeholder="Mật khẩu (*)" 
                              className={this.state.checkpass1 === true ? "item-input item-input1":"item-input"}
                              name = "txtpass"
                              onChange = {this.onChange}
                              value = {this.state.txtpass}
                              onKeyUp = {this.onKeyUp} 
                        />
                        <i class="far fa-eye-slash" onClick = {this.showPassWord}></i>
                        <span className="item-icon"><i className="fas fa-check"></i></span>
                        <p className={this.state.checkpass1 === true ? "msg_emailpass msg_emailpass2":"msg_emailpass"}>Vui lòng nhập mật khẩu</p>
                        <p className={this.state.checkpass === true? "msg_emailpass1 msg_emailpass3":"msg_emailpass1"} >Mật khẩu bao gồm 9 ký tự</p>
                    </div>
                    <Link to={this.state.checkall === true ? "/dang-nhap":"/dang-ky"} className = "btn-submit">
                        <input 
                            type="submit" 
                            className="item-btn" 
                            value="Đăng ký" 
                            onClick = {this.onSubmit}
                        />
                    </Link>
                  <p>Đã có tài khoản đăng nhập <Link to = "/dang-nhap"  className="item-link"> tại đây</Link></p>
                </div>
              </div>
              <div className = "form-to-login" id = {this.state.checkall === true ? "show-form":""}>
                    <p>Đăng ký thành công, chuyển đến trang đăng nhập!</p>
                    <Link to = "/dang-nhap" >
                        <button 
                            type="button" 
                            className="btn btn-success mr-10"
                        >
                        Ok
                        </button>
                    </Link>
                    <button 
                        type="button" 
                        className="btn btn-success mr-10"
                        onClick = {this.closeForm}
                    >
                        Hủy
                    </button>
              </div>
            </div>
        );
    }
}

export default Register;