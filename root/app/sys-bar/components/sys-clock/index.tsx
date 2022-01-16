import dayjs from 'dayjs';
import React, { PureComponent } from 'react';

import { Box } from 'components/index';

interface OwnProps {
  time: string;
}

class SysClock extends PureComponent<unknown, OwnProps> {
  constructor(props: unknown) {
    super(props);

    this.state = {
      time: this.getTime(),
    };
  }

  private wait(milliseconds: number) {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  }

  private getTime() {
    return dayjs().format('HH:mm');
  }

  private async clockTicking() {
    const always = true;
    const milliseconds = 1000;

    while (always) {
      await this.wait(milliseconds);
      this.setState({ time: this.getTime() });
    }
  }

  public componentDidMount() {
    this.clockTicking();
  }

  public render() {
    return <Box className="sys-clock">{this.state.time}</Box>;
  }
}

export default SysClock;
