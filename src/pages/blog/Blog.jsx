import React from 'react';
import "./Blog.css"

const posts = [
  {
    id: 1,
    title: 'How to Build a Modern React App',
    excerpt: 'Learn how to build a fast, scalable, and maintainable React app with modern tools and techniques.',
    image: 'https://via.placeholder.com/400x250',
    date: 'January 20, 2025',
  },
  {
    id: 2,
    title: 'Understanding JavaScript ES6 Features',
    excerpt: 'Explore the new features of JavaScript ES6, from arrow functions to promises, and improve your coding skills.',
    image: 'https://via.placeholder.com/400x250',
    date: 'January 15, 2025',
  },
  {
    id: 3,
    title: 'CSS Grid Layout: A Complete Guide',
    excerpt: 'Learn how to master CSS Grid and create complex layouts with less effort and more control.',
    image: 'https://via.placeholder.com/400x250',
    date: 'January 10, 2025',
  },
  // Add more blog posts here...
];

const Blog = () => {
  return (
    <div className="blog-page">
      <h1 className="page-title">Latest Blog Posts</h1>
      <div className="blog-list">
        {posts.map((post) => (
          <div key={post.id} className="blog-card">
            <img src={post.image} alt={post.title} className="blog-image" />
            <div className="blog-content">
              <h2 className="blog-title">{post.title}</h2>
              <p className="blog-excerpt">{post.excerpt}</p>
              <div className="blog-footer">
                <span className="blog-date">{post.date}</span>
                <a href={`/blog/${post.id}`} className="read-more">Read More</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
