import React from 'react';
import './Blog.css'

const TrendingBlog = ({ imageUrl, categories, date, title, summary, authorName, authorTitle, authorImageUrl }) => {
  return (
    <div className="trending-blog">
      <img className="blog-image" src={imageUrl} alt="Blog" />
      <div className="blog-info">
        <span style={{color:'white'}} className="categories-date">{categories.join(', ')} — {date}</span>
        <h2 style={{color:'white'}} className="title">{title}</h2>
        <p style={{color:'white'}} className="summary">{summary}</p>
        <div className="author-info">
          <img src={authorImageUrl} alt={authorName} />
          <div className='author-details'>
            <span style={{color:'white',fontSize:'13px'}} className="author-name">{authorName}</span>
            <span style={{color:'white',fontSize:'10px'}} className="author-title">{authorTitle}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingBlog;
