
import { useState, useEffect } from 'react';
import { fetchComments } from '../services/api';
import { Comment } from '../models/Comments';

const useComments = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getComments = async () => {
      try {
        const response = await fetchComments();
        setComments(response.data);
      } catch (error) {
        console.error('Failed to fetch comments', error);
      } finally {
        setLoading(false);
      }
    };

    getComments();
  }, []);

  return { comments, loading };
};

export default useComments;
