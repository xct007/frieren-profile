/* eslint-disable */

import type { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
	const technologies = [
		'You can ask me about JavaScript',
        'You can ask me about Python',
        'You can ask me about English language',
		'You can ask me about Anime',
		'You can ask me about Manga',
        'You can ask me about BlackPink',
        'You can ask me about Love',
        "You can ask me about Why I'm Alone",
        "You can ask me about Why I'm Lonely",
        "You can ask me Anythink you want to ask!"
	];
    const greetings = ['mate']
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
