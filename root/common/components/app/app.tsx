import React, { PureComponent } from 'react';
import { hot } from 'react-hot-loader/root';

import Desktop from 'common/components/desktop';
import SysBar from 'common/components/sys-bar';
import SysCardFolder from 'common/components/sys-card-folder';

class App extends PureComponent {
  private handleOnClick = (event: React.MouseEvent) => {
    const target = (event.target as Element).className;

    console.log(target);
  };

  public render() {
    return (
      <div className="app" onClick={this.handleOnClick}>
        <Desktop>
          <SysCardFolder folderTitle="Mój folder" />
        </Desktop>
        <SysBar />
      </div>
    );
  }
}

export default hot(App);
