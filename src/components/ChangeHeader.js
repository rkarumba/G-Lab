
function ChangeHeader() {
	window.onscroll = () => {
        const scrollY = window.pageYOffset
		const nav = document.getElementById('header');
		if (scrollY >= 200) nav.classList.add('scroll-header');
		else nav.classList.remove('scroll-header');
	};
	return null;
}

export default ChangeHeader;
