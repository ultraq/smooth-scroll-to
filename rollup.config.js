
import commonjs    from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import uglify      from 'rollup-plugin-uglify';
import {minify}    from 'uglify-es';

/**
 * Rollup configuration for a standalone browser artifact.
 */
export default {
	input: 'smoothScrollTo.js',
	output: {
		file: 'dist/smooth-scroll-to.min.js',
		format: 'iife',
		name: 'smoothScrollTo'
	},
	plugins: [
		nodeResolve(),
		commonjs(),
		// uglify({}, minify)
	],
	sourcemap: true
};
