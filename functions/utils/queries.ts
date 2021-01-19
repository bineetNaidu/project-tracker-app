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
