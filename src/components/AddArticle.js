import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/AddArticle.css';

function AddArticle() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [published, setPublished] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const article = { title, body, published };
    axios.post('http://52.16.53.86:3000/articles', article)
    //axios.post('http://localhost:3000/articles', article)
      .then(response => {
        navigate('/');
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="add-article-container">
      <h2>Add a new article</h2>
      <form className="add-article-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" value={title} onChange={(event) => setTitle(event.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="body">Body:</label>
          <textarea id="body" value={body} onChange={(event) => setBody(event.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="published">Published:</label>
          <input type="checkbox" id="published" checked={published} onChange={(event) => setPublished(event.target.checked)} />
        </div>
        <button type="submit" className="add-article-button">Add article</button>
        <div>
          <Link to="/">Go back to list articles page</Link>
        </div>
      </form>
    </div>
  );
}

export default AddArticle;
