/**
 * app.js
 *
 * @author Ainsley Clark
 * @author URL:   https://ainsley.dev
 * @author Email: hello@ainsley.dev
 */
require('./modernizr');
import { Collapse } from '../../views/components/collapse';

const html = document.querySelector('html');
const header = document.querySelector('.header');
const nav = document.querySelector('.nav');
import {homeSequence} from "./pages/home";

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
 *
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
