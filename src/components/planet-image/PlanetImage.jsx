import { StyledPlanetImage } from "./styles"

const PlanetImage = ({ url, size }) => {
    return <StyledPlanetImage src={url} alt='imagen de planeta' size={size} />
}

export default PlanetImage