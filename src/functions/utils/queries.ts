export const GET_ALL_PROJECTS = `
query {
  projects {
    data {
      _id
      projectDescription
      completed
      projectLiveUrl
      projectName
      projectGithubUrl
    }
  }
}
`;

export const CreateProjectQuery = (
  projectName: string,
  projectDescription: string,
  projectGithubUrl: string,
  projectLiveUrl: string
) => `
mutation {
  createProject(
    data: {
      projectName: "${projectName}"
      projectDescription: "${projectDescription}"
      projectGithubUrl: "${projectGithubUrl}"
      projectLiveUrl: "${projectLiveUrl}"
      completed: false
    }
  ) {
    _id
    projectName
    projectGithubUrl
    projectLiveUrl
    completed
    projectDescription
  }
}
`;

export const UPDATE_PROJECT = (
  _id: string,
  projectName: string,
  projectDescription: string,
  completed: boolean,
  projectGithubUrl: string,
  projectLiveUrl: string
) => `
mutation {
  updateProject(
    id: ${_id}
    data: {
      projectName: "${projectName}"
      projectDescription: "${projectDescription}"
      completed: ${completed}
      projectGithubUrl: "${projectGithubUrl}"
      projectLiveUrl: "${projectLiveUrl}"
    }
  ) {
    projectName
    projectGithubUrl
    _id
    projectLiveUrl
    completed
    projectDescription
  }
}
`;
