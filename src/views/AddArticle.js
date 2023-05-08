import React from 'react';
import AddArticle from '../components/AddArticle';

function AddArticleView({ handleAddArticle }) {
  return (
    <div>
      <AddArticle handleAddArticle={handleAddArticle} />
    </div>
  );
}

export default AddArticleView;
