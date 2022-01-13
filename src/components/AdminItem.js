import React, { Component } from "react";
import {Link} from "react-router-dom";
import toSlug from "../utils/toSlug";
import callAPI from "../utils/callAPI";

class AdminItem extends Component {
    showData = (value) => {
        this.props.showData(value);
    }
    deleteProduct = (value) => {
        this.props.deleteProduct(value);      
    }
    render() {
        var {index,value,currentPage,itemsPerPage} = this.props;
        var stt = index +1 + (currentPage -1)*itemsPerPage;
        return (
            <tr>
                <td>{stt}</td>
                <td>{value.name}</td>
                <td>{value.code}</td>
                <td><img src={value.img} alt="" /></td>
                <td>{value.quantity}</td>
                <td>{value.quantitySold}</td>
                <td>{value.price}</td>
                <td>{value.sale}%</td>
                <td>{value.descriptions}</td>
                <td>
                    <button 
                        type="button" 
                        className="btn btn-success mr-10"
                        data-toggle="modal" data-target="#adminModal"
                        onClick = {() => this.showData({value})}
                    >
                        Chỉnh sửa
                    </button>
                    
                    <button 
                        type="button" 
                        className="btn btn-danger"
                        onClick = {() => this.deleteProduct({stt})}
                    >
                        Xóa
                    </button>
                </td>
            </tr>
        );
    }
}

export default AdminItem;