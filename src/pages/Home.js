import React, {Component} from "react";
import {Carousel} from "antd";
import "../css/home.css";

const imgs = [
	{
		img: "/imgs/1.jpg",
		content: "火影1"
	},
	{
		img: "/imgs/2.jpg",
		content: "火影2"
	},
	{
		img: "/imgs/3.jpg",
		content: "火影3"
	},
	{
		img: "/imgs/4.jpg",
		content: "火影4"
	},
	{
		img: "/imgs/5.jpg",
		content: "火影5"
	},
	{
		img: "/imgs/6.jpg",
		content: "火影6"
	}
];

class Home extends Component {
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
			</div>
		);	
	}
}

export default Home;