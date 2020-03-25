import { useState, useEffect } from 'react';

export default (database, path) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [snapshot, setSnapshot] = useState([]);

  useEffect(() => {
    const fetchSnapshot = async () => {
      setIsLoading(true);
      setHasError(false);

      try {
        const snapshot = await database
          .ref(path)
          .once('value')
          .then(snapshot => snapshot.val());

        setSnapshot(snapshot);
      } catch (e) {
        setHasError(true);
      }

      setIsLoading(false);
    };

    if (isLoading) {
      fetchSnapshot();
    }
  }, []);

  return { snapshot, isLoading, hasError };
};
