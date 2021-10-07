
import React from 'react';
import './App.css';
import Carousel from 'react-bootstrap/Carousel';

function Home() {

	return (
		<div className="App" style={{ display: 'block', width: '1000px', margin: 'auto' }}>
			<div id="base">


			</div>

			<h4>Our Recommendations</h4>
			<Carousel>
				<Carousel.Item interval={1000}>
					<img
						className="d-block w-100"
						src="https://res.cloudinary.com/simplotel/image/upload/w_5000,h_3048/x_0,y_239,w_4994,h_2809,r_0,c_crop,q_80,fl_progressive/w_900,f_auto,c_fit/pride-hotel-bengaluru/Suite_-_Living_Room._v9cyzf"
						alt=""
					/>
					<Carousel.Caption>
						<h3>Raddison blu</h3>
						<p className="font" >We aim to redefine a new dimension for luxury and relaxation.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={1500}>
					<img
						className="d-block w-100"
						src="https://nobili-design.com/storage/posts/402/900_modern_hotel_room.jpg"
						alt=""
					/>
					<Carousel.Caption>
						<h3>ITC Grand Chola</h3>
						<p className="font" > Art of Luxury</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={1500}>
					<img
						className="d-block w-100"
						src="https://res.cloudinary.com/simplotel/image/upload/w_5000,h_3272/x_0,y_460,w_4994,h_2812,r_0,c_crop,q_80,fl_progressive/w_900,f_auto,c_fit/pride-hotel-bengaluru/Superior_Room_anltwz"
						alt=""
					/>
					<Carousel.Caption>
						<h3>The Imperial</h3>
						<p className="font" >Pinnacle of the Wealth</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>







	)
}

export default Home;