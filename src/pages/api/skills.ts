/* eslint-disable */

import type { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
	const technologies = [
        'You can ask me about JavaScript',
	'You can ask me about Python',
        'You can ask me about English Language',
	'You can ask me about Anime',
	'You can ask me about BlackPink',
	'You can ask me about Anythings',
	];
	res.status(200).json({
		technologies
	});
};
