/* eslint-disable */

import absoluteUrl from 'next-absolute-url';
import { differenceInCalendarYears } from 'date-fns';
import { fetcher } from 'Utils/fetcher';
import { GetServerSideProps } from 'next';
import styled from 'styled-components';
import { useState } from 'react';

import { IEducation, IJob } from '@Types';

import { Container } from 'Atoms/Container';
import { Education } from 'Atoms/Education';
import { Position } from 'Atoms/Position';
import { SeoHead } from 'Atoms/SeoHead';

interface IProps {
	jobs: IJob[];
	education: IEducation[];
}

function About({ jobs, education }: IProps) {
	const [loadedJobs, setLoadedJobs] = useState(2);

	const loadMore = () => {
		setLoadedJobs((prev) => prev + 3);
	};

	return (
		<>
			<SeoHead
				title="About"
				description="Apa itu cinta"
			/>

			<Container>
				<Headline>About Me.</Headline>
				<h3>Cinta</h3>
				<p></p>
				<p>Sebuah kata yang terucap jika kita sedang melalui sebuah peristiwa yang biasa disebut "jatuh" kemudian di tambahkan sebuah kata yang memiliki sekian makna yaitu "cinta" dan terbentuk lah istilah "Jatuh cinta".</p>

				<p>Dan ketika semua hal yang berhubungan dengan cinta akan menjadi sebuah tanda tanya bagi kita yang bingung akan rasa yang dirasa, seperti apa itu, bagaimana itu, mengapa itu, siapa itu.</p>
				<p>Seakan semua nya tidak bermakna, apa yang di rasa, seperti apa yang akan dirasa, kebahagian, kesedihan, ketakutan, cemburu. Reaksi kompleks yang begitu banyak melibatkan elemen pengalaman, perilaku, dan fisiologis. </p>
				<p>Karena itulah dalam hal cinta saya lebih condong ke tidak mau bercinta, njir :v</p>
				<h2>Pendidikan</h2>
				{education.map((edu) => (
					<Education education={edu} key={edu.course} />
				))}

				<Center>
					<a href="/rose.jpeg" target="_blank">
						Download a copy of my CV
					</a>
				</Center>
			</Container>
		</>
	);
}

const Headline = styled.h2`
	font-size: 2rem;
	margin-bottom: 0;

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

const Center = styled.div`
	text-align: center;
	font-weight: bold;
	margin-top: 2rem;

	button {
		display: block;
		margin: 2rem auto;
		border: 2px solid ${({ theme }) => theme.text};
		color: ${({ theme }) => theme.text};
		padding: 0.5rem 3rem;
		border-radius: 5px;
		background: transparent;
	}
`;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
	const { origin } = absoluteUrl(req);
	const { positions } = await fetcher(`${origin}/api/jobs`);
	const { education } = await fetcher(`${origin}/api/education`);
	const skills = await fetcher(`${origin}/api/skills`);

	return {
		props: {
			jobs: positions,
			education,
			skills,
		},
	};
};

export default About;
