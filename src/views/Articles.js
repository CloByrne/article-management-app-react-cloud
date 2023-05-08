import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Articles.css';

function Articles({ articles, onDelete }) {
  const [expandedArticleId, setExpandedArticleId] = useState(null);
  const [showPublished, setShowPublished] = useState('all');

  const handleExpandArticle = (id) => {
    setExpandedArticleId(id === expandedArticleId ? null : id);
  };

  const filteredArticles = articles.filter(article => {
    if (showPublished === 'published') {
      return article.published;
    } else if (showPublished === 'unpublished') {
      return !article.published;
    } else {
      return true;
    }
  });

  return (
    <div className="articles-container">
      <header className="articles-header">
        <h2>Articles</h2>
        <Link className="article-add-btn" to="/add-article">Add New</Link>
        <div>
          <label>
            <input
              type="radio"
              name="showPublished"
              value="all"
              checked={showPublished === 'all'}
              onChange={() => setShowPublished('all')}
            />
            All
          </label>
          <label>
            <input
              type="radio"
              name="showPublished"
              value="published"
              checked={showPublished === 'published'}
              onChange={() => setShowPublished('published')}
            />
            Published
          </label>
          <label>
            <input
              type="radio"
              name="showPublished"
              value="unpublished"
              checked={showPublished === 'unpublished'}
              onChange={() => setShowPublished('unpublished')}
            />
            Unpublished
          </label>
        </div>
      </header>
      {filteredArticles.map(article => (
        <div key={article.id} className="article-container">
          <div className="article-header">
            <h3 className="article-title">{article.title}</h3>
            <div className="article-meta">
              <span className={`article-status ${article.published ? 'published' : 'unpublished'}`}>
                {article.published ? 'Published' : 'Unpublished'}
              </span>
              <button className="article-edit-btn">
                <Link to={`/edit-article/${article.id}`}>Edit</Link>
              </button>
              <button className="article-delete-btn" onClick={() => onDelete(article.id)}>Delete</button>
            </div>
          </div>
          {expandedArticleId === article.id && (
            <p className="article-body">{article.body}</p>
          )}
          <button className="article-expand-btn" onClick={() => handleExpandArticle(article.id)}>
            {expandedArticleId === article.id ? 'Collapse' : 'Expand'}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Articles;
