import logo from './logo.svg';
import './App.css';
import '@fontsource/inter';
import { CssBaseline } from '@mui/joy';
import { AuthenticationContext } from './common/auth/AuthenticationContext';

function App() {
	return (
		<AuthenticationContext>
			<CssBaseline>
				<div className="App">
					<header className="App-header">
						<img src={logo} className="App-logo" alt="logo" />
						<p>
							Edit <code>src/App.tsx</code> and save to reload.
						</p>
						<a
							className="App-link"
							href="https://reactjs.org"
							target="_blank"
							rel="noopener noreferrer"
						>
							Learn React
						</a>
					</header>
				</div>
			</CssBaseline>
		</AuthenticationContext>
	);
}

export default App;
