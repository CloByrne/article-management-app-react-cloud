import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Articles from './views/Articles';
import AddArticle from './views/AddArticle';
import EditArticle from './views/EditArticle';
import './App.css';

function App() {
  const [articles, setArticles] = useState([]);
  const [updated, setUpdated] = useState(false);

  useEffect(() => {
    axios.get('http://52.16.53.86:3000/articles')
    //axios.get('http://localhost:3000/articles')
      .then(response => {
        setArticles(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [updated]);

  const handleAddArticle = (newArticle) => {
    axios.post('http://52.16.53.86:3000/articles', newArticle)
    //axios.post('http://localhost:3000/articles', newArticle)
      .then(response => {
        setArticles([...articles, response.data]);
      })
      .catch(error => {
        console.log(error);
      });
  };
  
  const handleDelete = (id) => {
    axios.delete(`http://52.16.53.86:3000/articles/${id}`)
    //axios.delete(`http://localhost:3000/articles/${id}`)
      .then(response => {
        setArticles(articles.filter(article => article.id !== id));
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleUpdate = (updatedArticle) => {
    axios.put(`http://52.16.53.86:3000/articles/${updatedArticle.id}`, updatedArticle)
    //axios.put(`http://localhost:3000/articles/${updatedArticle.id}`, updatedArticle)
      .then(response => {
        const updatedArticles = articles.map(article => {
          if (article.id === response.data.id) {
            return response.data;
          } else {
            return article;
          }
        });
        setArticles(updatedArticles);
        setUpdated(!updated);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <h1>My Article Collection</h1>
        </header>
        <main>
          <Routes>
            <Route exact path="/" element={<Articles articles={articles} onDelete={handleDelete} />}/>
            <Route path="/add-article" element={<AddArticle handleAddArticle={handleAddArticle} />} />
            <Route path="/edit-article/:id" element={<EditArticle articles={articles} handleUpdate={handleUpdate} />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;