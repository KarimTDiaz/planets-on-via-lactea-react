import Details from '../components/details/Details';
import PlanetImage from '../components/planet-image/PlanetImage';
import SourceLink from '../components/source-link/SourceLink';
import SubTitle from '../components/subtitle/SubTitle';
import Text from '../components/text/Text';
import { PLANETS_INFO } from '../constants/planets';
import { FONTS_SIZE } from '../constants/variables';
import { PlanetData, PLanetDetailsList, StyledPlanetSection } from './styles';

const Planet = ({ planetName }) => {
    return (
        <>
            <StyledPlanetSection>
                <PlanetImage url={PLANETS_INFO[planetName].image} size={PLANETS_INFO[planetName].size} />
                <PlanetData>
                    <SubTitle
                        title={PLANETS_INFO[planetName].title.toUpperCase()}
                        size={FONTS_SIZE.xl}
                    />
                    <Text text={PLANETS_INFO[planetName].text} size={FONTS_SIZE.xxs} />
                    <SourceLink url={PLANETS_INFO[planetName].source} />

                </PlanetData>
                <PLanetDetailsList>
                    {
                        PLANETS_INFO[planetName].list.map(planet => (
                            <Details key={planet.id} {...planet} />
                        ))
                    }
                </PLanetDetailsList>
            </StyledPlanetSection>
        </>
    );
};

export default Planet;
