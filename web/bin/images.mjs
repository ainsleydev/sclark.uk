import path from 'path';
import fs from 'fs-extra';
import sharp from 'sharp';

/**
 * Image sizes and format options for resizing and converting images.
 *
 * @type {import('payload/types').ImageSize[]}
 */
export const imageSizes = [
	// Original Size (for WebP & Avif)
	{
		name: 'webp',
		width: undefined,
		height: undefined,
		formatOptions: {
			format: 'webp',
			options: {
				quality: 80,
			},
		},
	},
	{
		name: 'avif',
		width: undefined,
		height: undefined,
		formatOptions: {
			format: 'avif',
			options: {
				quality: 80,
			},
		},
	},
	// Thumbnail Sizes
	{
		name: 'thumbnail',
		width: 400,
		height: 300,
		position: 'centre',
	},
	{
		name: 'thumbnail_webp',
		width: 400,
		height: 300,
		position: 'centre',
		formatOptions: {
			format: 'webp',
			options: {
				quality: 80,
			},
		},
	},
	{
		name: 'thumbnail_avif',
		width: 400,
		height: 300,
		position: 'centre',
		formatOptions: {
			format: 'avif',
			options: {
				quality: 80,
			},
		},
	},
	// Mobile Sizes
	{
		name: 'mobile',
		width: 768,
		height: undefined,
	},
	{
		name: 'mobile_webp',
		width: 768,
		height: undefined,
		formatOptions: {
			format: 'webp',
			options: {
				quality: 80,
			},
		},
	},
	{
		name: 'mobile_avif',
		width: 768,
		height: undefined,
		formatOptions: {
			format: 'avif',
			options: {
				quality: 80,
			},
		},
	},
	// Tablet Sizes
	{
		name: 'tablet',
		width: 1024,
		height: undefined,
	},
	{
		name: 'tablet_webp',
		width: 1024,
		height: undefined,
		formatOptions: {
			format: 'webp',
			options: {
				quality: 80,
			},
		},
	},
	{
		name: 'tablet_avif',
		width: 1024,
		height: undefined,
		formatOptions: {
			format: 'avif',
			options: {
				quality: 80,
			},
		},
	},
];

/**
 * Generates a filename for an image based on the original filename, size name, and format options.
 *
 * @param {string} filePath - The path to the original image file.
 * @param {string} sizeName - The name of the size configuration.
 * @param {object} formatOptions - The format options object specifying the desired image format and options.
 * @returns {string} - The generated filename.
 */
function generateFileName(filePath, sizeName, formatOptions) {
	const originalName = path.parse(path.basename(filePath)).name;
	const formattedSizeName = sizeName.replaceAll('_', '-');
	const formatExtension = formatOptions ? `.${formatOptions.format}` : '.jpg';
	return `${originalName}-${formattedSizeName}${formatExtension}`;
}

/**
 * Resizes and converts an image to the specified format.
 *
 * @param {string} filePath - The path to the original image file.
 * @param {string} destDir - The destination directory where resized images will be saved.
 * @param {import('payload/types').ImageSize} size - The size configuration object specifying width, height, and format options.
 * @returns {Promise<void>} - A promise that resolves when the image processing is complete.
 */
async function processImage(filePath, destDir, size) {
	const { name, width, height, formatOptions } = size;

	// Create a sharp instance for the image file
	let image = sharp(filePath);

	// Resize the image if width or height is specified
	image = image.resize(width, height);

	// Convert to specified format if formatOptions are provided
	if (formatOptions) {
		const { format, options } = formatOptions;
		image = image.toFormat(format, options);
	}

	// Save the processed image to destination directory
	await image.toFile(path.join(destDir, generateFileName(filePath, name, formatOptions)));
}

/**
 * Copies files from a source directory to a destination directory and converts
 * them based on size configurations.
 *
 * @param {string} srcDir - The source directory path.
 * @param {string} destDir - The destination directory path.
 * @returns {Promise<void>} - A promise that resolves when all files are copied and converted successfully, or rejects if there's an error.
 */
async function copyAndConvertImages(srcDir, destDir) {
	try {
		const files = await fs.readdir(srcDir);

		await fs.ensureDir(destDir);

		for (const file of files) {
			const filePath = path.join(srcDir, file);
			const destPathOriginal = path.join(destDir, file);

			const fileStat = await fs.stat(filePath);
			if (fileStat.isFile()) {
				// Copy the original file
				await fs.copy(filePath, destPathOriginal);

				// Process each size configuration
				for (const size of imageSizes) {
					await processImage(filePath, destDir, size);
				}
			}
		}
	} catch (error) {
		console.error('Error copying and converting images:', error);
	}
}

export default copyAndConvertImages;
