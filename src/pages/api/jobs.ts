/* eslint-disable */

import type { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
	const positions = [
		{
			company: '',
			website: '',
			jobTitle: '',
			startDate: '2021-06-28',
			endDate: null,
			place: '',
			description: `*
*
* `,
			technologies: [
				'HTML',
				'CSS',
				'javascript',
			],
		},
	];

	res.status(200).json({ positions });
};
