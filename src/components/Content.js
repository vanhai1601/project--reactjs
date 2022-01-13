import React, { Component } from "react";
import Product from "./Product";

class Content extends Component {

	orderProduct = (value) => {
		this.props.orderProduct(value);
	}
	
	productDetail = (value) => {
		this.props.productDetail(value);
	}
	
    render() {
			var {data, data1, data2} =  this.props;
			var txts = ["SẢN PHẨM MỚI","SẢN PHẨM BÁN CHẠY","SẢN PHẨM KHUYẾN MẠI"];
			var datas = [];
			datas[0] = data;
			datas[1] = data1;
			datas[2] = data2;
			
			var elm = datas.map((value,index) =>{
				return 	<div className="content__product-new">
				          	<button className="content__product-new-name" >{txts[index]}</button>
				          	<div className="row">
				           		{value.map((value,index) => {
				           			if(index <= 7){
					            		return <Product
					                        key = {index}
					                        stt = {index}
					                        value = {value}
					                        orderProduct = {this.orderProduct}
					                        productDetail = {this.productDetail}
					                    />
					            	} else {
					            		return null
					            	}
				           		})}
				          	</div>
				          	<div className="content__product-detail">
				            	<button className="content__product-detail-btn">Xem thêm sản phẩm</button>
				          	</div>  
				        </div>
			});

        return (
         
     		<div className = "content">    			          
		       	{elm}	
     		</div>
        );
    }
}

export default Content;