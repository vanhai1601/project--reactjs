import React, { Component } from "react";
import callAPI from "../utils/callAPI";

class PaginationItem extends Component {    
    constructor(props) {
        super(props);
        this.state = {
            productPagination: []
        };
    }    

    showValue = (value) => {
        if(this.props.sort === 1){
            callAPI(`products/sort?page=${value.value}&sort=1`, "GET", null).then(res => {
            this.props.showValue(res.data,value);
            }).catch(error => {
                console.log(error);
            });
        } else if(this.props.sort === 0) {
            callAPI(`products/pagination?page=${value.value}`, "GET", null).then(res => {
            this.props.showValue(res.data,value);
            }).catch(error => {
                console.log(error);
            });
        } else {
            callAPI(`products/sort?page=${value.value}&sort=0`, "GET", null).then(res => {
            this.props.showValue(res.data,value);
            }).catch(error => {
                console.log(error);
            });
        }
    }    
    render() {
    	var {value} = this.props;
        return (

            <li className="page-item">
				<a 
					className = {this.props.currentPage === this.props.value ? "page-link active" : "page-link"}  
					onClick = {() => this.showValue({value})}
				>
					{value}
				</a>
			</li>

        );
    }
}

export default PaginationItem;