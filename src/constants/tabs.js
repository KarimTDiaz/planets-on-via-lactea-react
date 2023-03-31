import { v4 } from 'uuid';

export const TABS = [
	{
		mobile: 'overview',
		desktop: 'overview',
		id: v4()
	},
	{
		mobile: 'structure',
		desktop: 'internal structure',
		id: v4()
	},
	{
		mobile: 'surface',
		desktop: 'structure geology',
		id: v4()
	}
];
