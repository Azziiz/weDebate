'use client'
import React from 'react';
import Masonry from 'react-masonry-css';

const MasonryLayout = ({ children }) => {
  const breakpointColumnsObj = {
    default: 4,
    1000: 1,
    700: 1,
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {children}
    </Masonry>
  );
};

export default MasonryLayout;