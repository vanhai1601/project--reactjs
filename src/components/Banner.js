import React, { Component } from "react";


class Banner extends Component {
    render() {
        return (

            <div className="banner">
                <div className="row banner__top">
                  <div className="col-xl-9 col-lg-9 col-md-12 banner__top-left">
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                      <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active bg-dark"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1" className="bg-dark"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2" className="bg-dark"></li>
                      </ol>
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <img src="https://i.imgur.com/zS7ibtr.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                          <img src="https://i.imgur.com/dLmGxai.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                          <img src="https://i.imgur.com/jm1QJDR.jpg" className="d-block w-100" alt="..." />
                        </div>
                      </div>
                      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                      </a>
                      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-3 banner__top-right hide-tablet">
                    <div className="banner__top-image">
                      <a href=""><img src="https://i.imgur.com/soxLAlu.jpg" alt="" /></a>
                    </div>
                    <div className="banner__top-image">
                      <a href=""><img src="https://i.imgur.com/8b6me5q.jpg" alt="" /></a>
                    </div>
                    <div className="banner__top-image">
                      <a href=""><img src="https://i.imgur.com/JhrJTgq.jpg" alt="" /></a>
                    </div>
                  </div>
                </div>
                <div className="row banner__tablet">
                  <div className="col-md-4">
                    <a href=""><img src="https://i.imgur.com/soxLAlu.jpg" alt="" /></a>
                  </div>
                  <div className="col-md-4">
                    <a href=""><img src="https://i.imgur.com/8b6me5q.jpg" alt="" /></a>
                  </div>
                  <div className="col-md-4">
                    <a href=""><img src="https://i.imgur.com/JhrJTgq.jpg" alt="" /></a>
                  </div>
                </div>
                <div className="row banner__bottom">
                  <div className="col-md-4 banner__bottom-image">
                    <a href=""><img src="https://i.imgur.com/Feex8of.jpg" alt="" /></a>
                  </div>
                  <div className="col-md-4 banner__bottom-image">
                    <a href=""><img src="https://i.imgur.com/f4KplBR.jpg" alt="" /></a>
                  </div>
                  <div className="col-md-4 banner__bottom-image">
                    <a href=""><img src="https://i.imgur.com/5u5SiPp.jpg" alt="" /></a>
                  </div>
                </div>
            </div>
        );
    }
}

export default Banner;