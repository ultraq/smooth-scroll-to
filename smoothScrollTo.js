
import Transition, {EASE} from '@ultraq/transition';
import {$}                from 'dumb-query-selector';

/**
 * Smooth scroll to a page element identified by the given selector.
 * 
 * @param {String} containerSelector
 *   A CSS selector for picking out the scrolling container element that has the
 *   target element to scroll into view.
 * @param {String} targetSelector
 *   A CSS selector for picking out the element to scroll to.
 * @return {Promise}
 *   A promise that is resolved once the element has been scrolled to, or
 *   resolved immediately if the element doesn't exist.
 */
export default function smoothScrollTo(containerSelector, targetSelector) {

	let $container = $(containerSelector);
	let $target = $(targetSelector, $container);
	if ($target) {
		let initialScroll = $container.scrollTop;
		let scrollTarget = $target.getClientRects()[0].top - 20; // Aim for just a bit above the target

		return new Transition(delta => {
			$container.scrollTop = initialScroll + (scrollTarget * delta);
		}, 1000, EASE).start();
	}
	return Promise.resolve();
}
