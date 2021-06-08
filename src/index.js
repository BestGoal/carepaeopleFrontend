import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Router from './Router';
import { Layout } from "./layout/index";
import configureStore from "./redux/store";
import reportWebVitals from './reportWebVitals';
import { sessionCheck } from "./redux/action/auth/loginActions";
import './asset/scss/index.scss';
import 'react-toastify/dist/ReactToastify.css';

const renderApp = preloadedState => {

	const themeConfig = {
		dark: {
			palette: {
				type: "dark",
				primary: {
					main: "#2b81eb",
				},
				background: {
					default: "#111111",
					paper: "#222222",
				},
			},
			typography: {
				fontFamily: "'Roboto', Poppins",
				fontSize: 16,
			},
		},
		light: {
			palette: {
				type: "light",
				primary: {
					main: "#2b81eb",
				},
			},
			typography: {
				fontFamily: "'Roboto', Poppins",
				fontSize: 16,
			},
		},
	};

	const store = configureStore(preloadedState);

	ReactDOM.render(
		<React.StrictMode>
			<Provider store={store}>
				<Suspense fallback={<></>}>
					<ThemeProvider theme={createMuiTheme(themeConfig['light'])}>
						<CssBaseline />
						<Layout>
							<Router />
						</Layout>
					</ThemeProvider>
				</Suspense>
			</Provider>
		</React.StrictMode>,
		document.getElementById('root')
	);
}

(async () => renderApp(await sessionCheck()))();
reportWebVitals();