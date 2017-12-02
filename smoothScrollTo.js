/* 
 * Copyright 2015, Emanuel Rabina (http://www.ultraq.net.nz/)
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *     http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import Transition   from '@ultraq/transition';
import BezierEasing from 'bezier-easing';
import {$}          from 'dumb-query-selector';

const EASE = BezierEasing(0.25, 0.1, 0.25, 1.0);

/**
 * Smooth scroll an area of a page to bring another area of the page into view.
 * 
 * @param {String} containerSelector
 *   A CSS selector for picking out the scrolling container that has the target
 *   element to scroll into view.
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
		}, 800, EASE).start();
	}
	return Promise.resolve();
}
