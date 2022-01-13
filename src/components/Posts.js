import React, { Component } from "react";
class Posts extends Component {

	orderProduct = (stt) => {
		this.props.order(stt);
	}
    render() {

        return (
	        <div className="posts">
                <div className="row">
                  <div className="col-lg-6 posts__list">
                    <div className="posts__list-item">
                      <h5><a href="">BÀI VIẾT XEM NHIỀU NHẤT</a></h5>
                      <hr />
                      <div className="item-wapper">
                        <div className="item-img">
                          <a href=""><img src="https://bizweb.dktcdn.net/thumb/large/100/139/088/articles/2048.jpg?v=1599630319803" alt="" /></a>
                        </div>
                        <div className="item-text">
                          <p><a href="">Vì sao khách hàng lại tin dùng sản phẩm bàn ăn gỗ óc chó tại BizNoiThat?</a> </p>
                        </div>
                      </div>
                      <div className="item-wapper">
                        <div className="item-img">
                          <a href=""><img src="https://bizweb.dktcdn.net/thumb/large/100/139/088/articles/ca-ch-mua-sofa-da-tha-t.jpg?v=1621076600270" alt="" /></a>
                        </div>
                        <div className="item-text">
                          <p><a href="">Mẫu bàn ăn gỗ óc chó bán chạy nhất tại BizNoiThat</a> </p>
                        </div>
                      </div>
                      <div className="item-wapper">
                        <div className="item-img">
                          <a href=""><img src="https://bizweb.dktcdn.net/thumb/large/100/139/088/articles/ca-ch-mua-sofa-da-tha-t.jpg?v=1621076600270" alt="" /></a>
                        </div>
                        <div className="item-text">
                          <p><a href="">Bộ Sofa Angelo bàn giao tại nhà khách hàng</a> </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 posts__list">
                    <div className="posts__list-item">
                      <h5><a href="">BÀI VIẾT NỔI BẬT</a></h5>
                      <hr />
                      <div className="item-wapper">
                        <div className="item-img">
                          <a href=""><img src="https://bizweb.dktcdn.net/thumb/large/100/139/088/articles/go-o-c-cho.jpg?v=1628738642627" alt="" /></a>
                        </div>
                        <div className="item-text">
                          <p><a href="">Vì sao khách hàng lại tin dùng sản phẩm bàn ăn gỗ óc chó tại BizNoiThat?</a> </p>
                        </div>
                      </div>
                      <div className="item-wapper">
                        <div className="item-img">
                          <a href=""><img src="https://bizweb.dktcdn.net/thumb/large/100/139/088/articles/800-l-513-do-ng-sofa-da-tha-t-divano-nha-p-kha-u-bo-i-biznoithat.jpg?v=1628234464900" alt="" /></a>
                        </div>
                        <div className="item-text">
                          <p><a href="">Mẫu bàn ăn gỗ óc chó bán chạy nhất tại BizNoiThat</a> </p>
                        </div>
                      </div>
                      <div className="item-wapper">
                        <div className="item-img">
                          <a href=""><img src="https://bizweb.dktcdn.net/thumb/large/100/139/088/articles/8k-bo-sofa-da-tha-t-italia-nha-p-kha-u-bo-i-biz-no-i-tha-t-s-809.jpg?v=1627800069497" alt="" /></a>
                        </div>
                        <div className="item-text">
                          <p><a href="">Bộ Sofa Angelo bàn giao tại nhà khách hàng</a> </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>  
              </div>
        );
    }
}

export default Posts;