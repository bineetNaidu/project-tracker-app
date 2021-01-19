import axios from 'axios';
import { config } from 'dotenv';
import { CREATE_PROJECT, GET_ALL_PROJECTS } from './utils/queries';

config();

const sendQuery = async (query: any, vars?: any) => {
  const { data } = await axios({
    url: 'https://graphql.fauna.com/graphql',
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.FAUNA_SECRET}`,
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
    const res = await sendQuery(GET_ALL_PROJECTS);

    return JSON.stringify(res);
  } catch (error) {
    console.log('ERROR: ', error.message);
  }
};
