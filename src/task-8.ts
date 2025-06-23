import axios from 'axios';

interface Post {
  id: number;
  title: string;
  body: string;
}

async function fetchPosts(): Promise<Post[]> {
  const response = await axios.get<Post[]>(
    'https://jsonplaceholder.typicode.com/posts', // ✅ правильний URL
  );
  return response.data;
}

fetchPosts().then((posts) => {
  console.log(posts[0].title); // ✅ має вивести "sunt aut facere..." або подібний заголовок
});
