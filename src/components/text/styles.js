import styled from "styled-components";
import { COLORS, FONTS_FAMS } from "../../constants/variables";

const StyledText = styled.p`
padding: 0 1.5rem;
font-family:${FONTS_FAMS.primaryFont} ;
font-size:${({ size }) => size};
line-height: 1.375rem;
color: ${COLORS.titleColor};
`

export { StyledText }