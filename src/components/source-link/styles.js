import styled from "styled-components";
import { COLORS } from "../../constants/variables";

const StyledSourceLink = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 0.5rem;
margin-bottom: 1.75rem;
`

const SourceLinkText = styled.span`
color:${COLORS.textColor};
`

const SourceLinkUrl = styled.a`
border-bottom: 1px solid ${COLORS.textColor};
color:${COLORS.textColor};
`

const SourceLinkIcon = styled.img`
width: 12px;
height: 12px;
`

export { StyledSourceLink, SourceLinkText, SourceLinkUrl, SourceLinkIcon }