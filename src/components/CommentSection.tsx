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
      } | order(_createdAt asc)`;
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
    <div className='mx-3'>
      {showConfirmation && (
        <div className="alert-success">Comment submitted successfully!</div>
      )}
       <div>
       
        {comments.map(comment => (
          <div key={comment._id}>
            <div className='flex flex-col justify-between '>
            <p className='mr-4 text-gray-700'><strong>{comment.name}</strong></p>
            <p className='text-sm my-2 text-gray-400'>{new Date(comment._createdAt).toLocaleDateString()}</p>
            </div>
            <p>{comment.comment}</p>
            
          </div>
        ))}
      </div>
      <h1 className="lg:text-4xl text-3xl font-bold my-5 text-gray-700">Add comment</h1>
      {/* <span className="flex w-11/12 lg:w-full  mx-auto mb-6    border-b-2  border-gray-700"></span> */}
      <form onSubmit={handleSubmit} className="space-y-4">
  <input
    type="text"
    placeholder="Name"
    value={name}
    onChange={(e) => setName(e.target.value)}
    required
    className="w-full p-2 bg-gray-200 text-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
 
 <textarea
  placeholder="Comment"
  value={commentText} 
  onChange={(e) => setCommentText(e.target.value)} 
  required
  className="w-full p-2 bg-gray-200 text-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
/>
    <button
          type="submit"
          className="w-56 p-2 text-lg bg-green-500 text-white rounded font-semibold hover:bg-green-700"
        >
          Submit Comment
        </button>
        </form>
     
    </div>
  );
};

export default CommentForm;