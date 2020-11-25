import React from 'react';

function Newsletter() {
	return (
		<div className="newsletter">
			{/*===== NEWSLETTER =====*/}
			<section className="newsletter section">
				<div className="newsletter__container bd-grid">
					<div>
						<h3 className="newsletter__title">
							Subscribe And Get <br />
							10% OFF
						</h3>
						<p className="newsletter_description">Get 10% discount for all products</p>
					</div>
					<form action className="newsletter__subscribe">
						<input type="text" placeholder="@email.com" className="newsletter__input" />
						<a href className="button">
							Subscribe
						</a>
					</form>
				</div>
			</section>
		</div>
	);
}

export default Newsletter;
