import React, { Component } from "react";
class OrderList extends Component {
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
        var {index} = this.props;
        var {value} = this.props;
        var formater = new Intl.NumberFormat('de-DE');
        return (
            <tr>
                <th scope="col">{index + 1}</th>
                <th scope="col">{value.name}</th>
                <th scope="col">{formater.format(value.price*(1 - value.sale/100))}</th>
                <th scope="col">
                    <button type= "button" className= "btn1" onClick = {()=>this.changeQuantity({index})}>-</button>
                        <input type="text" className="my_spinner" value={value.number} />
                    <button type= "button" className= "btn2" onClick = {()=>this.changeQuantity1({index})}>+</button>
                </th>
                <th scope="col">{formater.format(value.price*(1 - value.sale/100)*value.number)}</th>
                <th scope="col">
                    <button className="delete" onClick = {()=>this.deleteList({index})}> <i class='far fa-trash-alt'> </i> </button>
                </th>
            </tr>
        );
    }
}

export default OrderList
;