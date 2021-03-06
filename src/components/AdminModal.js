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
                    alert("Th??m s???n ph???m th??nh c??ng");
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
                alert("L??u th??nh c??ng");
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
        var txt = this.state.id !== "" ? "C???p nh???p s???n ph???m" : "Th??m s???n ph???m m???i";
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
                                    <label>T??n s???n ph???m</label>
                                    <input type="text" 
                                        name = "name"
                                        value = {this.state.name} 
                                        onChange = {this.onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>M?? S???n ph???m</label>
                                    <input type="text" 
                                        name = "code"
                                        value = {this.state.code} 
                                        onChange = {this.onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Th??? Lo???i S???n Ph???m</label>
                                    <select id="selection-sort" onChange = {this.onChangeSelect} value = {this.state.category}>
                                        {elm}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>H??nh ???nh</label>
                                    <input type="text" 
                                        name = "img"
                                        value = {this.state.img} 
                                        onChange = {this.onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>S??? l?????ng</label>
                                    <input type="text" 
                                        name = "quantity"
                                        value = {this.state.quantity} 
                                        onChange = {this.onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>S??? l?????ng ???? b??n</label>
                                    <input type="text" 
                                        name = "quantitySold"
                                        value = {this.state.quantitySold} 
                                        onChange = {this.onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Gi??</label>
                                    <input type="text" 
                                        name = "price"
                                        value = {this.state.price} 
                                        onChange = {this.onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Khuy???n m???i</label>
                                    <input type="text" 
                                        name = "sale"
                                        value = {this.state.sale} 
                                        onChange = {this.onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>M?? t???</label>
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
                                L??u
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