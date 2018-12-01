import React, { Component } from 'react';
//import { BrowserRouter, Route } from 'react-router-dom';

class Gallery extends Component {


  render() {
    return (

      <div class="container">
      <div class="row">
      <div class="gallery col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <h1 class="gallery-title">Gallery</h1>
      </div>
      
      {/*
      <div align="center">
          <button class="btn btn-default filter-button" data-filter="all">All</button>
          <button class="btn btn-default filter-button" data-filter="hdpe">HDPE Pipes</button>
          <button class="btn btn-default filter-button" data-filter="sprinkle">Sprinkle Pipes</button>
          <button class="btn btn-default filter-button" data-filter="spray">Spray Nozzle</button>
          <button class="btn btn-default filter-button" data-filter="irrigation">Irrigation Pipes</button>
      </div>
      <br/>*/}



          <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter hdpe">
              <img src="cosc457DbProject/tattoo_site/client/src/img/Gallery/gal1.jpg" class="img-responsive"/>
          </div>

          <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 ">
              <img src="img/Gallery/gal2.jpg" class="img-responsive"/>
          </div>

          <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 ">
              <img src={"./img/Gallery/gal3.jpg"} class="img-responsive"/>
          </div>

          <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 ">
              <img src={"/img/Gallery/gal4.jpg"} class="img-responsive"/>
          </div>

          <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 ">
              <img src={'../img/Gallery/gal5.jpg'} class="img-responsive"/>
          </div>

          <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter irrigation">
              <img src="../img/Gallery/gal6.jpg" class="img-responsive"/>
          </div>

          <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter spray">
              <img src="../img/Gallery/gal7.jpg" class="img-responsive"/>
          </div>

          <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter irrigation">
              <img src="../img/Gallery/gal8.jpg" class="img-responsive"/>
          </div>

          <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter irrigation">
              <img src="../img/Gallery/gal9.jpg" class="img-responsive"/>
          </div>

          <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter hdpe">
              <img src="../img/Gallery/gal10.jpg" class="img-responsive"/>
          </div>

      </div>
  </div>

    );
  }
}

export default Gallery;



