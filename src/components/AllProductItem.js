import React, { Component } from "react";
import {Link} from "react-router-dom";
import toSlug from "../utils/toSlug";

class AllProductItem extends Component {

	orderProduct = (stt) => {
		this.props.order(stt);
	}
    onClick = (value) => {
        this.props.productDetail1(value);
    }

    
    render() {

    	var formater = new Intl.NumberFormat('de-DE');
    	var {value} = this.props;

        return (
	        <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 content__product-item ">
	            <div className="card" >
                    <Link to={"/chi-tiet-san-pham/" + toSlug(value.name)}>
                        <img src={value.img} className="card-img-top" alt="..." onClick = {()=>this.onClick({value})} />
                    </Link>
                    <div className="sale">-{value.sale}%</div>
                    <div className="card-body">
                        <h5 className="card-title"><Link to={"/chi-tiet-san-pham/" + toSlug(value.name)} onClick = {()=>this.onClick({value})}>{value.name}</Link></h5>
                        <p className="card-text">
                            <span className="card-text-sale">{formater.format(value.price)} đ</span>
                            <span className="price_sale">{formater.format(value.price - value.price*value.sale/100)} đ</span>
                        </p>
                      	<div>
                        	<a className="btn btn-success text-white" onClick = {() => this.orderProduct({value})}>Mua ngay</a>
                       </div>                        
                    </div>		            
	            </div>  
	        </div>
        );
    }
}

export default AllProductItem;