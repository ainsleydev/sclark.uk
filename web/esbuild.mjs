/**
 * This script sets up a development environment using esbuild and BrowserSync.
 * It supports two modes:
 * 1. Build Mode: Compiles the source files once.
 * 2. Watch Mode: Compiles the source files and sets up file watchers to automatically
 *    rebuild and reload the browser on file changes.
 *
 * Usage:
 * - Build Mode: `node esbuild.js`
 * - Watch Mode: `node esbuild.js --watch`
 */
import * as esbuild from 'esbuild';
import browsersync from 'browser-sync';
import { sassPlugin } from 'esbuild-sass-plugin';
import copyAndConvertImages from './bin/images.mjs';

// eslint-disable-next-line
const isProd = !process.argv.includes('--watch');

/**
 * ESBuild options for building the project.
 *
 * @type {import('esbuild').CommonOptions}
 */
const options = {
	entryPoints: [
		{ in: 'assets/js/app.js', out: 'js/app' },
		{ in: 'assets/scss/app.scss', out: 'css/app' },
	],
	bundle: true,
	outdir: 'dist',
	logLevel: 'info',
	plugins: [sassPlugin()],
	minify: isProd,
	allowOverwrite: true,
};

(async () => {
	// Check for watch flag in arguments
	if (isProd) {
		await copyAndConvertImages('assets/images', 'dist/images');
		await esbuild.build(options);
	} else {
		// Create esbuild context
		const esbuildContext = await esbuild.context(options);

		/**
		 * @type {import('browser-sync').BrowserSyncInstance}
		 */
		const bs = browsersync.create();
		bs.init({
			open: false,
			port: 3002,
			logLevel: 'info',
			logPrefix: 'ainsley.dev',
			proxy: {
				target: 'localhost:3000',
			},
			ui: {
				port: 3003,
			},
		});

		const rebuild = (file) => {
			console.log('✨ Build complete: ' + file);
			bs.reload(); // Reload after successful build
		};

		const watchAsset = async (event, file) => {
			try {
				await esbuildContext.rebuild();
				rebuild(file);
			} catch (err) {
				console.error('Build failed:', err);
			}
		};

		const watchImages = async (event, file) => {
			if (event === 'add' || event === 'change') {
				await copyAndConvertImages('assets/images', 'dist/images');
				rebuild(file);
			}
		};

		const watchGo = async (event, file) => {
			if (event !== 'change') {
				return;
			}
			await new Promise((resolve) => setTimeout(resolve, 3000)); // Debounce
			try {
				await esbuildContext.rebuild();
				console.log(file);
				bs.reload(); // Reload after successful build
			} catch (err) {
				console.error('Build failed:', err);
			}
		};

		bs.watch('{views,assets}/**/*.js', watchAsset);
		bs.watch('{views,assets}/**/*.{scss,css,js}', watchAsset);
		bs.watch('assets/images/**/*.{png,jpg,jpeg,gif}', watchImages);
		bs.watch('./**/*.go', watchGo);
	}
})();
