import { Route, Routes } from 'react-router-dom';
import { PLANETS } from '../constants/planets';
const Router = () => {
	return <Routes>
		{PLANETS.map(planet => (
			<Route key={planet.id} path={planet.route} element={<h1></h1>} />
		))}

	</Routes>;
};

export default Router;
