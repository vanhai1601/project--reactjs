import React, { Component } from "react";
import OrderList from "./OrderList";

class Modal extends Component {
    deleteList = (value) => {
        this.props.deleteList(value);
    }

    changeQuantity = (value) => {
      this.props.changeQuantity(value);
    }
    changeQuantity1 = (value) => {
      this.props.changeQuantity1(value);
    }

    render() {
      var {orderList} = this.props;
      var formater = new Intl.NumberFormat('de-DE');
      var total = 0;
      for(var i = 0; i<orderList.length;i++){
        total += orderList[i].price*(1 - orderList[i].sale/100)*orderList[i].number;
      }

      var element = orderList.map((value,index) => {
        return <OrderList
                key = {index}
                index = {index}
                value = {value} 
                deleteList = {this.deleteList}
                changeQuantity = {this.changeQuantity}
                changeQuantity1 = {this.changeQuantity1}
        />
      });
      
    	return(

    		<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                  <div className="modal-content">
                      <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">My Order</h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                          </button>
                      </div>
                      <div className="modal-body">
                          <table className="table">
                              <thead>
                                  <tr>
                                      <th scope="col">Stt</th>
                                      <th scope="col">Sản phẩm</th>
                                      <th scope="col">Giá</th>
                                      <th scope="col">Số lượng</th>
                                      <th scope="col">Tổng giá</th>
                                      <th scope="col">Xóa</th>
                                  </tr>
                              </thead>
                              <tbody className="list-order-product">
                                    {element}
                              </tbody>
                          </table>
                          <h6 id="sum_price">
                            <span>Tổng tiền cần thanh toán là: </span>
                            <span id="sum_price-number">{formater.format(total)} đ</span>
                          </h6>
                          <div>
                            <a href="#" className="btn btn-success text-white pay ">Thanh toán</a>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
    	);
    }
}

export default Modal;