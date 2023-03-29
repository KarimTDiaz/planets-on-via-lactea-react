import Header from './components/header/Header';
import { BrowserRouter } from 'react-router-dom';
import Router from './router/Router';
import { GlobalStyle } from './styles/globalStyles';

const App = () => {
	return (
		<>
			<GlobalStyle />
			<BrowserRouter>
				<Header />
				<Router />
			</BrowserRouter>
		</>
	);
};

export default App;
