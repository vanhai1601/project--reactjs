import React, { Component } from "react";

class Footer extends Component {
    render() {
        return (
            <div className="footer">
              <div className="footer__showroom">
                <h5>HỆ THỐNG CỬA HÀNG</h5>
                <div className="row footer__showroom-list">
                  <div className="col-md-4 footer__showroom-item">
                    <h6>Biz Hà Đông ( Metro Hà Đông )</h6>
                    <p>Tầng 3 - TTTTM MeLinh Hà Đông, Số 1 Hà Cầu - Hà Đông - HN</p>
                    <p>TEL: <a >02422026789</a></p>
                    <p>OPEN: 9:00 - 21:30</p>
                  </div>
                  <div className="col-md-4 footer__showroom-item">
                    <h6>Biz Long Biên ( Big C Long Biên )</h6>
                    <p>Tầng 2, TTTM Savico Long Biên, số 7-9 đường Nguyễn Văn Linh, quận Long Biên, TP Hà Nội</p>
                    <p>TEL: <a >02462913000</a></p>
                    <p>OPEN: 9:00 - 22:00</p>
                  </div>
                  <div className="col-md-4 footer__showroom-item">
                    <h6>Biz Mỹ Đình ( Big C Mỹ Đình )</h6>
                    <p>Tầng 3 - TTTM The Garden - Đường Mễ Trì - Mỹ Đình - Hà Nội (BIG C Mễ Trì)</p>
                    <p>TEL: <a >02422453555</a></p>
                    <p>OPEN: 9:00 - 22:00</p>
                  </div>
                </div> 
              </div>
              <div className="footer__bottom">
                <div className="row footer__bottom-infor">
                  <div className="col-lg-2 col-md-6 footer__bottom-infor-item">
                    <h5>THÔNG TIN</h5>
                    <p><a href="gioithieu.html">Giới thiệu</a></p>
                    <p><a >Sản phẩm</a></p>
                    <p><a >Tin tức</a></p>
                    <p><a >Tuyển dụng</a></p>
                    <p><a >Liên hệ</a></p>
                  </div>
                  <div className="col-lg-2 col-md-6 footer__bottom-infor-item">
                    <h5>CHÍNH SÁCH</h5>
                    <p><a >Bảo hành</a></p>
                    <p><a >Thanh toán</a></p>
                    <p><a >Mua hàng online</a></p>
                    <p><a >Vận chuyển</a></p>
                    <p><a >Chính sách trả đổi</a></p>
                  </div>
                  <div className="col-lg-4 col-md-6 footer__bottom-infor-item">
                    <h5>TỔNG ĐÀI BÁN HÀNG</h5>
                    <p className="phone">
                      <a ><i className="fas fa-phone-alt footer__bottom-infor-icon"></i><span>0933 896 686</span></a>
                    </p>
                    <h5>CÁC BỘ PHẬN KHÁC</h5>
                    <p className="hotline">
                      <a >
                        <i className="fas fa-phone-alt footer__bottom-infor-icon"></i>
                        <span>093 389 6686 | Hotline 24/7</span>
                      </a>
                    </p>
                    <p className="hotline" >
                        <a >
                            <i className="fas fa-phone-alt footer__bottom-infor-icon"></i>
                            <span>091 230 5775 | Sửa chữa & Bảo hành</span>
                        </a>
                    </p>
                  </div>
                  <div className="col-lg-4 col-md-6 footer__bottom-infor-item">
                    <h5>KẾT NỐI VỚI CHÚNG TÔI</h5>
                    <a >
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a >
                         <i className="fab fa-twitter"></i>
                    </a>
                    <a >
                         <i className="fab fa-google-plus-g"></i>
                    </a>
                    <a >
                        <i className="fab fa-whatsapp"></i>
                    </a>
                    <a >
                         <i className="fab fa-youtube"></i>
                    </a>
                    <p className="logo">
                        <img src="assets/img/hinh1.PNG" alt="" /> 
                        <img src="assets/img/hinh2.PNG" alt="" />
                    </p>
                  </div>
                </div>  
              </div>
        </div>
        );
    }
}

export default Footer;