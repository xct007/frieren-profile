/* eslint-disable */

import type { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
	const education = [
		{
			institute: 'Institut Teknologi Pagar Alam',
			website: 'https://itpa.ac.id/',
			course: 'Programmer',
			startDate: '2021-08-28',
			endDate: '2021-08-28',
			place: 'boarding school',
			technologies: [
				'C++',
                'JavaScript',
                'HTML',
                'PHP',
                'Python',
			],
		},
	];

	res.status(200).json({ education });
};
