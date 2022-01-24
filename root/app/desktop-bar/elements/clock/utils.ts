import dayjs from 'dayjs';

import { Dispatcher } from 'utils/interface';

export const getTime = (): string => dayjs().format('HH:mm');

export const clockTicking = async (callback: Dispatcher<string>) => {
  while (true) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    callback(getTime());
  }
};
