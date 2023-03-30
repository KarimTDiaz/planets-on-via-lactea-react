import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { COLORS, FONTS_FAMS, PLANET_COLORS } from '../../constants/variables';

const StyledMenu = styled.ul`
	position: absolute;
	top: 100px;
	left: 0;
	width: 100%;
	padding: 1rem 1.5rem;
`;

const MenuItem = styled.li`
	display: flex;
	gap: 2rem;
	margin-bottom: 3rem;
`;

const MenuLink = styled(NavLink)`
	position: relative;
	left: 3rem;
	font-family: ${FONTS_FAMS.primaryFont};
	color: ${COLORS.disabledColor};
	&::before {
		content: '';
		position: absolute;
		left: -3rem;
		top: -0.25rem;
		width: 20px;
		height: 20px;
		border-radius: 50%;
		background-color: ${COLORS.disabledColor}
	}
	&.active {
		color: ${({ color }) => color};
		&::before{
			background-color: ${({ color }) => color};
		}
	}
`;

export { StyledMenu, MenuItem, MenuLink };
