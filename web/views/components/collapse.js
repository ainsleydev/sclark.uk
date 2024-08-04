/**
 * CollapseOptions is the global configuration of
 * collapsible elements.
 *
 * @typedef {Object} CollapseOptions
 * @property {boolean} [accordion=false]
 * @property {string} [container='.collapse']
 * @property {string} [item='.collapse-item']
 * @property {string} [inner='.collapse-content']
 * @property {string} [activeClass='collapse-item-active']
 */

/**
 * Collapse is responsible for creating collapsible
 * animations from multiple containers using
 * the <detail> element.
 */
export class Collapse {
	/**
	 * The default options for the collapsable content,
	 * when properties are not defined.
	 *
	 * @readonly
	 * @type {CollapseOptions}
	 */
	defaultOptions = {
		accordion: false,
		container: '.collapse',
		item: '.collapse-item',
		inner: '.collapse-content',
		activeClass: 'collapse-item-active',
	};

	/**
	 * Options define the collapsible options.
	 *
	 * @type {CollapseOptions}
	 */
	options;

	/**
	 * Creates a new collapsible type ranging over
	 * all the containers within the DOM.
	 *
	 * @param {CollapseOptions} [options]
	 */
	constructor(options) {
		this.options = { ...this.defaultOptions, ...options };
		const containers = document.querySelectorAll(options.container);
		containers.forEach((container) => {
			this.attachClickHandler(container);
		});
	}

	/**
	 * Attaches the click event to the headers defined
	 * in the container.
	 *
	 * @private
	 * @param {HTMLElement} container
	 */
	attachClickHandler(container) {
		const headers = container.querySelectorAll(this.options.item);
		headers.forEach((header) => {
			header.addEventListener('click', (e) => {
				e.preventDefault();
				this.options.accordion
					? this.accordion(headers, header)
					: this.toggle(header, false);
			});
		});
	}

	/**
	 * Toggles and removes the active class if the
	 * option accordion is flagged.
	 *
	 * @private
	 * @param {NodeListOf<HTMLElement>} headers
	 * @param {HTMLElement} current
	 */
	accordion(headers, current) {
		headers.forEach((el) => this.toggle(el, el !== current));
	}

	/**
	 * Applies the active class and asserts the maximum
	 * height of the element.
	 *
	 * @private
	 * @param {HTMLElement} item
	 * @param {boolean} force
	 */
	toggle(item, force) {
		const active = this.options.activeClass;
		const inner = item.querySelector(this.options.inner);
		if (!inner) {
			console.error(`Accordion - No inner item found for accordion item: ${item}`);
			return;
		}

		let height = 0;
		if (!item.classList.contains(active) && !force) {
			height = this.calculateHeight(inner);
			item.classList.add(active);
		} else {
			item.classList.remove(active);
		}

		inner.style.maxHeight = `${height}px`;
	}

	/**
	 * Calculates the height of the items and child
	 * items within the given element.
	 *
	 * @private
	 * @param {HTMLElement} el
	 * @returns {number}
	 */
	calculateHeight(el) {
		const children = Array.from(el.children);
		let height = 0;
		children.forEach((child) => {
			height += child.clientHeight;
		});
		return height;
	}
}
