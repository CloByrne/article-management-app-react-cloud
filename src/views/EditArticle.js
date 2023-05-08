import React from 'react';
import { useParams } from 'react-router-dom';
import EditArticleForm from '../components/EditArticleForm';

function EditArticle({ articles, handleUpdate }) {
  const { id } = useParams();
  const article = articles.find(article => article.id === parseInt(id));

  if (!article) {
    return <div>Article not found.</div>
  }

  return (
    <div>
      <EditArticleForm articleId={article.id} onSave={handleUpdate} />
    </div>
  );
}

export default EditArticle;
