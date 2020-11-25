import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import { BsArrowRightShort } from 'react-icons/bs';

function shop() {
	return (
		<Router>
			<div className="shop">
				{/*===== ALL PRODUCTS =====*/}
				<section className="featured section" id="featured">
					<h2 className="section-title">ALL PRODUCTS</h2>
					<div className="featured__container bd-grid">
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

					<div className="tech__pages bd-grid">
						<div>
							<span className="tech__pag page-active">1</span>
							<span className="tech__pag">2</span>
							<span className="tech__pag">3</span>
							<span className="tech__pag">4</span>
							<span className="tech__pag">→</span>
						</div>
					</div>
				</section>
			</div>
		</Router>
	);
}

export default shop;
