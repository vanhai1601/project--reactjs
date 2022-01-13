import React, { Component } from "react";
import {Link} from "react-router-dom";
import AllProductItem from "./AllProductItem";
import PaginationItem from "./PaginationItem";
import callAPI from "../utils/callAPI";
class AllProduct extends Component {
    order = (stt) => {
        this.props.orderProduct(stt);
    }

    next = (value) => {
        if( this.props.currentPage - value >= 1 && this.props.currentPage - value <= this.props.totalPage ){
            var currentPage = this.props.currentPage - value;
        }
        if(currentPage) {
            if( this.props.sort === 1) {
                callAPI(`products/sort?page=${currentPage}&sort=1`, "GET", null).then(res => {
                    this.props.next(value,res.data);
                }).catch(error => {
                    console.log(error);
                });
            } else if(this.props.sort === 0) {
                callAPI(`products/pagination?page=${currentPage}`, "GET", null).then(res => {
                    this.props.next(value,res.data);
                }).catch(error => {
                    console.log(error);
                });
            } else {
                callAPI(`products/sort?page=${currentPage}&sort=0`, "GET", null).then(res => {
                    this.props.next(value,res.data);
                }).catch(error => {
                    console.log(error);
                });
            }
        }
        
        // window.scrollTo({
        //   top: 0,
        //   behavior: "smooth"
        // });
    }

    showValue = (value,data) => {
        this.props.showValue(value,data);
    }

    onChange = (event) => {
        if(event.target.value == 1){
            callAPI("products/sort?page=1&sort=1", "GET", null).then(res => {
            this.props.sortByName(parseInt(event.target.value), res.data);
            }).catch(error => {
                console.log(error);
        });
        } else if (event.target.value == 0) {
            callAPI("products/pagination?page=1", "GET", null).then(res => {
            this.props.sortByName(parseInt(event.target.value), res.data);
            }).catch(error => {
                console.log(error);
        });
        } else {
            callAPI("products/sort?page=1&sort=0", "GET", null).then(res => {
            this.props.sortByName(parseInt(event.target.value), res.data);
            }).catch(error => {
                console.log(error);
        });
        }

    }
    productDetail1 = (value) => {
        this.props.productDetail1(value);
    }
    render() {
    	var formater = new Intl.NumberFormat('de-DE');
        var {productPagination,pageNumbers,currentPage,msg,sort} = this.props;

        var elm = pageNumbers.map((value,index) => {
            return <PaginationItem 
                        key = {index}
                        value = {value}
                        showValue = {this.showValue}
                        currentPage = {currentPage}
                        sort = {sort}
                    />
        });

        var element = productPagination.map((value,index) =>{
            return <AllProductItem
                        key = {index}
                        stt = {index}
                        value = {value} 
                        order = {this.order}
                        productDetail1 = {this.productDetail1}
                    />
        });
        return (
	        <div className="content">
                <div className="content__allproduct">
                    <nav aria-label="breadcrumb" className="content__allproduct-nav">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to = "/" className="content__allproduct-link" >Trang chủ</Link></li>
                            <li className="breadcrumb-item active" aria-current="page" id="home_active">Tất cả sản phẩm</li>
                        </ol>
                    </nav>
                    <div id = {msg === true ? "msg1":"msg"}>Không có sản phẩm nào</div>
                    <div className={msg === true? "price_sort-hide":"price_sort"}>
                        <select id="selection-sort" onChange = {this.onChange}>
                            <option value="0">Sắp xếp</option>
                            <option value="1">Giá tăng dần</option>
                            <option value="2">Giá giảm dần</option>
                        </select>
                    </div>
                    <div className ="row" >
                        {element}
                    </div>
                </div>
                <nav aria-label="Page navigation example" className = {msg === true ? "price_sort-hide":"pagination"}>
                    <ul className="pagination">
                        <li className="page-item">
                            <a className="page-link" onClick = {()=>this.next(1)} >Previous</a>
                        </li>
                        {elm}    
                        <li className="page-item">
                            <a className="page-link" onClick = {()=>this.next(-1)} >Next</a>
                        </li>
                    </ul>
                </nav>
            </div>           
        );
    }
}

export default AllProduct;