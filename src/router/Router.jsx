import { Route, Routes } from 'react-router-dom';
import { PLANETS_MENU } from '../constants/planets';
import Planet from '../pages/Planet';
const Router = () => {
	return <Routes>
		{PLANETS_MENU.map(planet => (
			<Route key={planet.id} path={planet.route} element={<Planet planetName={planet.name} />} />
		))}
	</Routes>;
};

export default Router;
