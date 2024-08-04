/**
 * app.js
 *
 * @author Ainsley Clark
 * @author URL:   https://ainsley.dev
 * @author Email: hello@ainsley.dev
 */

// require('./modernizr');
import AOS from 'aos';
import Glider from 'glider-js';
import { Collapse } from '../../views/components/collapse';

const html = document.querySelector('html');
const header = document.querySelector('.header');
const nav = document.querySelector('.nav');
import { homeSequence } from './pages/home';

/**
 * TODO, load in from a different file
 */
homeSequence();

/*
 * Remove No JS Body Class
 *
 */
html.classList.remove('no-js');
html.classList.add('js');

/*
 * Scroll
 * Adds header & nav classes after a certain scroll amount determined by scrollPos.
 */
const scrollPos = 100;

const headerScroll = () => {
	if (window.scrollY > scrollPos) {
		header.classList.add('header-scrolled');
		nav.classList.add('nav-scrolled');
	} else {
		header.classList.remove('header-scrolled');
		nav.classList.remove('nav-scrolled');
	}
};

window.addEventListener('scroll', headerScroll);
headerScroll();

/**
 * Initialise any collapsible elements
 */
new Collapse({
	accordion: true,
	container: '.collapse',
	item: '.collapse-item',
	inner: '.collapse-content',
	activeClass: 'collapse-item-active',
});

/**
 * Glider.js
 */
const initGlider = () => {
	document.querySelectorAll('.glider').forEach((el) => {
		new Glider(el, {
			draggable: true,
			slidesToShow: 1.4,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 568,
					settings: {
						slidesToShow: 1.5,
					},
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 'auto',
					},
				},
			],
		});
	});

	if (window.innerWidth > 768) {
		document.querySelectorAll('.glider-slide').forEach((el) => {
			el.style = '';
		});
	}
};

window.addEventListener('load', initGlider);
window.addEventListener('resize', initGlider);

/*
 * AOS
 *
 */

// You can also pass an optional settings object
// below listed default settings
AOS.init({
	// Global settings:
	disable: () => {
		const maxWidth = 1024;
		return window.innerWidth < maxWidth;
	}, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
	startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
	initClassName: 'aos-init', // class applied after initialization
	animatedClassName: 'aos-animate', // class applied on animation
	useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
	disableMutationObserver: false, // disables automatic mutations' detections (advanced)
	debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
	throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

	// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
	offset: 120, // offset (in px) from the original trigger point
	delay: 0, // values from 0 to 3000, with step 50ms
	duration: 600, // values from 0 to 3000, with step 50ms
	easing: 'ease', // default easing for AOS animations
	once: false, // whether animation should happen only once - while scrolling down
	mirror: false, // whether elements should animate out while scrolling past them
	anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});
