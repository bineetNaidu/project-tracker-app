import axios from 'axios';
import { GET_ALL_PROJECTS } from './utils/queries';

const sendQuery = async (query: any, variables?: any) => {
  const { data } = await axios({
    url: 'https://graphql.fauna.com/graphql',
    method: 'POST',
    headers: {
      Authorization: `Bearer ${FAUNA_SECRET}`,
    },
    data: {
      query,
      variables,
    },
  });

  return data;
};

export const getAllProjects = async () => {
  try {
    const { data } = await sendQuery(GET_ALL_PROJECTS);

    return data.projects.data;
  } catch (error) {
    console.log('ERROR: ', error.message);
  }
};

export const deleteProject = async (_id: any) => {
  try {
    const DELETE_PROJECT = `
mutation {
  deleteProject(id: ${_id}) {
    projectName
    _id
  }
}
`;
    // const variables = { id: JSON.parse(_id) };
    const { data } = await sendQuery(DELETE_PROJECT);

    return data;
  } catch (error) {
    console.log('ERROR: ', error.message);
  }
};
