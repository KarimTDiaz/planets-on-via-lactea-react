import styled from "styled-components";
import { COLORS, FONTS_FAMS } from "../../constants/variables";

const StyledSubTitle = styled.h2`
font-family:${FONTS_FAMS.secondaryFont};
font-size: ${({ size }) => size};
color: ${COLORS.titleColor};
`

export { StyledSubTitle }

