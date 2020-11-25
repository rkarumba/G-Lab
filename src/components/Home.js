import React from 'react';

function home() {
	return (
		<div className="home">
			<section className="home" id="home">
				<div className="home__container bd-grid">
					<div className="home__tech">
						<div className="home__shape" />
						<img src="apple-iphone-12-pro-max-1.png" alt="" className="home__img" />
					</div>
					<div className="home__data">
						<span className="home__new"> New in </span>
						<h1 className="home__title">
							APPLE <br />
							IPHONE 12 PRO MAX
						</h1>
						<p className="home__description">Get your hands on apple's latest flagship device.</p>
						<a href="home" className="button">
							Buy now
						</a>
					</div>
				</div>
			</section>
		</div>
	);
}

export default home;
