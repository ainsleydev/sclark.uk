import { animate, spring, stagger, timeline } from 'motion';

/**
 * Obtain the elements by their id.
 *
 * @param ids {string[]}
 */
const mapLetters = (ids) => {
	return ids.map((id) => {
		const el = document.querySelector(id);
		if (el === null) {
			throw new Error(`Element with id ${id} not found.`);
		}
		return el;
	});
};

const staggerAmount = 0.05;

/**
 * Common properties for all animations.
 *
 * @param at
 * @returns {[{y: number[], opacity: number[]},{duration: number, at: number, delay: OptionResolver<number>, easing: EasingGenerator}]}
 */
const properties = (at = 0) => {
	return [
		{ y: [-500, 0], opacity: [0, 1] },
		{
			duration: 1,
			at: at,
			delay: stagger(staggerAmount),
			easing: spring({
				stiffness: 70,
				damping: 10,
			}),
		},
	];
};

/**
 * Main sequence of animations for the homepage.
 */
const scrabbleSequence = [
	[mapLetters(['#scrabble-word-seo-letter-s', '#scrabble-word-seo-letter-e']), ...properties(0)],
	[
		mapLetters([
			'#scrabble-word-content-letter-c',
			'#scrabble-word-content-letter-o',
			'#scrabble-word-content-letter-n',
			'#scrabble-word-content-letter-t',
			'#scrabble-word-content-letter-e',
			'#scrabble-word-content-letter-n-2',
		]),
		...properties(staggerAmount * 2),
	],
	[
		mapLetters([
			'#scrabble-word-writing-letter-w',
			'#scrabble-word-writing-letter-r',
			'#scrabble-word-writing-letter-i',
			'#scrabble-word-writing-letter-t',
			'#scrabble-word-writing-letter-i-2',
			'#scrabble-word-writing-letter-n',
			'#scrabble-word-writing-letter-g',
		]),
		...properties(staggerAmount * 5),
	],
	[
		mapLetters([
			'#scrabble-word-teacher-letter-e',
			'#scrabble-word-teacher-letter-a',
			'#scrabble-word-teacher-letter-c',
			'#scrabble-word-teacher-letter-h',
			'#scrabble-word-teacher-letter-e-2',
			'#scrabble-word-teacher-letter-r',
		]),
		...properties(staggerAmount * 4),
	],
	[
		mapLetters([
			'#scrabble-word-speech-letter-s',
			'#scrabble-word-speech-letter-p',
			'#scrabble-word-speech-letter-e',
			'#scrabble-word-speech-letter-e-2',
			'#scrabble-word-speech-letter-c',
		]),
		...properties(staggerAmount * 6),
	],
	[
		'#scrabble-icon-translate, #scrabble-icon-google, #scrabble-icon-globe',
		{ y: [-100, 0], opacity: [0, 1] },
		{
			duration: 1.8,
			delay: 0.5,
			at: 0,
			easing: spring({
				stiffness: 70,
				damping: 10,
			}),
		},
	],
	[
		'.hero .logos-item',
		{ y: [-100, 0], opacity: [0, 1] },
		{
			duration: 1.8,
			delay: stagger(staggerAmount),
			at: 0.8,
			easing: spring({
				stiffness: 70,
				damping: 10,
			}),
		},
	],
	[
		'.scrabble-grid',
		{ opacity: [0, 1] },
		{
			duration: 1,
			at: 0,
		},
	],
	[
		'.hero .logos-title',
		{ opacity: [0, 1] },
		{
			duration: 1.8,
			at: 0.8,
		},
	],
];

const heroContentSequence = [
	[
		'.hero p, .hero .btn, .hero h1, .header, .blocks-item-gradient',
		{ opacity: [0, 1] },
		{
			duration: 1.8,
			at: 0,
		},
	],
];

export const homeSequence = () => {
	timeline(scrabbleSequence).play();
	timeline(heroContentSequence).play();
};
