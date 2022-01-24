import { ReactNode } from 'react';

export type WithChildren<P = {}> = P & { children?: ReactNode };

export type Dispatcher<T> = React.Dispatch<React.SetStateAction<T>>;
