import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import "./NewsPage.css"


const MedicalNews = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMedicalNews = async () => {
      const apiKey = '5fb747e6027d4694bf1d851b1e935ad1'; // Replace with your actual NewsAPI key
      const url = `https://newsapi.org/v2/everything?q=medical&apiKey=${apiKey}&pageSize=5`;

      try {
        const response = await axios.get(url);
        setNewsArticles(response.data.articles);
        setLoading(false);
      } catch (err) {
        setError('Error fetching news');
        setLoading(false);
      }
    };

    fetchMedicalNews();
  }, []);

  if (loading) {
    return <div className="loading-spinner">Loading...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="medical-news">
      <h2 className="news-heading">Latest Medical News</h2>
      <div className="news-grid">
        {newsArticles.map((article, index) => (
          <div key={index} className="news-card">
            <Link to={`/news`} className="news-card-link">
              {article.urlToImage && (
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  className="news-card-image"
                />
              )}
              <div className="news-card-body">
                <h3 className="news-card-title">{article.title}</h3>
                <p className="news-card-description">{article.description}</p>
                <span className="news-card-date">
                  {new Date(article.publishedAt).toLocaleDateString()}
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MedicalNews;
