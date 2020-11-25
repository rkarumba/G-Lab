import React from 'react';

function SideMenu() {
	/*===== MENU SHOW =====*/
	const showMenu = (toggleId, navId) => {
		const toggle = document.getElementById(toggleId),
			nav = document.getElementById(navId);

		if (toggle && nav) {
			toggle.addEventListener('click', () => {
				nav.classList.toggle('show');
			});
		}
	};

	showMenu('nav-toggle', 'nav-menu');

	/*===== REMOVE MENU =====*/
	const navLink = document.querySelectorAll('.nav__link'),
		navMenu = document.getElementById('nav-menu');

	function linkAction() {
		navMenu.classList.remove('show');
	}
	navLink.forEach((n) => n.addEventListener('click', linkAction));
	return null;
}

export default SideMenu;
