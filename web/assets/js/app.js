/**
 * app.js
 *
 * @author Ainsley Clark
 * @author URL:   https://ainsley.dev
 * @author Email: hello@ainsley.dev
 */

require('./modernizr');
import Glider from 'glider-js';
import { inView, animate } from "motion"
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
			slidesToShow: 1.2,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 568,
					settings: {
						slidesToShow: 1.4,
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

/**
 * AOS
 */
inView("#carousel li", (info) => {
	animate(info.target, { opacity: 1 })
})
