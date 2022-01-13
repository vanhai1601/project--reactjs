import React, { Component } from "react";
import './App.css';
import './login.css';
import "./Reponsiver.css";
import "./register.css";
import "./showroom.css";
import "./content.css";
import "./admin.css";
import "./introduce.css";
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import Showroom from "./components/ShowRoom";
import Content from "./components/Content";
import callAPI from "./utils/callAPI";
import Banner from "./components/Banner";
import Modal from "./components/Modal";
import HeaderTop from "./components/HeaderTop";
import HeaderNav from "./components/HeaderNav";
import Posts from "./components/Posts";
import ProductDetail from "./components/ProductDetail";
import AllProduct from "./components/AllProduct";
import Introduce from "./components/Introduce";
import Admin from "./components/Admin";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            data1:[],
            data2:[],
            productPagination: [],
            order: 0,
            checkLogin:"",
            orderList:[],
            currentPage: 1,
            itemsPerPage: 8,
            filterName: "",
            sort:0,
            totalPage:0,
            productDetail:null,
            checkScroll:false
        };
    }
    
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        callAPI("products", "GET", null).then(res => {
            this.setState({
                data: res.data.reverse()
            });
            var x = [];
            var y = [];
            for(var i = 0; i < res.data.length;i++){
                x[i] = res.data[i];
                y[i] = res.data[i];
            }

            x.sort(function(a, b){return b.quantitySold - a.quantitySold});
            y.sort(function(a, b){return b.sale - a.sale});

            this.setState({
                data1:x,
                data2:y
            });
        }).catch(error => {
            console.log(error);
        });

        callAPI("products/totalProduct", "GET", null).then(res => {
            var totalPage = Math.ceil(res.data / (this.state.itemsPerPage));
            this.setState({
                totalPage: totalPage
            });
        }).catch(error => {
            console.log(error);
        });
    }

    handleScroll = (event) => {
        var scrollTop = event.target.scrollingElement.scrollTop;
        if(scrollTop >= 800) {
            this.setState({
                checkScroll:true
            });
        } else {
            this.setState({
                checkScroll:false
            });
        }
    }

    orderProduct = (value) => {
        console.log(value);
        var {order, orderList, checkLogin} = this.state;
        var check = true;
        if(checkLogin === "") {
            alert("Đăng nhập để mua sản phẩm!");
        } else {
            if(window.confirm("Thêm sản phẩm vào giỏ hàng?")){ //eslint-disable-next-line no-restricted-globals
                order++;
                orderList.map((data,index) =>{
                    if(data.name === value.value.name){
                        check = false;
                        data.number++;
                    }
                });
                if(check) {
                    orderList.push(value.value);
                }
            }
        }      
        this.setState({
            order:order,
            orderList:orderList
        });
    }

    checkLogin = (data,value) => {
        console.log(value);
        this.setState({
            checkLogin:data.data,
            isAdmin:value
        });
    }

    deleteList =(value) =>{
        var {order} = this.state;
        var {orderList} = this.state;
        order = order - orderList[value.index].number;
        orderList.splice(value.index, 1);
        this.setState({
            orderList:orderList,
            order:order
        });
    }

    changeQuantity = (value) =>{
        var {order,orderList} = this.state;
        for(var i = 0; i < orderList.length;i++){
            if(i === value.index && orderList[i].number > 1){
                orderList[i].number--;
                order--;

            }
        }
        this.setState({
            orderList:orderList,
            order:order
        });
    }
    changeQuantity1 = (value) =>{
        var {order,orderList} = this.state;
        for(var i = 0; i < orderList.length;i++){
            if(i === value.index){
                orderList[i].number++;
                order++;
            }
        }
        this.setState({
            orderList:orderList,
            order:order
        });
    }

    productDetail = (value) => {
        this.setState({
            productDetail:value.value
        });
    }
    productDetail1 = (value) => {
        this.setState({
            productDetail:value.value
        });
    }

    setTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
    }

    next = (value,data) => {
        if( this.state.currentPage - value >= 1 && this.state.currentPage - value <= this.state.totalPage) {
            var currentPage = this.state.currentPage - value;
            this.setState({
                currentPage: currentPage,
                productPagination: data
            });
        }
    }

    showValue = (value,data) => {
        this.setState({
            productPagination:value,
            currentPage: data.value
        });
    }

    filter = (value) => {
        this.setState({
            filterName:value.txtName
        });
    }

    sortByName = (value, data) => {
        this.setState({
            sort:value,
            productPagination:data,
            currentPage: 1
        });
    }

    productPagination = (data) => {
        this.setState({
            productPagination: data
        });
    }
    render() {
        
        var {productPagination,isAdmin ,totalPage, checkLogin,checkScroll, orderList, order, data, data1, data2, isOrder,currentPage, filterName, sort,productDetail} = this.state;
        var pageNumbers = [];
        var match = `/${checkLogin}`;
        var checkAdmin = false;
        
        if(isAdmin === "ROLE_ADMIN") {
            checkAdmin = true;
            var elmAdmin = <Route path = "/admin">
                                <Admin data = {data} />
                            </Route>;
        }

        var msg = false;
        for (var i = 1; i <= totalPage ; i++) {
            pageNumbers.push(i);
        }

        // Tìm Kiếm
        if (filterName) {
            data = data.filter((value) => {
                return value.name.toLowerCase().indexOf(filterName.toLowerCase()) !== -1;
            });
            if(data.length === 0) {
                msg = true;
            }
        }
        return (

            <Router>
	            <div className = "my_header" id = {checkAdmin === true ? "my_header-hide":""}>
                    <div className="container">
                        <HeaderTop checkLogin = {checkLogin} order = {order} />
                    </div>
                </div>
                <div className="container">
	                <Switch>
                        <Route path = "/" exact >
                            <HeaderNav filter = {this.filter} 
                                        productPagination = {this.productPagination}
                            />    
                            <Modal 
                                orderList = {orderList} 
                                deleteList = {this.deleteList}
                                changeQuantity = {this.changeQuantity}
                                changeQuantity1 = {this.changeQuantity1}
                            />
                            <Banner />
                            <Content
                                orderProduct = {this.orderProduct}
                                data = {data}
                                data1 = {data1}
                                data2 = {data2} 
                                productDetail = {this.productDetail}
                            />
                            <Posts />
                            <Footer />
                        </Route>
                        <Route path = {match} exact >
                            <HeaderNav filter = {this.filter}
                                        productPagination = {this.productPagination} 
                            />    
                            <Modal 
                                orderList = {orderList} 
                                deleteList = {this.deleteList}
                                changeQuantity = {this.changeQuantity}
                                changeQuantity1 = {this.changeQuantity1}
                            />
                            <Banner />
                            <Content
                                orderProduct = {this.orderProduct}
                                data = {data}
                                data1 = {data1}
                                data2 = {data2} 
                                productDetail = {this.productDetail}
                            />
                            <Posts />
                            <Footer />
                        </Route>
                        <Route path = "/tat-ca-san-pham">
                            <HeaderNav filter = {this.filter} productPagination = {this.productPagination} />    
                            <Modal 
                                orderList = {orderList} 
                                deleteList = {this.deleteList}
                                changeQuantity = {this.changeQuantity}
                                changeQuantity1 = {this.changeQuantity1}
                            />
                            <AllProduct 
                                productPagination = {productPagination}
                                orderProduct = {this.orderProduct}
                                next = {this.next}
                                pageNumbers = {pageNumbers}
                                showValue = {this.showValue}
                                currentPage = {currentPage}
                                totalPage = {totalPage}
                                sortByName = {this.sortByName}
                                msg = {msg}
                                productDetail1 = {this.productDetail1}
                                sort = {sort}
                            />
                            <Footer />
                        </Route>
                        <Route path = "/dang-nhap">
                            <HeaderNav filter = {this.filter} productPagination = {this.productPagination}/>
                            <Login checkLogin = {this.checkLogin}
                                    isAdmin = {this.isAdmin}
                            />
                            <Footer />
                        </Route>
                        <Route path = "/dang-ky">
                            <HeaderNav filter = {this.filter} productPagination = {this.productPagination}/>
                            <Register />
                            <Footer />
                        </Route>
                        <Route path = "/chi-nhanh">
                            <HeaderNav filter = {this.filter} productPagination = {this.productPagination}/>
                            <Showroom />
                            <Footer />
                        </Route>
                        <Route path = "/gioi-thieu">
                            <HeaderNav filter = {this.filter} productPagination = {this.productPagination}/>
                            <Introduce />
                            <Footer />
                        </Route>
                        <Route path = "/chi-tiet-san-pham/:slug">
                            <HeaderNav filter = {this.filter} productPagination = {this.productPagination}/>
                            <Modal 
                                orderList = {orderList} 
                                deleteList = {this.deleteList}
                                changeQuantity = {this.changeQuantity}
                                changeQuantity1 = {this.changeQuantity1}
                            />
                            <ProductDetail
                                data = {data}
                                data1 = {data1}
                                data2 = {data2}
                                orderProduct = {this.orderProduct}
                                productDetail = {productDetail}
                            />
                            <Footer />
                        </Route> 
                    </Switch>        
	            </div>
                <i className="fas fa-arrow-up" id ={checkScroll === true ? "scrollTop":"hideScroll"} onClick = {this.setTop}></i>
	            <Switch>
                    {elmAdmin}
                </Switch>
            </Router>
        );
    }
}

export default App;