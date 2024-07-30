import type { CollectionConfig } from 'payload';

export const Users: CollectionConfig = {
	slug: 'users',
	admin: {
		useAsTitle: 'email',
		defaultColumns: ['id', 'name', 'email', 'createdAt'],
	},
	auth: {
		// maxLoginAttempts: 5,
		lockTime: 600 * 1000,
		useAPIKey: true,
	},
	fields: [
		{
			name: 'name',
			type: 'text',
			required: true,
			validate: (value: string) => {
				if (!value) {
					return 'Name is required';
				}

				const names = value.split(' ');
				if (names.length !== 2) {
					return 'Name must include both first and last name';
				}

				return true;
			},
		},
	],
};
