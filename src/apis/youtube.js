import axios from 'axios';

const KEY = 'AIzaSyB7CWnmhRJUpZgBYs_NL5mntPtebgzcAWY';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});
