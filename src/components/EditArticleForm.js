import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/EditArticle.css';

function EditArticleForm({ articleId, onSave }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [published, setPublished] = useState('');
  

  useEffect(() => {
    async function fetchArticle() {
      try {
        const response = await axios.get(`http://52.16.53.86:3000/articles/${articleId}`);
        //const response = await axios.get(`http://localhost:3000/articles/${articleId}`);
        const article = response.data;
        setTitle(article.title);
        setBody(article.body);
        setPublished(article.published);
      } catch (error) {
        console.log(error);
      }
    }
    fetchArticle();
  }, [articleId]);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSave({
      id: articleId,
      title,
      body,
      published
    });
  };

  return (
    <div className="edit-article-container">
      <h2>Edit article</h2>
      <form className="edit-article-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
          id="title"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="body">Body:</label>
          <textarea
          id="body"
          value={body}
          onChange={(event) => setBody(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="published">Published:</label>
          <input type="checkbox" id="published" checked={published} onChange={(event) => setPublished(event.target.checked)} />
        </div>
        <button type="submit" className="edit-article-button">Save</button>
        <div>
          <Link to="/">Go back to list articles page</Link>
        </div>
      </form>
    </div>
  );
}

export default EditArticleForm;
