import axios from 'axios';
import { FETCH_POSTS, NEW_POST } from './types';

export const fetchPosts = () => dispatch => {
  axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => dispatch({
      type: FETCH_POSTS,
      payload: res.data
    }))
    .catch(err => console.log('get posts failed'));
}