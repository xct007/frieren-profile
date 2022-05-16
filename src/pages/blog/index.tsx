/* eslint-disable */
import { getAllDocuments } from 'Utils/api';
import orderBy from 'lodash.orderby';
import styled from 'styled-components';

import { BlogPost } from 'Atoms/BlogPost';
import { Container } from 'Atoms/Container';
import { SeoHead } from 'Atoms/SeoHead';

export default function Blog({ posts }: any) {
	return (
		<>
			<SeoHead
				title="Blog"
				description="so"
			/>
			<Container>
				<Headline>Blog</Headline>
				{posts.map((post: any) => (
					<BlogPost post={post} key={post.slug} />
				))}
			</Container>
		</>
	);
}

export async function getStaticProps() {
	const posts = getAllDocuments('BLOG', [
		'title',
		'description',
		'slug',
		'tags',
		'date',
	]);

	const sortedPosts = orderBy(posts, ['date'], ['desc']);

	return {
		props: { posts: sortedPosts },
	};
}

const Headline = styled.h2`
	font-size: 2rem;
	margin-bottom: 0;

	@media screen and (min-width: 768px) {
		font-size: 3rem;
	}
`;
