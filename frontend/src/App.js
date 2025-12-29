
import React, { useEffect, useState } from "react";

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/articles")
      .then(res => res.json())
      .then(data => setArticles(data));
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>BeyondChats Articles</h1>

      {articles.map(article => (
        <div
          key={article._id}
          style={{
            border: "1px solid #ddd",
            padding: "15px",
            marginBottom: "20px",
            borderRadius: "8px"
          }}
        >
          <h2>{article.title}</h2>
          <p>{article.content}</p>

          <h3>Updated Version</h3>
          <p>{article.updatedContent}</p>

          <h4>References</h4>
          <ul>
            {article.references?.map((ref, i) => (
              <li key={i}>{ref}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default App;
