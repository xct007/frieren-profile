/* eslint-disable */

import type { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
	const positions = [
		{
			company: 'BOT WhatsApp',
			website: 'https://api.whatsapp.com/send?phone=6281278380339&text=#menu',
			jobTitle: 'Test',
			startDate: '2021-06-28',
			endDate: null,
			place: 'test',
			description: `* Unkwon`,
			technologies: [
				'JavaScript',
                'Python'
			],
		},
	];

	res.status(200).json({ positions });
};
