import axios from 'axios';
import { GET_ALL_PROJECTS } from './utils/queries';

const sendQuery = async (query: any, vars?: any) => {
  const { data } = await axios({
    url: 'https://graphql.fauna.com/graphql',
    method: 'POST',
    headers: {
      Authorization: `Bearer ${FAUNA_SECRET}`,
    },
    data: {
      query,
      vars,
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
