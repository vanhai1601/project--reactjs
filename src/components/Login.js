import React, { Component } from "react";
import {BrowserRouter as Router, Link} from "react-router-dom";
import callAPI from "../utils/callAPI";

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            txtmail:"",
            txtpass:"",
            checkmail:false,
            checkpass:false,
            checkall: false,
            data:"",
            isLogin:false,
            checkLogin:false,
            isAdmin:false
        };
    }

    onChange = (event) =>{
      var target = event.target;
      var name = target.name;
      var value = target.value;
      this.setState({
        [name]:value
      });
    }

    onMouseEnter = () => {
      if(this.state.txtmail !== "" && this.state.txtpass !== ""){
        callAPI("accounts/authenticate", "POST",{
          username:this.state.txtmail,
          password: this.state.txtpass
        }).then(res => {
          if(res.status === 200) {
            callAPI("accounts/detail", "POST", {
              username: this.state.txtmail
            }).then(val => {
              if(val.data.roles[0] == "ROLE_ADMIN"){
                this.setState({
                  isAdmin: true,
                  data: this.state.txtmail
                });
              } else {
                this.setState({
                  isLogin:true,
                  data:this.state.txtmail
                });
              }
              
            }).catch(err =>{
              console.log(err);
            });
          }
        }).catch(error => {
          console.log(error);
        });
      }}



    onSubmit = (value) => {
      if(this.state.txtmail.trim() === ""){
        this.setState({
          checkmail:true,
          data:this.state.txtmail
        });
      }
      if(this.state.txtpass.trim() === ""){
        this.setState({
          checkpass:true
        });
      }

      if(this.state.txtmail !== "" && this.state.txtpass !== ""){
        callAPI("accounts/authenticate", "POST",{
          username:this.state.txtmail,
          password: this.state.txtpass
        }).then(res => {
          if(res.status === 200) {
            callAPI("accounts/detail", "POST", {
              username: this.state.txtmail
            }).then(val => {
              this.props.checkLogin(value,val.data.roles[0]);
            }).catch(err => {
              console.log(err);
            });
          }
        }).catch(error => {
          console.log(error);
          this.setState({
            checkall:true
          });
        });
      }
    }

    onkeyup = () =>{
      this.setState({
        checkmail:false,
        checkpass:false,
        checkall: false,
        isLogin:false
      });
    }

    render() {
            var {data, checkLogin} = this.state;
            var match = "/dang-nhap";
            if(this.state.isLogin === true){
              match = `/${this.state.txtmail}`;
            }
            if( this.state.isAdmin === true){
              match = "/admin";
            }
            return (
                <div className="content">
                  <div className="content__login">
                      <nav aria-label="breadcrumb" className="content__login-nav">
                        <ol className="breadcrumb">
                          <li className="breadcrumb-item"><Link to="/" className="content__login-nav-link">Trang chủ</Link></li>
                          <li className="breadcrumb-item active" aria-current="page">Đăng nhập tài khoản</li>
                        </ol>
                      </nav>
                    <div className="content__login-item">    
                      <div className="item-text">Đăng nhập tài khoản</div>
                      <p 
                        className= "msg"
                        id = {this.state.checkall == true ? "msg1" : ""}>
                        Thông tin đăng nhập không chính xác
                      </p>
                      <div className="item-email">
                      <input 
                        type="email" 
                        placeholder="Tên đăng nhập" 
                        className="item-input"
                        name="txtmail"
                        onChange = {this.onChange} 
                        value = {this.state.txtmail}
                        id = {this.state.checkmail === true ? "input1":""}
                        onKeyUp = {this.onkeyup}
                      />
                      <p 
                        className= {this.state.checkmail === true? "msg_emailpass msg_emailpass2":"msg_emailpass"}
                      >Vui lòng nhập Email</p>
                    </div>
                    <div className="item-pass">
                      <input 
                            type="password"  
                            placeholder="Mật khẩu" 
                            className="item-input"
                            name="txtpass"
                            onChange = {this.onChange} 
                            value = {this.state.txtpass}
                            id = {this.state.checkpass === true ? "input2":""}
                            onKeyUp = {this.onkeyup}
                      />
                      <p className= {this.state.checkpass === true? "msg_emailpass msg_emailpass2":"msg_emailpass"}>Vui lòng nhập mật khẩu</p>
                     </div>
                    <div className="item-forgot"><Link>Quên mật khẩu?</Link></div>
                    <Link to = {match}>
                        <input 
                        type="submit" 
                        className="item-btn" 
                        value="Đăng nhập"
                        onClick = {() => this.onSubmit({data})}
                        onMouseEnter = {this.onMouseEnter}
                        />
                    </Link>
                    <div>Chưa có tài khoản đăng ký <Link to="/dang-ky" className="item-link">tại đây</Link></div>
                  </div></div>
                </div>  
        );
    }
}

export default Login;