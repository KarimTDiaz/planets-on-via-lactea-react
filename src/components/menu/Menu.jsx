import { MenuItem, MenuLink, StyledMenu } from './styles';
import { PLANETS_MENU } from '../../constants/planets';

const Menu = ({ setOpen, open }) => {
	return (
		<nav>
			<StyledMenu open={open}>
				{PLANETS_MENU.map(planet => (
					<MenuItem key={planet.id} color={planet.color}>
						<MenuLink
							onClick={() => setOpen(false)}
							to={planet.route}
							color={planet.color}
						>
							{planet.name.toUpperCase()}
						</MenuLink>
					</MenuItem>
				))}
			</StyledMenu>
		</nav>
	);
};

export default Menu;
