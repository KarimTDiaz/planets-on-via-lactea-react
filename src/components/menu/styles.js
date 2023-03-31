import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { COLORS, FONTS_FAMS } from '../../constants/variables';

const StyledMenu = styled.ul`
	position: absolute;
	top: 80px;
	left: 0;
	width: 100%;
	padding: 1rem 1.5rem;
	background-color: ${COLORS.bgColor};
	z-index: 10;
	transform: translateX(${({ open }) => (open ? '0' : '100%')});
	transition: transform 0.5s;
`;

const MenuItem = styled.li`
	display: flex;
	gap: 2rem;
	position: relative;
	margin-bottom: 4rem;
	&:not(:last-child)::after {
		content: '';
		position: absolute;
		bottom: -2rem;
		width: 100%;
		height: 1px;
		background-color: ${COLORS.disabledColor};
	}
`;

const MenuLink = styled(NavLink)`
	position: relative;
	display: inline-block;
	width: 100%;
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
		background-color: ${COLORS.disabledColor};
	}
	&.active {
		color: ${({ color }) => color};
		&::before {
			background-color: ${({ color }) => color};
		}
	}
`;

export { StyledMenu, MenuItem, MenuLink };
