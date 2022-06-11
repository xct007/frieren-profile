import { FC } from 'react';
import Head from 'next/head';

export interface HeadProps {
	title: string;
	description: string;
	lang?: string;
	keywords?: string;
	author?: string;
	image?: string;
	meta?: Array<{
		name: string;
		content: string;
	}>;
}

const SeoHead: FC<HeadProps> = ({
	title,
	description,
	author = 'Rose_are_rosie',
	keywords,
	image = 'https://itsrose.my.id/rose.jpeg ',
	meta,
}) => {
	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta name="author" content={author} />
			<meta name="og:title" content={title} />
			<meta name="og:description" content={description} />
			<meta name="og:type" content="website" />
			<meta name="og:url" content="https://itsrose.my.id/" />
			<meta name="twitter:card" content="summary" />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:creator" content={author} />
			{meta &&
				meta.length > 0 &&
				meta.map(({ name, content }) => (
					<meta name={name} content={content} key={name} />
				))}
			{image && <meta name="og:image" content={image} />}
			{image && <meta name="twitter:image" content={image} />}
			{keywords && <meta name="keywords" content={keywords} />}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: `{"@context":"http://schema.org","@type":"WebSite","name":"","alternateName":"Frieren","url":"https://itsrose.my.id/","description":"Rose - Frieren","image":"${image}"}`,
				}}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: `{"@context":"http://schema.org","@type":"Person","image":"https://frieren.my.id/rose.jpeg","name":"Frieren","alternateName":"JakeHerp","url":"https://frieren.my.id/","jobTitle":["Junior Software Engineer","Frontend Engineer", "Front-End Developer", "Web Developer"],"hasOccupation":{"@type":"Occupation","name":"Senior Software Engineer","occupationLocation":{"@type":"City","name":"London"},"estimatedSalary":[{"@type":"MonetaryAmountDistribution","name":"base","currency":"GBP","duration":"P1H","percentile10":"74","percentile25":"80","median":"90","percentile75":"100","percentile90":"106"}],"description":"Develops web applications and websites using JavaScript, React and HTML5.","skills":"HTML5, CSS, JavaScript, React, PHP, Sass, Less, Node.js, Express.js, Vue.js, Gatsby, Next.js, JavaScript Frameworks, Git, Github, NPM, SEO, CMS, WordPress, Joomla, Drupal, E-Commerce","alternateName":["Frontend Developer","Full Stack Developer","Frontend Engineer"],"responsibilities":["App Development","Web Design","Website Development","JavaScript Development","WordPress Development","CMS Development","Frontend Development","Full Stack Development","Online Marketing","SEO Services","Web Developer","Website Maintenance"]},"sameAs":["http://linkedin.com/in/jacobherper","http://twitter.com/jakeherp","https://github.com/jakeherp","https://www.facebook.com/jakeherp","https://instagram.com/jakeherp"],"brand":[{"@type":"Brand","name":"Software Engineer","alternateName":"Front-End Engineer"},{"@type":"Brand","name":"JakeHerp","alternateName":"Jacob Herper"}],"memberOf":[{"@type":"Organization","url":"https://creativ.agency/","name":"Creativ Agency Ltd","alternateName":"Creativ Advertising Agency"},{"@type":"Organization","url":"https://www.dennis.co.uk/","name":"Dennis Digital","alternateName":"Dennis"}],"homeLocation":{"@type":"City","name":"London"},"owns":{"@type":"Organization","url":"https://creativ.agency/","name":"Creativ Agency Ltd","alternateName":"Creativ Advertising Agency","sameAs":"https://www.linkedin.com/company/creativ.agency"},"alumniOf":{"@type":"Organization","url":"https://www.thespecialistworks.com/","name":"The Specialist Works"},"nationality":{"@type":"Country","name":"Germany"},"birthDate":"1990-11-06","birthPlace":{"@type":"Place","address":{"@type":"PostalAddress","addressLocality":"Oelsnitz","postalCode":"08606","addressCountry":"Germany"}},"parent":[{"name":"Norbert Herper","jobTitle":"Chef","birthDate":"1967-08-22"},{"name":"Anne-Kristin Herper","birthDate":"1968-02-26"}],"spouse":{"name":"Cinthia Cid Paz","birthDate":"1990-09-19","nationality":{"@type":"Country","name":"Mexico"},"birthPlace":{"@type":"Place","address":{"@type":"PostalAddress","addressLocality":"Toluca","addressCountry":"Mexico"}}}}`,
				}}
			/>
		</Head>
	);
};

export { SeoHead };
