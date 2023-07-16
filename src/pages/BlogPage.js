import React from 'react';

const BlogPage = () => {
  const blogArticles = [
    {
      title: 'Embracing Self-Care: Prioritizing Your Well-being',
      content:
        'In our busy lives, it is crucial to prioritize self-care. Take time for yourself, engage in activities that bring you joy, and nurture your physical and mental well-being. Remember, you are worth it!',
      author: 'Jane Doe',
      date: 'July 1, 2023',
    },
    {
      title: 'Finding Inner Strength: Overcoming Challenges',
      content:
        'Life presents us with various challenges, but it is in these moments that we discover our inner strength. Embrace the obstacles, learn from them, and let your resilience shine through!',
      author: 'Sarah Smith',
      date: 'June 15, 2023',
    },
    // Add more blog articles as needed
  ];

  return (
    <div>
      <h2>Blog Page</h2>
      {blogArticles.map((article, index) => (
        <div key={index} className="blog-article">
          <h3>{article.title}</h3>
          <p>{article.content}</p>
          <p>
            Written by {article.author} on {article.date}
          </p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;

