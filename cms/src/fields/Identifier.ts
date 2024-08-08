import type { Field } from 'payload';

export const IdentifierField: Field = {
	name: 'id',
	label: 'ID',
	type: 'text',
	required: false,
	admin: {
		description: 'Add an optional identifier to the block that will be rendered in the HTML',
	},
};
