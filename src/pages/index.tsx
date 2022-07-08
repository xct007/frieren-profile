/* eslint-disable */

import absoluteUrl from 'next-absolute-url';
import { fetcher } from 'Utils/fetcher';
import { GetServerSideProps } from 'next';
import { ISkills } from '@Types';
import styled from 'styled-components';
import Typed from 'react-typed';

import { Container } from 'Atoms/Container';
import { SeoHead } from 'Atoms/SeoHead';

interface IProps {
	skills: ISkills;
}

function Home({ skills }: IProps) {
	const { AboutMe } = skills;
	const TalkAbout = [...AboutMe];
	return (
		<>
			<SeoHead
				title="David - Frieren"
				description="ayang Rose"
			/>

			<Container>
				<Headline>
					Hi,
					<wbr /> Welcome. <span>👋</span>
				</Headline>
				<p>
                My Name Is David Stefen Alvianus.
					<br />
					{' '}
					<Typed
						loop
						typeSpeed={100}
						backSpeed={20}
						strings={TalkAbout}
						smartBackspace
						backDelay={1000}
						loopCount={0}
						showCursor
						cursorChar="|"
					/>
					.
				</p>
			</Container>
		</>
	);
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
	const { origin } = absoluteUrl(req);
	const skills = await fetcher(`${origin}/api/skills`);

	return {
		props: {
			skills,
		},
	};
};

const Headline = styled.h2`
	font-size: 2rem;

	span {
		display: none;
	}

	@media screen and (min-width: 768px) {
		font-size: 3rem;

		span {
			display: inline-block;
		}

		@keyframes wave {
			0% {
				transform: rotate(0);
			}
			50% {
				transform: rotate(-10deg);
			}
			100% {
				transform: rotate(10deg);
			}
		}

		&:hover span {
			animation: wave 0.5s ease infinite;
		}
	}
`;

export default Home;
