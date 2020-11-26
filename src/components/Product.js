import React from 'react';
import './Product.css';
import { HiShoppingCart } from 'react-icons/hi';

function Product({
	ProductImage,
	ProductName,
	ProductPrice,
	ProductOldPrice,
	ProductDescription,
	ProductStorageNumber,
	ProductMemoryNumber,
	ProductMainCameraSpecs,
	ProductFrontCameraSpecs,
}) {
	return (
		<div>
			<div className="section-fluid-main">
				<div className="section1">
					<div className="new__tech-card">
						<img className="imgtech" src={ProductImage} alt="ProductImage" />
					</div>
					<div className="info1">
						<div className="info-wrap mob-margin">
							<p className="title-up">Smartphone</p>
							<h2>{ProductName}</h2>
							<h4>
								{ProductPrice} <span>{ProductOldPrice}</span>
							</h4>
							<div className="section-fluid">
								<input className="desc-btn" type="radio" id="desc-1" name="desc-btn" defaultChecked />
								<label htmlFor="desc-1">Description</label>
								<input className="desc-btn" type="radio" id="desc-2" name="desc-btn" />
								<label htmlFor="desc-2">Specifications</label>
								<div className="section-fluid desc-sec accor-1">
									<p>{ProductDescription}</p>
								</div>
								<div className="section-fluid desc-sec accor-2">
									<div className="section-inline">
										<p>
											<span>{ProductStorageNumber}</span>GB
											<br />
											Storage
										</p>
									</div>
									<div className="section-inline">
										<p>
											<span>{ProductMemoryNumber}</span>GB
											<br />
											RAM
										</p>
									</div>
									<div className="section-inline">
										<p>
											<span>{ProductMainCameraSpecs}</span>MP
											<br />
											Main Camera
										</p>
									</div>
									<div className="section-inline">
										<p>
											<span>{ProductFrontCameraSpecs}</span>MP
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
