import { MenuItem, MenuLink, StyledMenu } from './styles';
import { PLANETS } from '../../constants/planets';
const Menu = () => {
	return (
		<nav>
			<StyledMenu>
				{PLANETS.map(planet => (
					<MenuItem key={planet.id} color={planet.color}>
						<MenuLink to={planet.route} color={planet.color}>{planet.name}
						</MenuLink>
					</MenuItem>
				))}
			</StyledMenu>
		</nav>
	);
};

export default Menu;
