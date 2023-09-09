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