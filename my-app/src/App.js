import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [articles, setArticles] = useState([]);
  const apiKey = '<YOUR_API_KEY>'; // Replace with your actual API key

  useEffect(() => {
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${eacf10415ce14e98a74fa63bf461f51f}`)
      .then(response => setArticles(response.data.articles))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Top News Headlines</h1>
      <div>
        {articles.length === 0 && <p>Loading...</p>}
        {articles.map((article, index) => (
          <div key={index} style={{ borderBottom: '1px solid #ccc', marginBottom: '1rem', paddingBottom: '1rem' }}>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
