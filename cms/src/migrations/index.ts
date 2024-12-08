import * as migration_20240808_153642 from './20240808_153642';
import * as migration_20241208_111536 from './20241208_111536';

export const migrations = [
	{
		up: migration_20240808_153642.up,
		down: migration_20240808_153642.down,
		name: '20240808_153642',
	},
	{
		up: migration_20241208_111536.up,
		down: migration_20241208_111536.down,
		name: '20241208_111536',
	},
];
