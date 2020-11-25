import React from 'react';
import { BsArrowRightShort } from 'react-icons/bs';

function Newcollection() {
	return (
		<div className="newcollection">
			{/*===== NEW COLLECTION =====*/}
			<section className="new section" id="new">
				<h2 className="section-title">NEW COLLECTION</h2>
				<div className="new__container bd-grid">
					<div className="new__collection1">
						<img src="new1.png" alt="" className="new__collection1-img" />
						<h3 className="new__title">Gadget Crazy Lovers</h3>
						<span className="new__price">From $79.99</span>
						<a href="#" className="button-light">
							View Collection
							<BsArrowRightShort className="button-icon" />
						</a>
					</div>
					<div className="new__tech">
						<div className="new__tech-card">
							<img src="new2.png" alt="" className="new__tech-img" />
							<div className="new__tech-overlay">
								<a href className="button">
									Add to Cart
								</a>
							</div>
						</div>
						<div className="new__tech-card">
							<img src="new3.png" alt="" className="new__tech-img" />
							<div className="new__tech-overlay">
								<a href className="button">
									Add to Cart
								</a>
							</div>
						</div>
						<div className="new__tech-card">
							<img src="new4.png" alt="" className="new__tech-img" />
							<div className="new__tech-overlay">
								<a href className="button">
									Add to Cart
								</a>
							</div>
						</div>
						<div className="new__tech-card">
							<img src="new5.png" alt="" className="new__tech-img" />
							<div className="new__tech-overlay">
								<a href className="button">
									Add to Cart
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Newcollection;
