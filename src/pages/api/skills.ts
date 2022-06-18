/* eslint-disable */

import type { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
	const technologies = [
        'You can ask me about Python',
        'You are welcome to inquire about the English language',
		`You can ask me about anime if you're a weeb`,
		'Also you can ask me about manga',
        'You can ask me about blackPink',
        'You can ask me about love',
        "You can inquire as to why I am alone",
        "You are welcome to inquire as to why I am lonely",
		'If you have any questions concerning JavaScript, please do not hesitate to contact me',
        "Ask ask ask ask anythings"
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
