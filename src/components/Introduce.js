import React, { Component } from "react";
import {Link} from "react-router-dom";

class Introduce extends Component {
    render() {
        return (
            <div classNameNameName="content">
                <div className="content__introduce">
                  <nav aria-label="breadcrumb" className="content__introduce-nav">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to = "/" className="content__introduce-nav-link">Trang chủ</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Giới thiệu</li>
                    </ol>
                  </nav>
                  <div className="row content__introduce-list">
                    <div className="col-lg-6 list-item"><img src="https://i.imgur.com/QeOTtum.png" alt="" style={{width: 100 + "%"}} className="item-image" /></div>
                    <div className="col-lg-6 list-item">
                        <p>SỨ MỆNH CỦA CHÚNG TÔI</p>
                        <h3>KHÁCH HÀNG ĐƯỢC ĐẶT LÊN TẤT CẢ</h3>
                        <p>Kính gửi Quý Khách: Công ty TNHH Biz nội 
                            thất xin gửi tới Quý Khách lời chào trân trọng nhất. 
                            Với mong muốn đem đến cho Quý Khách các sản phẩm Việt Nam 
                            chất lượng cao - 100% đạt tiêu chuẩn xuất khẩu, không gây 
                            độc hại cho người tiêu dùng,  giá thành rẻ hơn thị trường 
                            thế giới từ 50 đến 80%, với mong muốn quảng bá cho hàng Việt 
                            và phục vụ người tiêu dùng Việt Nam.  Với phương châm kết nối 
                            doanh nghiệp Việt với người tiêu dùng giúp người tiêu dùng tiếp 
                            cận được với hàng hóa Việt Nam chất lượng cao, được hưởng nhiều 
                            quyền lợi nhất khi mua sắm hàng hóa, trong những năm qua chúng 
                            tôi đã không ngừng hợp tác với nhiều doanh nghiệp sản xuất hàng 
                            tiêu dùng, các doanh nghiệp thương mại/dịch vụ Việt để đưa những 
                            sản phẩm tốt nhất đến với người tiêu dùng. Cũng vì lẽ đó, Biznoithat.com 
                            chắc chắn sẽ là đối tác phù hợp đồng hành cùng Quý khách trong quá trình 
                            phát triển, khẳng định thương hiệu và chinh phục người tiêu dùng Việt Nam. 
                            Trân trọng cảm ơn!
                        </p>
                    </div>
                </div>
                <div className="row content__introduce-list">
                    <div className="col-md-4 list-item">
                        <div>
                            <i className='fas fa-headphones-alt'></i>
                        </div>
                        <h5>Phục vụ khách hàng 24/7</h5>
                        <p>Hotline: 0933896686/0912305775</p>
                    </div>
                    <div className="col-md-4 list-item">
                        <div>
                            <i className='fas fa-first-aid'></i>
                        </div>
                        <h5>Bảo hành dài hạn</h5>
                        <p>Bảo hành ít nhất 12 tháng tất cả các sản phẩm</p>
                    </div>
                    <div className="col-md-4 list-item">
                        <div>
                            <i className='fab fa-amazon-pay'></i>
                        </div>
                        <h5>Thanh toán linh hoạt</h5>
                        <p>Chấp nhận thanh toán tiền mặt, chuyển khoản, chấp nhận thanh toán Visa, Master</p>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default Introduce;