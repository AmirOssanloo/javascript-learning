import { useState, useEffect } from 'react';
import db from '#database/db';

export default () => {
  const [hasInteracted, setHasInteracted] = useState(false);
  const [userSheetsRolled, setUserSheetsRolled] = useState(0);
  const [globalSheetsRolled, setGlobalSheetsRolled] = useState(0);
  const [countrySheetsRolled, setCountrySheetsRolled] = useState({});
  const [userCountry, setUserCountry] = useState({});

  useEffect(() => {
    db.ref('/').on('value', snapshot => {
      setGlobalSheetsRolled(snapshot.val().globalSheetsRolled);
      setCountrySheetsRolled(snapshot.val().countrySheetsRolled);
    });
  }, []);

  return {
    hasInteracted,
    userCountry,
    userSheetsRolled,
    globalSheetsRolled,
    countrySheetsRolled,
    setHasInteracted,
    setUserCountry,
    setUserSheetsRolled
  };
};
