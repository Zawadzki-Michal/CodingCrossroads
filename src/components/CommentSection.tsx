"use client";
import React, { useState, useEffect } from 'react';
import { client } from "../../sanity/lib/client";
import { CommentFormProps, Comment } from '../../types';

const CommentForm = ({ postId }: CommentFormProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState<Comment[]>([]);
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Fetch comments initially and on postId change
  useEffect(() => {
    const fetchComments = async () => {
      const query = `*[_type == "comment" && post._ref == $postId && approved == true]{
        _id,
        name,
        comment,
        _createdAt
      }`;
      const fetchedComments = await client.fetch(query, { postId });
      setComments(fetchedComments);
    };

    fetchComments();
  }, [postId]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newComment = {
      _type: 'comment',
      name,
      email,
      comment: commentText,
      post: {
        _type: 'reference',
        _ref: postId
      },
      approved: true, // Assuming immediate approval for demonstration
    };

    const createdComment = await client.create(newComment);
    setComments([...comments, createdComment]);
    setName('');
    setEmail('');
    setCommentText('');
    setShowConfirmation(true);
    setTimeout(() => setShowConfirmation(false), 3000);
  };

  return (
    <div>
      {showConfirmation && (
        <div className="alert-success">Comment submitted successfully!</div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
  <input
    type="text"
    placeholder="Name"
    value={name}
    onChange={(e) => setName(e.target.value)}
    required
    className="w-full p-2 bg-gray-300 text-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
  <input
    type="email"
    placeholder="Email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    required
    className="w-full p-2 bg-gray-300 text-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
 <textarea
  placeholder="Comment"
  value={commentText} // Replace 'comment' with 'commentText'
  onChange={(e) => setCommentText(e.target.value)} // Replace 'comment' with 'commentText'
  required
  className="w-full p-2 bg-gray-300 text-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
/>
    <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Submit Comment
        </button>
        </form>
      <div>
        {comments.map(comment => (
          <div key={comment._id}>
            <p><strong>{comment.name}</strong></p>
            <p>{comment.comment}</p>
            <p>{new Date(comment._createdAt).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentForm;