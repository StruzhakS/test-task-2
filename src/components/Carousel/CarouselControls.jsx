import Comments from 'components/Comments/Comments';
import { getAllComentsApi, getAllPostsApi } from 'postsApi';
import React, { useEffect, useState } from 'react';
import { useSnapCarousel } from 'react-snap-carousel';

const AdvancedCarousel = ({ isModalOpen, setModalOpen }) => {
  const { scrollRef, pages, activePageIndex, next, prev, goTo } =
    useSnapCarousel();

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getAllPosts = async () => {
      const result = await getAllPostsApi();
      setPosts(result);
    };
    getAllPosts();
  }, []);

  return (
    <>
      <ul
        ref={scrollRef}
        style={{
          display: 'flex',
          //   flexDirection: 'column',
          gap: '5px',
          overflow: 'auto',
          justifyContent: 'center',
          alignItems: 'center',
          scrollSnapType: 'y mandatory',
        }}
      >
        {posts.map((el, i) => (
          <li
            key={i}
            style={{
              backgroundColor: 'grey',
              fontSize: '10px',
              width: '250px',
              height: '600px',
              padding: '10px',
              //   height: '250px',
              flexShrink: 0,
              color: 'black',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',
              alignItems: 'center',
              fontWeight: '500',
            }}
          >
            <h2 style={{ textAlign: 'center' }}>{el.title} </h2>
            <p>{el.body}</p>{' '}
            <div>
              <h3>Comments</h3>
              <Comments
                id={el.id}
                isModalOpen={isModalOpen}
                setModalOpen={setModalOpen}
              />
            </div>
          </li>
        ))}
      </ul>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <button onClick={() => prev()}>Prev</button>
        <div>
          {activePageIndex + 1} / {pages.length}
        </div>
        <button onClick={() => next()}>Next</button>
      </div>
      <ul
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
          listStyle: 'none',
        }}
      >
        {pages.map((_, i) => (
          <li key={i}>
            <button
              style={i === activePageIndex ? { opacity: 0.5 } : {}}
              onClick={() => goTo(i)}
            >
              {i + 1}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default AdvancedCarousel;
