import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

function Footer() {
	return (
		<div className="footer">
			<footer className="footer section">
				<div className="footer__container bd-grid">
					<div className="footer__box">
						<h3 className="footer__title">
							<img src="1acc4dba-e5b4-4035-a7b5-7cc516662f13_200x200.png" alt="" width="70px" />
						</h3>
						<p className="footer__description">Authentic Gadget Stores 2020.</p>
					</div>
					<div className="footer__box">
						<h3 className="footer__title">EXPLORE</h3>
						<ul>
							<li>
								<Link to="/" className="footer__link">
									Home
								</Link>
							</li>
							<li>
								<a href="/#featured" className="footer__link">
									Featured
								</a>
							</li>
							<li>
								<Link to="./Shop.js" className="footer__link">
									Shop
								</Link>
							</li>
						</ul>
					</div>
					<div className="footer__box">
						<h3 className="footer__title">SUPPORT</h3>
						<ul>
							<li>
								<a href="#" className="footer__link">
									Product Help
								</a>
							</li>
							<li>
								<a href="#" className="footer__link">
									Customer Care
								</a>
							</li>
							<li>
								<a href="#" className="footer__link">
									Track Order
								</a>
							</li>
						</ul>
					</div>
					<div className="footer__box">
						<a href className="footer__social">
							<FaFacebook />
						</a>
						<a href className="footer__social">
							<FaInstagram />
						</a>
						<a href className="footer__social">
							<FaTwitter />
						</a>
						<a href className="footer__social">
							<SiGmail />
						</a>
					</div>
				</div>
				<p className="footer__copy">© 2020 G-Lab. All Rights Reserved</p>
			</footer>
		</div>
	);
}

export default Footer;
