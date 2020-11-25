import React from 'react';

function Offer() {
	return (
		<div className="offer">
			{/*===== OFFER =====*/}
			<section className="offer section">
				<h2 className="section-title">OFFERS</h2>
				<div className="offer__container bd-grid">
					<div className="offer__data">
						<h3 className="offer__title">50% OFF</h3>
						<p className="offer__description">In Adidas Superstar Sneakers</p>
						<a href className="button">
							Shop Now
						</a>
					</div>
					<img src="offert.png" alt='' className="offer__img" />
				</div>
			</section>
		</div>
	);
}

export default Offer;
