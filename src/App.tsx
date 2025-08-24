import styled from 'styled-components';
import GlobalStyles from '../src/globalStyles';

function App() {
	return (
		<>
			<GlobalStyles />
			<AppContainer>
				<h1>React TypeScript styled components Webpack demo</h1>
			</AppContainer>
		</>
	);
}

export default App;

const AppContainer = styled.div`
	min-height: calc(100vh - 2 * 2rem);
	display: grid;
	align-content: center;
	text-align: center;
`;
