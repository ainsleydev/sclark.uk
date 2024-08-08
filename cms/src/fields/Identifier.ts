import type { Field } from 'payload';

const randomString = (length: number): string => {
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
	let result = '';
	const charactersLength = characters.length;
	for (let i = 0; i < length; i++) {
		const randomIndex = Math.floor(Math.random() * charactersLength);
		result += characters[randomIndex];
	}
	return result;
};

export const IdentifierField: Field = {
	name: 'identifier',
	label: 'Identifier',
	type: 'text',
	required: true,
	defaultValue: () => {
		return randomString(12);
	},
	admin: {
		description: 'Add an optional identifier to the block that will be rendered in the HTML',
	},
};
