import React from 'react';
import { BsArrowRightShort } from 'react-icons/bs';

function Collection() {
	return (
		<div className="collection">
			{/*===== COLLECTION =====*/}
			<section className="collection section">
				<h2 className="section-title">BRAND COLLECTIONS</h2>
				<div className="collection__container bd-grid">
					<div className="collection__card">
						<div className="collection__data">
							<h3 className="collection__name">Samsung</h3>
							<p className="collection__description">New<br/> Samsung<br/> Collection 2020</p>
							<a href="#" className="button-light">
								Buy now <BsArrowRightShort className="button-icon" />
							</a>
						</div>
						<img src="samsungphone4.png" alt="" className="collection__img" />
					</div>
					<div className="collection__card">
						<div className="collection__data">
							<h3 className="collection__name">Apple</h3>
							<p className="collection__description">New Apple Collection 2020</p>
							<a href="#" className="button-light">
								Buy now <BsArrowRightShort className="button-icon" />
							</a>
						</div>
						<img src="applephone.png" alt="" className="collection__img2" />
					</div>

					<div className="collection__card">
						<div className="collection__data">
							<h3 className="collection__name">JBL</h3>
							<p className="collection__description">New JBL Collection 2020</p>
							<a href="#" className="button-light">
								Buy now <BsArrowRightShort className="button-icon" />
							</a>
						</div>
						<img src="jbl.png" alt="" className="collection__img3" />
					</div>
				</div>
			</section>
		</div>
	);
}

export default Collection;
