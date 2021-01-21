export type Project = {
  _id: string;
  projectName: string;
  projectDescription?: string;
  completed: boolean;
  projectGithubUrl?: string;
  projectLiveUrl?: string;
};
