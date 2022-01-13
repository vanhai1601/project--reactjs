import React, { Component } from "react";
import {Link} from "react-router-dom";
import toSlug from "../utils/toSlug";
import callAPI from "../utils/callAPI";
import AdminItem from "./AdminItem";
import AdminPaginationItem from "./AdminPaginationItem";
import AdminModal from "./AdminModal";

class Admin extends Component {
    constructor(props){
        super(props);
        this.state = {
            data:[],
            dataCategory:[],
            dataUpdate:null,
            currentPage: 1,
            itemsPerPage: 10,
            indexOfLastNews: 10,
            indexOfFirstNews: 1,
            textForm:false,
            filterName:"",
            txtName:""
        };
    }
    componentDidMount() {
        callAPI("products", "GET", null).then(res => {
            this.setState({
                data: res.data
            });
        }).catch(error => {
            console.log(error);
        });

        callAPI("categorys", "GET", null).then(res => {
            this.setState({
                dataCategory: res.data
            });
        }).catch(error => {
            console.log(error);


        });
    }

    onChange = (event) => {
          var target = event.target;
          var name = target.name;
          var value = target.value;
          this.setState({
            [name]:value
          });
    }

    next = (value) => {
        var {data,itemsPerPage} = this.state;
        var n = Math.ceil(data.length / (itemsPerPage));
        if( this.state.currentPage - value >= 1 && this.state.currentPage - value <= n) {
            var currentPage = this.state.currentPage - value;
            var indexOfLastNews = currentPage*10;
            var indexOfFirstNews = currentPage*10 - 9;
            this.setState({
                currentPage: currentPage,
                indexOfLastNews: indexOfLastNews,
                indexOfFirstNews: indexOfFirstNews 
            });
        }
    }
    showValue = (value) => {
         var indexOfLastNews = value.value*10;
         var indexOfFirstNews = value.value*10 - 9;

        this.setState({
            currentPage : value.value,
            indexOfLastNews: indexOfLastNews,
            indexOfFirstNews: indexOfFirstNews 
        });
    }
    showData = (value) => {
        this.setState({
            dataUpdate:value.value,
            txtForm : true
        });
    }
    setTxtForm = (value) => {
        this.setState({
            txtForm:false
        });
    }
    onSubmit = (value) =>{
        var {data} = this.state;
        if(value.id === ""){
            data.push(value);
        } else {
            data.forEach((val,index) => {
                if(val.id === value.id){
                    data[index] = value;
                }

            });
        }
        this.setState({
            data:data,
        });

    }

    deleteProduct = (value) => {
        var {data} = this.state;
        
        var id = data[value.stt -1].id;
        if(window.confirm("Xóa sản phẩm?")){ //eslint-disable-next-line no-restricted-globals
            callAPI(`products/${id}`,"DELETE",null).then(res =>{
                if(res.status === 200){
                    data.forEach((val,index) => {
                        if(val.id === id) {
                            data.splice(index,1);
                        }
                        this.setState({
                            data:data
                        });
                    });
                }
            }).catch(error => {
                console.log(error);
            });
        }    
    }

    onClick = (value) => {
        console.log(value.txtName);
        this.setState({
            filterName: value.txtName
        });
    }

    render() {
        var {data,currentPage,itemsPerPage,indexOfLastNews,indexOfFirstNews,
            dataUpdate,isToggle,txtForm,dataCategory,txtName, filterName} = this.state;
        var pageNumbers = [];

        if(filterName) {
            data = data.filter((value) => {
                if(toSlug(value.name).indexOf(toSlug(filterName)) !== -1){
                    return toSlug(value.name).indexOf(toSlug(filterName)) !== -1;
                } else if(toSlug(value.code).indexOf(toSlug(filterName)) !== -1){
                    return toSlug(value.code).indexOf(toSlug(filterName)) !== -1;
                }
            });
        }

        var n = Math.ceil(data.length / (this.state.itemsPerPage));
        for (var i = 1; i <= n ; i++) {
            pageNumbers.push(i);
        }
        data = data.slice(indexOfFirstNews -1 ,indexOfLastNews);
        var element = data.map((value,index) =>{
            return <AdminItem
                        key = {index}
                        index = {index}
                        value = {value}
                        showData = {this.showData}
                        currentPage = {currentPage}
                        itemsPerPage = {itemsPerPage}
                        deleteProduct = {this.deleteProduct}
                    />    
        });

        var elm = pageNumbers.map((value,index) => {
            return <AdminPaginationItem 
                        key = {index}
                        value = {value}
                        showValue = {this.showValue}
                        currentPage = {currentPage}
                        
                    />
        });



        return (
	        <div className="admin">
                <AdminModal dataUpdate = {dataUpdate}
                            onSubmit = {this.onSubmit}
                            setTxtForm = {this.setTxtForm}
                            txtForm = {txtForm}
                            dataCategory = {dataCategory}

                 />
                <div className = "admin__header">
                    <img src="https://i.imgur.com/QeOTtum.png" alt="" />
                    <a href="">
                        <i className="fas fa-user"></i>
                        Admin
                    </a>
                </div>
                <div className= "admin__nav">
                    <ul className = "admin__nav-list">
                        <li className = "admin__nav-active"><a href="">DANH SÁCH SẢN PHẨM</a></li>
                        <li><a href="">THỂ LOẠI SẢN PHẨM</a></li>
                        <li><a href="">DANH SÁCH TÀI KHOẢN</a></li>
                    </ul>
                </div>
                <div className = "btnNew">
                    <div className = "search">
                        <input className="form-control header__nav-input" type="text" placeholder="Search"
                        name = "txtName"
                        value = {this.state.txtName}
                        onChange = {this.onChange} 
                        />
                        <i className="fas fa-search" onClick = {() => this.onClick({txtName})}></i>    
                    </div>
                    <button 
                        type="button" 
                        className="btn btn-success mr-10"
                        data-toggle="modal" data-target="#adminModal"
                    >
                        Thêm sản phẩm
                </button>
                </div>
                <div className = "admin__content">
                    <table>
                        <thead>
                            <tr>
                                <th className= "text-center">Stt</th>
                                <th className= "text-center">Tên Sản phẩm</th>
                                <th className= "text-center">Code</th>
                                <th className= "text-center">Hình ảnh</th>
                                <th className= "text-center">Số lượng</th>
                                <th className= "text-center">Số lượng đã bán</th>
                                <th className= "text-center">Giá</th>
                                <th className= "text-center">Sale</th>
                                <th className= "text-center">Mô Tả</th>
                                <th className= "text-center">Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {element}
                        </tbody>
                    </table>
                </div>
                <nav aria-label="Page navigation example" className = "pagination">
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

export default Admin;