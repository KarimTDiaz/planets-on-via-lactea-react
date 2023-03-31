import Details from '../components/details/Details';
import PlanetImage from '../components/planet-image/PlanetImage';
import SourceLink from '../components/source-link/SourceLink';
import SubTitle from '../components/subtitle/SubTitle';
import Text from '../components/text/Text';
import Tabs from '../components/tabs/Tabs';
import { PLANETS_INFO } from '../constants/planets';
import { FONTS_SIZE } from '../constants/variables';
import {
	PlanetData,
	PLanetDetailsList,
	PlanetSurface,
	StyledPlanetSection
} from './styles';
import { useState } from 'react';

const Planet = ({ planetName }) => {
	const [tab, setTab] = useState(0);
	return (
		<>
			<StyledPlanetSection>
				<Tabs
					tab={tab}
					setTab={setTab}
					color={PLANETS_INFO[planetName].color}
				/>
				<PlanetImage
					url={PLANETS_INFO[planetName].image[tab]}
					size={PLANETS_INFO[planetName].size}
				/>
				{tab === 2 && <PlanetSurface src={PLANETS_INFO[planetName].image[3]} />}
				<PlanetData>
					<SubTitle
						title={PLANETS_INFO[planetName].title.toUpperCase()}
						size={FONTS_SIZE.xl}
					/>
					<Text
						text={PLANETS_INFO[planetName].text[tab]}
						size={FONTS_SIZE.xxs}
					/>
					<SourceLink url={PLANETS_INFO[planetName].source} />
				</PlanetData>
				<PLanetDetailsList>
					{PLANETS_INFO[planetName].list.map(planet => (
						<Details key={planet.id} {...planet} />
					))}
				</PLanetDetailsList>
			</StyledPlanetSection>
		</>
	);
};

export default Planet;
