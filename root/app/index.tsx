import { hot } from 'react-hot-loader/root';
import { PureComponent, MouseEvent } from 'react';

import { Box } from 'components/index';

import SysBar from './sys-bar';
import Desktop from './desktop';
import SysCardFolder from './sys-card-folder';

class App extends PureComponent {
  private handleOnClick = (event: MouseEvent) => {
    const target = (event.target as Element).className;

    console.log(target);
  };

  public render() {
    return (
      <Box className="app" onClick={this.handleOnClick}>
        <Desktop>
          <SysCardFolder folderTitle="Mój folder" />
        </Desktop>
        <SysBar />
      </Box>
    );
  }
}

export default hot(App);
