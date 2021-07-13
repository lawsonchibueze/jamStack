import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

// export default ({ element }) => {
// 	return <ThemeProvider theme={theme}>{element}</ThemeProvider>;
// };

function RootWrapper({ element }) {
	return (
		<div>
			<ThemeProvider theme={theme}>{element}</ThemeProvider>
		</div>
	);
}

export default RootWrapper;
