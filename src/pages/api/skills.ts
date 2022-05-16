/* eslint-disable */

import type { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
	const technologies = [
		'JavaScript',
		'HTML',
        'Python',
		'Mobile legends',
		'Clash of Clans',
		'Anime',
		'Manga',
	];
	const frameworks = ['Laravel', 'Vue.js', 'Nuxt.js'];
	const databases = ['MySQL', 'PostgreSQL', 'Firebase'];
	const cms = ['WordPress', 'Statamic'];
	const various = ['SEO', 'Scrum', 'Agile', 'Jira', 'Confluence'];
	const design = ['Canva', 'Gravit', 'Figma'];
	const softSkills = [
		'Leadership',
		'Problem solving',
		'Creative thinking',
		'Flexible and adaptive',
		'Team player',
	];
	const languages = [
		{
			language: 'Indonesian',
			level: 'bilingual',
			icon: '🇮🇩',
		},
		{
			language: 'English',
			level: 'basic',
			icon: '🇬🇧',
		},
	];

	res.status(200).json({
		technologies,
		frameworks,
		databases,
		cms,
		various,
		design,
		softSkills,
		languages,
	});
};
