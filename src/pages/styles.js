import styled from 'styled-components';

const StyledPlanetSection = styled.section`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	padding: 0 1.5rem;
`;

const PlanetData = styled.div``;

const PLanetDetailsList = styled.ul`
	width: 100%;
`;
const PlanetSurface = styled.img`
	position: absolute;
	top: 7rem;
	left: 14rem;
	width: 70px;
	transform: rotate(-60deg);
`;

export { StyledPlanetSection, PlanetData, PLanetDetailsList, PlanetSurface };
