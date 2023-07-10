import { getAllComentsApi } from 'postsApi';
import React, { useEffect, useState } from 'react';

const Comments = ({ id, isModalOpen, setModalOpen }) => {
  const [comments, setComments] = useState([]);
  const [showComment, setShowComent] = useState(false);

  useEffect(() => {
    const getComment = async () => {
      const res = await getAllComentsApi(id);
      setComments(res);
    };

    getComment();
  }, []);

  return (
    <>
      {showComment && (
        <ul>
          {comments.map(({ email, body, id }, i) => (
            <li key={i}>
              <p>Email: {email}</p>
              <span>Comment: {body}</span>
            </li>
          ))}
        </ul>
      )}
      <div>
        <button
          type="button"
          onClick={() => {
            isModalOpen ? setModalOpen(false) : setModalOpen(true);
          }}
        >
          Add Comment
        </button>
        <button
          onClick={() => {
            showComment ? setShowComent(false) : setShowComent(true);
          }}
        >
          Show comment
        </button>
      </div>
    </>
  );
};

export default Comments;
