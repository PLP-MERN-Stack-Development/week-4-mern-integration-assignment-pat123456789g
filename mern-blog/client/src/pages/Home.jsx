import React from 'react';
import useApi from '../hooks/useApi';
import { getPosts } from '../services/api';
import PostList from '../components/PostList';
import { Link } from 'react-router-dom';

export default function Home() {
  const { data: posts, loading, error } = useApi(getPosts);

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>All Posts</h1>
      <Link to="/create">Create New Post</Link>
      <PostList posts={posts} />
    </div>
  );
}
