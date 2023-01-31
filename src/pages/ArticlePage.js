import React from 'react';
import { useParams } from 'react-router-dom';

const ArticlePage = () => {
  const { articleId } = useParams();
  return <h1>Aritcle ID is : {articleId}</h1>;
};

export default ArticlePage;
