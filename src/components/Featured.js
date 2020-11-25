import React from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function featured() {
	return (
		<div>
			{/*===== FEATURED =====*/}
			<section className="featured section" id="featured">
				<h2 className="section-title">FEATURED</h2>
				<div className="featured__container bd-grid">
					<article className="tech">
						<div className="tech__sale">SALE</div>
						<Link to="/Product.js">
							<img src="apple-iphone-12-pro-max-1.png" alt="" className="tech__img" />
						</Link>
						<span className="tech__name">Apple Iphone 11 Pro Max.</span>
						<span className="tech__price">$149.99</span>

						<a href className="button-light">
							Add to Cart <BsArrowRightShort className="button-icon" />
						</a>
					</article>
					<article className="tech">
						<div className="tech__sale">SALE</div>
						<img src="apple-iphone-12-pro-max-1.png" alt="" className="tech__img" />
						<span className="tech__name">Apple Iphone 11 Pro Max.</span>
						<span className="tech__price">$149.99</span>
						<a href className="button-light">
							Add to Cart <BsArrowRightShort className="button-icon" />
						</a>
					</article>
					<article className="tech">
						<div className="tech__sale">SALE</div>
						<img src="apple-iphone-12-pro-max-1.png" alt="" className="tech__img" />
						<span className="tech__name">Apple Iphone 11 Pro Max.</span>
						<span className="tech__price">$149.99</span>
						<a href className="button-light">
							Add to Cart <BsArrowRightShort className="button-icon" />
						</a>
					</article>
					<article className="tech">
						<div className="tech__sale">SALE</div>
						<img src="apple-iphone-12-pro-max-1.png" alt="" className="tech__img" />
						<span className="tech__name">Apple Iphone 11 Pro Max.</span>
						<span className="tech__price">$149.99</span>
						<a href className="button-light">
							Add to Cart <BsArrowRightShort className="button-icon" />
						</a>
					</article>
					<article className="tech">
						<div className="tech__sale">SALE</div>
						<img src="apple-iphone-12-pro-max-1.png" alt="" className="tech__img" />
						<span className="tech__name">Apple Iphone 11 Pro Max.</span>
						<span className="tech__price">$149.99</span>
						<a href className="button-light">
							Add to Cart <BsArrowRightShort className="button-icon" />
						</a>
					</article>
					<article className="tech">
						<div className="tech__sale">SALE</div>
						<img src="apple-iphone-12-pro-max-1.png" alt="" className="tech__img" />
						<span className="tech__name">Apple Iphone 11 Pro Max.</span>
						<span className="tech__price">$149.99</span>
						<a href className="button-light">
							Add to Cart <BsArrowRightShort className="button-icon" />
						</a>
					</article>
					<article className="tech">
						<div className="tech__sale">SALE</div>
						<img src="apple-iphone-12-pro-max-1.png" alt="" className="tech__img" />
						<span className="tech__name">Apple Iphone 11 Pro Max.</span>
						<span className="tech__price">$149.99</span>
						<a href className="button-light">
							Add to Cart <BsArrowRightShort className="button-icon" />
						</a>
					</article>
					<article className="tech">
						<div className="tech__sale">SALE</div>
						<img src="apple-iphone-12-pro-max-1.png" alt="" className="tech__img" />
						<span className="tech__name">Apple Iphone 11 Pro Max.</span>
						<span className="tech__price">$149.99</span>
						<a href className="button-light">
							Add to Cart <BsArrowRightShort className="button-icon" />
						</a>
					</article>
					<article className="tech">
						<div className="tech__sale">SALE</div>
						<img src="apple-iphone-12-pro-max-1.png" alt="" className="tech__img" />
						<span className="tech__name">Apple Iphone 11 Pro Max.</span>
						<span className="tech__price">$149.99</span>
						<a href className="button-light">
							Add to Cart <BsArrowRightShort className="button-icon" />
						</a>
					</article>
					<article className="tech">
						<div className="tech__sale">SALE</div>
						<img src="apple-iphone-12-pro-max-1.png" alt="" className="tech__img" />
						<span className="tech__name">Apple Iphone 11 Pro Max.</span>
						<span className="tech__price">$149.99</span>
						<a href className="button-light">
							Add to Cart <BsArrowRightShort className="button-icon" />
						</a>
					</article>
					<article className="tech">
						<div className="tech__sale">SALE</div>
						<img src="apple-iphone-12-pro-max-1.png" alt="" className="tech__img" />
						<span className="tech__name">Apple Iphone 11 Pro Max.</span>
						<span className="tech__price">$149.99</span>
						<a href className="button-light">
							Add to Cart <BsArrowRightShort className="button-icon" />
						</a>
					</article>
					<article className="tech">
						<div className="tech__sale">SALE</div>
						<img src="apple-iphone-12-pro-max-1.png" alt="" className="tech__img" />
						<span className="tech__name">Apple Iphone 11 Pro Max.</span>
						<span className="tech__price">$149.99</span>
						<a href className="button-light">
							Add to Cart <BsArrowRightShort className="button-icon" />
						</a>
					</article>
				</div>
			</section>
		</div>
	);
}

export default featured;
