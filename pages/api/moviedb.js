// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: `${process.env.MOVIEDB_API}`,
  },
});