/* eslint-disable */
import { FC } from 'react';
import Link from 'next/link';
import { List, StyledNavigation } from './styles';

import { ThemeToggle } from 'Atoms/ThemeToggle';

interface NavigationProps {
	onClick?: () => void;
}

const Navigation: FC<NavigationProps> = ({ onClick }) => {
	return (
		<StyledNavigation>
			<List>
				<li>
					<Link href="/">
						<a onClick={onClick}>Home</a>
					</Link>
				</li>
				<li>
					<Link href="/about">
						<a onClick={onClick}>About</a>
					</Link>
				</li>
				<li>
					<Link href="https:/frieren.herokuapp.com">
						<a target="_blank" onClick={onClick}>Rest APIs</a>
					</Link>
				</li>
				<li className="desktop-only">
					<ThemeToggle />
				</li>
			</List>
		</StyledNavigation>
	);
};

export { Navigation };
