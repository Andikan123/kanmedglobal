import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import "./Hero.css"

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
    return <p>Loading medical news...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="medical-news">
      <h2>Latest Medical News</h2>
      <ul>
        {newsArticles.map((article, index) => (
          <li key={index}>
            {/* Use Link to route to the detailed news page */}
            <Link to={`/news`} className="news-link">
              {article.urlToImage && (
                <img src={article.urlToImage} alt={article.title} className="news-image" />
              )}
              <div className="news-text">
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <span>{article.publishedAt}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MedicalNews;
