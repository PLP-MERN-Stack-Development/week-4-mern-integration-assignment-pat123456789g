import React from 'react';
import { useParams } from 'react-router-dom';
import useApi from '../hooks/useApi';
import { getPost } from '../services/api';

export default function ViewPost() {
  const { id } = useParams();
  const { data: post, loading, error } = useApi(getPost, id);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <small>Category: {post.category?.name}</small>
    </div>
  );
}
