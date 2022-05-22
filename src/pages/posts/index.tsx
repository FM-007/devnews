import { GetStaticProps } from 'next';
import Head from 'next/head';

interface Posts {
  id: string;
  title: string;
}

interface PostsProps {
  posts: Posts[];
}

const Posts = ({ posts }: PostsProps) => {
  return (
    <div>
      <h1>Listagem de Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export const getStaticProps: GetStaticProps<PostsProps> = async () => {
  const response = await fetch('http://localhost:3333/posts');
  const posts = await response.json();

  return {
    props: {
      posts,
    },
    revalidate: 5, // In seconds
  };
};

export default Posts;
