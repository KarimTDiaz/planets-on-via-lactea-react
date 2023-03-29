import { MenuColor, MenuItem, MenuLink, StyledMenu } from './styles';
import { PLANET_COLORS } from '../../constants/variables';
import { v4 } from 'uuid';
const planets = [
	'mercury',
	'venus',
	'earth',
	'mars',
	'jupiter',
	'saturn',
	'uranus',
	'neptune'
];
const Menu = () => {
	console.log(Object.keys(PLANET_COLORS));
	return (
		<nav>
			<StyledMenu>
				{planets.map(planet => (
					<MenuItem key={v4()}>
						<MenuColor color={planet} />
						<MenuLink>{planet.toUpperCase()}</MenuLink>
					</MenuItem>
				))}
			</StyledMenu>
		</nav>
	);
};

export default Menu;
