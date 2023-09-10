export type TodoType = {
  id: number;
  status: boolean;
  content: string;
}

export enum FilterType {
  ALL = 'All',
  ACTIVE = 'Active',
  COMPLETED = 'Completed'
}

export type ThemeType = 'light' | 'dark';

export interface ThemeState {
  value: ThemeType;
}

export interface RootState {
  theme: ThemeState;
}
