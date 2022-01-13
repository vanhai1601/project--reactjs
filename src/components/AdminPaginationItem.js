import React, { Component } from "react";

class AdminPaginationItem extends Component {

    showValue = (value) => {
        this.props.showValue(value);
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
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

export default AdminPaginationItem;