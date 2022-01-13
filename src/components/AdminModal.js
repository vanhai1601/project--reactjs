import React, { Component } from "react";
import OrderList from "./OrderList";
import callAPI from "../utils/callAPI"

class Modal extends Component {
    constructor(props){
        super(props);
        this.state = {
            id:"",
            name:"",
            code:"",
            img:"",
            category:"",
            number :1,
            quantity:"",
            quantitySold:"",
            price:"",
            sale:"",
            descriptions:""
        };
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps && nextProps.txtForm === false) {
            this.state = {
            id:"",
            name:"",
            code:"",
            img:"",
            category:"",
            quantity:"",
            number:1,
            quantitySold:"",
            price:"",
            sale:"",
            descriptions:""
          };
        }
        if (nextProps && nextProps.dataUpdate) {
          this.setState({
            id:nextProps.dataUpdate.id,
            name:nextProps.dataUpdate.name,
            code:nextProps.dataUpdate.code,
            img:nextProps.dataUpdate.img,
            number:1,
            category:nextProps.dataUpdate.category,
            quantity:nextProps.dataUpdate.quantity,
            quantitySold:nextProps.dataUpdate.quantitySold,
            price:nextProps.dataUpdate.price,
            sale:nextProps.dataUpdate.sale,
            descriptions:nextProps.dataUpdate.descriptions
          });
        } else if (nextProps.dataUpdate == null) {
          this.state = {
            id:"",
            name:"",
            code:"",
            img:"",
            category:"",
            quantity:"",
            number:1,
            quantitySold:"",
            price:"",
            sale:"",
            descriptions:""
          };
        }
    }
    
    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
          [name]: value,
        });
    };

    closeForm = () => {
        this.props.setTxtForm(false);
        this.setState({
            id:"",
            name:"",
            code:"",
            img:"",
            category:"",
            quantity:"",
            number:1,
            quantitySold:"",
            price:"",
            sale:"",
            descriptions:""
        });
    }

    onSubmit = (event) => {
        event.preventDefault();
        if (this.state.id === "") {
            callAPI("products","POST",{
                name:this.state.name,
                code:this.state.code,
                category:this.state.category,
                img:this.state.img,
                quantity:this.state.quantity,
                quantitySold:this.state.quantitySold,
                price:this.state.price,
                sale:this.state.sale,
                descriptions:this.state.descriptions
            }).then(res => {
                if(res.status === 200) {
                    this.props.onSubmit(this.state);
                    alert("Thêm sản phẩm thành công");
                }
            }).catch(error => {
                console.log(error);
            });
        } else {
            callAPI(`products/${this.state.id}`,"PUT",{
            name:this.state.name,
            code:this.state.code,
            category:this.state.category,
            img:this.state.img,
            quantity:this.state.quantity,
            quantitySold:this.state.quantitySold,
            price:this.state.price,
            sale:this.state.sale,
            descriptions:this.state.descriptions
        }).then(res =>{
            if(res.status === 200) {
                this.props.onSubmit(this.state);
                alert("Lưu thành công");
            }
        }).catch(error => {
            console.log(error);
        });
        }
        
    }

    onChangeSelect = (event) => {
        this.setState({
            category: event.target.value
        });
    }
    

    render() {
        var {dataUpdate,dataCategory} = this.props;
        var txt = this.state.id !== "" ? "Cập nhập sản phẩm" : "Thêm sản phẩm mới";
        var elm = dataCategory.map((value,index) =>{
            return <option key = {index} value={value.categoryCode}>{value.categoryName}</option>
        });
    	return(           
    		<div className="modal fade" id="adminModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog admin-modal">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                {txt}
                            </h5>
                            <button type="button" 
                                    onClick = {this.closeForm} 
                                    className="close" data-dismiss="modal" 
                                    aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit = {this.onSubmit}>
                                <div className="form-group">
                                    <label>Tên sản phẩm</label>
                                    <input type="text" 
                                        name = "name"
                                        value = {this.state.name} 
                                        onChange = {this.onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Mã Sản phẩm</label>
                                    <input type="text" 
                                        name = "code"
                                        value = {this.state.code} 
                                        onChange = {this.onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Thể Loại Sản Phẩm</label>
                                    <select id="selection-sort" onChange = {this.onChangeSelect} value = {this.state.category}>
                                        {elm}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Hình ảnh</label>
                                    <input type="text" 
                                        name = "img"
                                        value = {this.state.img} 
                                        onChange = {this.onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Số lượng</label>
                                    <input type="text" 
                                        name = "quantity"
                                        value = {this.state.quantity} 
                                        onChange = {this.onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Số lượng đã bán</label>
                                    <input type="text" 
                                        name = "quantitySold"
                                        value = {this.state.quantitySold} 
                                        onChange = {this.onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Giá</label>
                                    <input type="text" 
                                        name = "price"
                                        value = {this.state.price} 
                                        onChange = {this.onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Khuyến mại</label>
                                    <input type="text" 
                                        name = "sale"
                                        value = {this.state.sale} 
                                        onChange = {this.onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Mô tả</label>
                                    <textarea id="story" 
                                            type="text" 
                                            name = "descriptions"
                                            value = {this.state.descriptions}
                                            onChange = {this.onChange} 
                                    />
                                </div>
                                <button 
                                    type="submit" 
                                    className="btn btn-success mr-10"
                                >
                                Lưu
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    	);
    }
}

export default Modal;