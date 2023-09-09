export type TodoType = {
  id: number;
  status: boolean;
  content: String;
}

export enum FilterType {
  ALL = 'All',
  ACTIVE = 'Active',
  COMPLETED = 'Completed'
}