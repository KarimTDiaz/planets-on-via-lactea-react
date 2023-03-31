import styled from 'styled-components';
import { COLORS, FONTS_FAMS, FONTS_SIZE } from '../../constants/variables';

const StyledTabs = styled.ul`
	position: relative;
	display: flex;
	justify-content: space-between;
	width: 100vw;
	padding: 0 1.5rem;
	margin-bottom: 3rem;
	&::after {
		content: '';
		position: absolute;
		bottom: -1rem;
		left: 0;
		width: 100%;
		height: 1px;
		background-color: ${COLORS.disabledColor};
	}
`;

const TabsItem = styled.li`
	position: relative;
	font-size: ${FONTS_SIZE.xxs};
	font-family: ${FONTS_FAMS.primaryFont};
	color: ${COLORS.disabledColor};
	&::after {
		content: '';
		position: absolute;
		left: -10%;
		bottom: -140%;
		width: 120%;
		height: 3px;
		background-color: ${({ isActive, color }) =>
			isActive ? color : 'transparent'};
	}
`;

export { StyledTabs, TabsItem };
