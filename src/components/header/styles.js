import styled from 'styled-components';
import { COLORS } from '../../constants/variables';

const StyledHeader = styled.header`
position: relative;
`;

const HeaderTop = styled.div`
	padding: 1rem 1.5rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const HeaderTitle = styled.h1`
	color: ${COLORS.titleColor};
`;
export { HeaderTop, StyledHeader, HeaderTitle };
