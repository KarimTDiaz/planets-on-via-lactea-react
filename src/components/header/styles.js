import styled from 'styled-components';
import { COLORS, FONTS_FAMS, FONTS_SIZE } from '../../constants/variables';

const StyledHeader = styled.header`
	position: relative;
	margin-bottom: 1rem;

	&::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 1px;
		background-color: ${COLORS.disabledColor};
	}
`;

const HeaderTop = styled.div`
	padding: 1rem 1.5rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const HeaderTitle = styled.h1`
	margin: 0;
	font-size: ${FONTS_SIZE.l};
	font-family: ${FONTS_FAMS.secondaryFont};
	color: ${COLORS.titleColor};
`;
export { HeaderTop, StyledHeader, HeaderTitle };
