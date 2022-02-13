import { PureComponent } from 'react';
import { hot } from 'react-hot-loader/root';
import injectSheet, { ThemeProvider } from 'react-jss';

import { Box } from '../components';
import { theme } from '../styles/theming';
import { WindowFolder } from '../components';
import { styles } from '../styles/overwriter';

import Desktop from './desktop';
import DesktopBar from './desktop-bar';

class App extends PureComponent {
  public render() {
    return (
      <ThemeProvider theme={theme}>
        <Box className="app">
          <Desktop>
            <WindowFolder
              folderTitle="Mój folder"
              width="600px"
              height="400px"
              top="30px"
              left="60px"
              isWindowActive={true}
            />
          </Desktop>
          <DesktopBar />
        </Box>
      </ThemeProvider>
    );
  }
}

export default hot(injectSheet(styles)(App));
