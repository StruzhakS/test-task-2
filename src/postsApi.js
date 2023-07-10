import axios from 'axios';

export const getAllPostsApi = async () => {
  const { data } = await axios('https://jsonplaceholder.typicode.com/posts/');
  return data;
};

export const getAllComentsApi = async id => {
  const { data } = await axios(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  );
  // console.log(data);
  return data;
};

// export default getAllPostsApi;
