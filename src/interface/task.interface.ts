export enum taskStatus {
  inProgress = 'IN PROGRESS',
  todo = 'TODO',
  complete = 'COMPLETE',
}
export interface ITask {
  id: string;
  name: string;
  deadline: Date;
  status: taskStatus;
  tags: string[];
  isArchived: boolean;
}
