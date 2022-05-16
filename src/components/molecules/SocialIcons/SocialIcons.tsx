import { FC } from 'react';
import { StyledSocialIcons } from './styles';

import { Icon } from 'Atoms/Icon';

const SocialIcons: FC = () => {
	return (
		<StyledSocialIcons>
			<li>
				<a
					href="https://instagram.com/david.stefen"
					target="_blank"
					rel="noopener noreferrer"
					title="Instagram"
				>
					<Icon icon="INSTAGRAM" />
				</a>
			</li>
			<li>
				<a
					href="https://wa.me/6282280781433"
					target="_blank"
					rel="noopener noreferrer"
					title="WhatsApp"
				>
					<Icon icon="WHATSAPP" />
				</a>
			</li>
		</StyledSocialIcons>
	);
};

export { SocialIcons };
