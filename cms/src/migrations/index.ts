import * as migration_20240808_153642 from './20240808_153642';

export const migrations = [
	{
		up: migration_20240808_153642.up,
		down: migration_20240808_153642.down,
		name: '20240808_153642',
	},
];
