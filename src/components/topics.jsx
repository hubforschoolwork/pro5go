import React, { useEffect, useState } from 'react';
import { getTopics } from '../api';

const Topics = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const data = await getTopics();
        setTopics(data);
      } catch (error) {
        console.error('Error fetching topics:', error);
      }
    };

    fetchTopics();
  }, []);

  return (
    <div>
      <h1>Topics</h1>
      <ul>
        {topics.map((topic) => (
          <li key={topic.id}>
            {topic.title} - {topic.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Topics;
