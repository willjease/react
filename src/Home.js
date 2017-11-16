import React, {Component} from "react";
import {Carousel, Row, Col} from "antd";
import api from "../service/api";
import ProductCard from "./components/ProductCard";
import "../css/home.css";

const imgs = [
  {
	img: "imgs/1.jpg",
	content: "鞋子"
  },
  {
	img: "imgs/2.jpg",
	content: "上衣"
  },
  {
	img: "imgs/3.jpg",
	content: "裤子"
  },
  {
	img: "imgs/4.jpg",
	content: "皮包"
  }
];

class Home extends Component {
  state = {
    allProducts: []
  }
  getProducts() {
    api.getProducts().then((res) => {
      if (res.OK) {
        this.setState({allProducts: res.docs});
      }
    })
  }
  componentWillMount() {
    this.getProducts();
  }
  render() {
    console.log("Props", this.props);
	return (
	  <div className="home">
	  <Carousel autoplay>
	  {
		imgs.map((img, i) => {
		  return (
			<div key={i}>
			<img style={{margin: "auto"}} src={img.img} alt={img.img}/>
			<h3>{img.content}</h3>
			</div>
		  )
		})
	  }
	  </Carousel>
      <div className="product">
      <Row gutter={10}>
      {
        this.state.allProducts.map((product, i) => (
          <Col span={12} key={i}>
          <ProductCard key={i} product={product}/>
          </Col>
        ))
      }
      </Row>
      </div>
	  </div>
	);
  }
}

export default Home;