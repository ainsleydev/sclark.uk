import * as migration_20240806_155319 from './20240806_155319';
import * as migration_20240808_110205 from './20240808_110205';

export const migrations = [
	{
		up: migration_20240806_155319.up,
		down: migration_20240806_155319.down,
		name: '20240806_155319',
	},
	{
		up: migration_20240808_110205.up,
		down: migration_20240808_110205.down,
		name: '20240808_110205',
	},
];
