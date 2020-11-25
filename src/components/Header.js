import React from 'react';
import { HiShoppingCart } from 'react-icons/hi';
import { BiMenuAltLeft } from 'react-icons/bi';
import { Link } from 'react-router-dom';

function header() {
	return (
		<div>
			<header className="l-header" id="header">
				<nav className="nav bd-grid">
					<div className="nav__toggle" id="nav-toggle">
						<BiMenuAltLeft />
					</div>
					<a href="/home" className="nav__logo">
						<img src="1acc4dba-e5b4-4035-a7b5-7cc516662f13_200x200.png" alt="" width="50px" />
					</a>
					<div className="nav__menu" id="nav-menu">
						<ul className="nav__list">
							<li className="nav__item">
								<Link to="/" className="nav__link active">
									Home
								</Link>
							</li>
							<li className="nav__item">
								<a href="/#featured" className="nav__link">
									Featured
								</a>
							</li>
							<li className="nav__item">
								<Link to="./Shop.js" className="nav__link">
									Shop
								</Link>
							</li>
							<li className="nav__item">
								<a href="#Login" className="nav__link">
									Log In
								</a>
							</li>
							<li className="nav__item">
								<a href="#Signup" className="nav__link">
									Sign Up
								</a>
							</li>
						</ul>
					</div>
					<div className="nav__shop">
						<HiShoppingCart />
					</div>
				</nav>
			</header>
		</div>
	);
}

export default header;
