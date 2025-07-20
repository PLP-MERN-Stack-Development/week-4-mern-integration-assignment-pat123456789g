import React from 'react';
import { createPost } from '../services/api';
import { useNavigate } from 'react-router-dom';
import PostForm from '../components/PostForm';

export default function CreatePost() {
  const navigate = useNavigate();

  const handleSubmit = async data => {
    await createPost(data);
    navigate('/');
  };

  return (
    <div>
      <h1>Create New Post</h1>
      <PostForm onSubmit={handleSubmit} />
    </div>
  );
}
