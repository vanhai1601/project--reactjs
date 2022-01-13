import React, { Component } from "react";
import {Link} from "react-router-dom";
class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            check1:true,
            check2: false,
            check3:false
        };
    }

    changeTab1 = () => {
      this.setState({
        check1: true,
        check2: false,
        check3:false 
      });
    }

    changeTab2 = () => {
      this.setState({
        check1: false,
        check2: true,
        check3:false 
      });
    }
    changeTab3 = () => {
      this.setState({
        check1: false,
        check2: false,
        check3:true
      });
    }
    
    orderProduct = (value) => {
      this.props.orderProduct(value);
    }

    render() {
        var {check1,check2,check3} = this.state;
        var value = this.props.productDetail;
        return (
            <div className="content__detail">
              <nav aria-label="breadcrumb" className="content__detail-nav">
                  <ol className="breadcrumb">
                      <li className="breadcrumb-item"><Link to="/" className="content__detail-nav-link">Trang chủ</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">Chi tiết sản phẩm</li>
                  </ol>
                </nav>
              <div className="row">
                  <div className="col-lg-3 hide-mobile-tablet content__detail-left">
                      <div className="content__detail-left-nav" >
                          <div className="nav-text">
                              <h5>DANH MỤC</h5>
                              <i className="fas fa-align-right"></i>
                          </div>
                          <div className="nav-list">
                              <ul className="content__detail-left-list">
                                  <li className="list-item">
                                      <i className="fas fa-angle-right"></i>
                                      <a href="" className="item-link">PHÒNG KHÁCH</a>
                                  </li>
                                  <li className="list-item">
                                      <i className="fas fa-angle-right"></i>
                                      <a href="" className="item-link">PHÒNG ĂN</a>
                                  </li>
                                  <li className="list-item">
                                      <i className="fas fa-angle-right"></i>
                                      <a href="" className="item-link">PHÒNG NGỦ</a>
                                  </li>
                                  <li className="list-item">
                                      <i className="fas fa-angle-right"></i>
                                      <a href="" className="item-link">ĐỒ TRANG TRÍ</a>
                                  </li>
                                  <li className="list-item">
                                      <i className="fas fa-angle-right"></i>
                                      <a href="" className="item-link">ĐỆM</a>
                                  </li>
                                  <li className="list-item">
                                      <i className="fas fa-angle-right"></i>
                                      <a href="" className="item-link">SẢN PHẨM MỚI</a>
                                  </li>
                                  <li className="list-item">
                                      <i className="fas fa-angle-right"></i>
                                      <a href="" className="item-link">SẢN BÁN CHẠY</a>
                                  </li>
                                  <li className="list-item">
                                      <i className="fas fa-angle-right"></i>
                                      <a href="" className="item-link">ALL</a>
                                  </li>
                              </ul>
                               
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-9 col-md-12 content__detail-right">
                      <div className="content__detail-right-product">
                          <div className="right-image">
                              <img src = {value.img} id="img_value" />
                          </div>
                          <div className="right-infor">
                              <div className="infor-name">
                                  <h5 className="card-title">{value.name}</h5>
                              </div>
                              <div className="infor-price card-text">
                                  <span className="price_new">{value.price} đ</span>
                                  <span className="price_sale">{value.price*(1-value.sale/100)} đ</span>
                              </div>
                              <div className="infor-status">Tình trạng: <strong>Còn hàng</strong></div>
                              <ul className="infor-list">
                                  <li>Thương hiệu: <strong>BIZNOITHAT</strong></li>
                                  <li>Dòng sản phẩm: Nội thất gỗ óc chó </li>
                                  <li>Mua nhiều giảm giá</li>
                                  <li>Miễn phí giao hàng nội thành Hà Nội</li>
                              </ul>
                              <div className="infor-size">
                                  Kích thước (Dài x Rộng x Cao): 1200 x 700 x 430mm
                              </div>
                              <div>
                                  <a 
                                    className="btn btn-success text-white"
                                    onClick = {() => this.orderProduct({value})} 
                                  >Mua ngay</a>
                              </div>
                          </div>
                      </div>
                      <div className="content__detail-right-description">
                          <div id="tabs" className="new_tabs">
                              <ul className="hide_mobile">
                                  <li className ={check1 === true ? "active":""} onClick = {this.changeTab1}><a>Thông tin sản phẩm</a></li>
                                  <li className ={check2 === true ? "active":""} onClick = {this.changeTab2}><a>Hướng dẫn mua hàng</a></li>
                                  <li className ={check3 === true ? "active":""} onClick = {this.changeTab3}><a>Đánh giá sản phẩm</a></li>
                              </ul>
                              <select id="tabs_select">
                                  <option value="1">Thông tin sản phẩm</option>
                                  <option value="2">Hướng dẫn mua hàng</option>
                                  <option value="3">Đánh giá sản phẩm</option>
                              </select>
                              <div id="tab_1" className ={check1 === true ? "show_hide":""}>
                                  <p>Bàn Trà Gỗ Óc Chó Dylan được thiết kế hình oval đầy phong cách mang tính thẩm mỹ cao, 
                                     màu sắc trang nhã mang đặc trưng của gỗ óc chó
                                  </p>
                                  <div>
                                      <p>
                                          <strong>Kích thước: </strong> Dài 1200 x Rộng 700 x  Cao 430mm
                                      </p>
                                      <p>
                                          <strong>Vật liệu: </strong> Gỗ óc chó nhập Bắc Mỹ
                                      </p>
                                      <p>
                                          <strong>Xuất xứ: </strong> Hàng Viêt Nam xuất khẩu Mỹ
                                      </p>
                                      <p>
                                          <strong>Màu sắc: </strong> Walnut tự nhiên 
                                      </p>
                                  </div>
                                  <div>
                                      <div>
                                          <p><strong>Chất liệu gỗ óc chó tự nhiên, nhẵn mịn</strong></p>
                                          Sản phẩm được làm từ gỗ óc chó tự nhiên đã qua tẩm sấy chống mối mọt, 
                                          gỗ được sơn màu nâu đậm, bóng mịn, thơm mùi gỗ, dễ lau chùi. Đặc biệt, 
                                          các cạnh sản phẩm đều được mài tròn nhẵn, không có tính sát thương 
                                          ngay cả khi những đứa trẻ có đùa nghịch mà vô tình va phải, rất an toàn.
                                      </div>
                                      <div>
                                          <p><strong>Phù hợp với nhiều phong cách nội thất</strong></p>
                                          Bàn Trà Gỗ Óc Chó Biznoithat - Dylan là một những sản phẩm thuộc dòng 
                                          sản phẩm óc chó cung cấp bởi biznoithat. Sản phẩm mang tính thẩm mỹ 
                                          cao sẽ giúp phòng khách của bạn không chỉ ấm cúng hơn mà còn là điểm 
                                          nhấn đẳng cấp cho ngôi nhà đẹp và cá tính theo phong cách của chủ căn nhà. 
                                          Màu sắc bàn ăn dễ dàng phù hợp, đồng điệu với nhiều phong cách nội thất khác nha
                                      </div>
                                  </div>
                              </div>
                              <div id="tab_2" className ={check2 === true ? "show_hide":""}>
                                  <ul>
                                      <li className="tab_2-item">
                                          <strong>1. XEM HÀNG</strong>
                                          <ul>
                                              <li>- Tại website: <a href="index.html">www.biznoithat.com</a></li>
                                              <li>- Tại facebook: <a href="index.html">https://www.facebook.com/biznoithat</a></li>
                                              <li>- Tại các showroom: <a href="index.html">(Xem tại đây)</a></li>
                                          </ul>
                                      </li>
                                      <li className="tab_2-item"><strong>2. GIAO HÀNG: </strong> <a href="">(Xem tại đây)</a></li>
                                      <li className="tab_2-item"><strong>3. THANH TOÁN: </strong> <a href="">(Xem tại đây)</a></li>
                                      <li className="tab_2-item"><strong>4. HOTLINE 24/7: </strong> <a href="">0386701897</a></li>
                                  </ul>
                              </div>
                              <div id="tab_3" className ={check3 === true ? "show_hide":""}>
                                    <p>Đánh giá sản phẩm</p>
                                    <div class="stars">
                                        <form action="">
                                            <input class="star star-5" id="star-5" type="radio" name="star"/>
                                            <label class="star star-5" for="star-5"></label>
                                            <input class="star star-4" id="star-4" type="radio" name="star"/>
                                            <label class="star star-4" for="star-4"></label>
                                            <input class="star star-3" id="star-3" type="radio" name="star"/>
                                            <label class="star star-3" for="star-3"></label>
                                            <input class="star star-2" id="star-2" type="radio" name="star"/>
                                            <label class="star star-2" for="star-2"></label>
                                            <input class="star star-1" id="star-1" type="radio" name="star"/>
                                            <label class="star star-1" for="star-1"></label>
                                          </form>
                                        </div>
                                    <br />
                                    <input type="text" placeholder="UserName" />
                                    <br />
                                    <input type="text" placeholder="Email" />
                                    <br />
                                    <textarea id="story" name="story" placeholder="Nhận xét" />
                                    <br />
                                    <button type="button">Đánh giá</button>
                              </div>
                          </div>
                      </div>
                      
                  </div>
              </div>
          </div>
        );
    }
}

export default ProductDetail;