import { StyledThemeToggle } from './styles';

import { getTheme } from 'Redux/selectors';
import { setTheme } from 'Redux/actions/theme';
import { useDispatch, useSelector } from 'react-redux';

import Dark from 'Public/assets/dark.svg';
import Light from 'Public/assets/light.svg';

const ThemeToggle = () => {
	const theme = useSelector(getTheme);
	const dispatch = useDispatch();

	const darkTheme = theme === 'dark';

	const handleToggle = () => {
		dispatch(setTheme(darkTheme ? 'light' : 'dark'));
	};

	return (
		<StyledThemeToggle
			onClick={handleToggle}
			title={`Switch to ${darkTheme ? 'light' : 'dark'} theme`}
		>
			{darkTheme ? <Dark /> : <Light />}
		</StyledThemeToggle>
	);
};

export { ThemeToggle };
