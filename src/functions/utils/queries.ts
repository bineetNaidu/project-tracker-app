export const GET_ALL_PROJECTS = `
query {
  projects {
    data {
      _id
      peojectDescription
      completed
      projectLiveUrl
      projectName
      projectGithubUrl
    }
  }
}
`;

export const CREATE_PROJECT = `
mutation($projectName: String!, $peojectDescription: String) {
  createProject(
    data: {
      projectName: $projectName
      peojectDescription: $peojectDescription
      completed: false
    }
  ) {
    _id
    projectName
    projectGithubUrl
    projectLiveUrl
    completed
    peojectDescription
  }
}
`;

export const UPDATE_PROJECT = (
  _id: string,
  projectName: string,
  peojectDescription: string,
  completed: boolean,
  projectGithubUrl: string,
  projectLiveUrl: string
) => `
mutation {
  updateProject(
    id: ${_id}
    data: {
      projectName: "${projectName}"
      peojectDescription: "${peojectDescription}"
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
    peojectDescription
  }
}
`;
