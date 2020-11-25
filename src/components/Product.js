import React from 'react';
import './Product.css';
import { HiShoppingCart } from 'react-icons/hi';

function Product() {
	
	return (
		<div>
			<div className="section-fluid-main">
				<div className="section1">
					<div className="new__tech-card">
						<img className="imgtech" src="/apple-iphone-12-pro-max-1.png" alt="" />
					</div>
					<div className="info1">
						<div className="info-wrap mob-margin">
							<p className="title-up">Smartphone</p>
							<h2>Apple Iphone 12 Pro Max</h2>
							<h4>
								$174 <span>$237</span>
							</h4>
							<div className="section-fluid">
								<input className="desc-btn" type="radio" id="desc-1" name="desc-btn" defaultChecked />
								<label htmlFor="desc-1">Description</label>
								<input className="desc-btn" type="radio" id="desc-2" name="desc-btn" />
								<label htmlFor="desc-2">Specifications</label>
								<div className="section-fluid desc-sec accor-1">
									<p>
										It is the biggest, heaviest, most powerful, and most feature-rich iPhone Apple.
									</p>
								</div>
								<div className="section-fluid desc-sec accor-2">
									<div className="section-inline">
										<p>
											<span>128</span>GB
											<br />
											Storage
										</p>
									</div>
									<div className="section-inline">
										<p>
											<span>6</span>GB
											<br />
											RAM
										</p>
									</div>
									<div className="section-inline">
										<p>
											<span>12.2 </span>MP
											<br />
											Main Camera
										</p>
									</div>
									<div className="section-inline">
										<p>
											<span>8</span>MP
											<br />
											Front Camera
										</p>
									</div>
								</div>
							</div>
							<h5>Choose Color:</h5>
							<div className="color-choose">
								<div>
									<input
										data-image="red"
										type="radio"
										id="red"
										name="color"
										defaultValue="red"
										defaultChecked
									/>
									<label htmlFor="red">
										<span />
									</label>
								</div>
								<div>
									<input data-image="blue" type="radio" id="blue" name="color" defaultValue="blue" />
									<label htmlFor="blue">
										<span />
									</label>
								</div>
								<div>
									<input
										data-image="black"
										type="radio"
										id="black"
										name="color"
										defaultValue="black"
									/>
									<label htmlFor="black">
										<span />
									</label>
								</div>
							</div>
							<h5>Quantity:</h5>
							<div className="box">
								<input type="number" defaultValue={1} />
							</div>
							<div className="clearfix" />
							<div className="info-wrap">
								<a href="#" className="btn">
									<HiShoppingCart /> Add To Cart
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Product;
