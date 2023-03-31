import styled from "styled-components"
import { COLORS, FONTS_FAMS, FONTS_SIZE } from "../../constants/variables"

const StyledDetailsItem = styled.li`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
padding:0.75rem 1.5rem;
margin-bottom: 0.5rem;
border: 1px solid  ${COLORS.textColorSoft};
`

const DetailsProperty = styled.h3`
margin: 0;
font-family: ${FONTS_FAMS.primaryFont};
font-size: ${FONTS_SIZE.xxxs};
letter-spacing: 0.0456rem;
color: ${COLORS.textColorSoft};
`

const DetailsValue = styled.p`
margin: 0;
font-family: ${FONTS_FAMS.secondaryFont};
font-size: ${FONTS_SIZE.s};
color: ${COLORS.titleColor};
`

export { StyledDetailsItem, DetailsProperty, DetailsValue }