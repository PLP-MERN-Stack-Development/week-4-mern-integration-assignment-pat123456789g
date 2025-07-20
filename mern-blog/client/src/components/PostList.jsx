import React from 'react';
import { Link } from 'react-router-dom';

const PostList = ({ posts }) => {
  return (
    <div>
      {posts.map(post => (
        <div key={post._id} style={{ marginBottom: '1rem', borderBottom: '1px solid #ccc' }}>
          <h3>
            <Link to={`/posts/${post._id}`}>{post.title}</Link>
          </h3>
          <p>{post.content.slice(0, 100)}...</p>
          <small>Category: {post.category?.name || 'Uncategorized'}</small>
        </div>
      ))}
    </div>
  );
};

export default PostList;
