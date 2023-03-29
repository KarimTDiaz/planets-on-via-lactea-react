import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { COLORS, PLANET_COLORS } from '../../constants/variables';

const StyledMenu = styled.ul``;

const MenuItem = styled.li``;

const MenuColor = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background-color: ${({ color }) => PLANET_COLORS[color]};
`;

const MenuLink = styled(NavLink)`
	color: ${COLORS.titleColor};
`;

export { StyledMenu, MenuItem, MenuLink, MenuColor };
