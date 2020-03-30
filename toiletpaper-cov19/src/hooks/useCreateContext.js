import { useCallback, useState, useEffect } from 'react';
import db from '#database/db';

export default (props) => {
  const [hasInteracted, setHasInteracted] = useState(0);
  const [globalSheetsRolled, setGlobalSheetsRolled] = useState(0);
  const [userSheetsRolled, setUserSheetsRolled] = useState(0);
  const [userCountry, setUserCountry] = useState('');

  useEffect(() => {
    db.ref('/').on('value', snapshot => {
      setGlobalSheetsRolled(snapshot.val().globalSheetsRolled);
    });
  }, []);

  function onIncrementUserSheet() {
    db.ref('/').transaction(snapshot => {
      if (snapshot) {
        return {
          ...snapshot,
          globalSheetsRolled: snapshot.globalSheetsRolled + 1
        };
      }
    }, null, true);

    if (userCountry === '') {
      return null;
    }

    db.ref('/').transaction(snapshot => {
      if (snapshot) {
        return {
          ...snapshot,
          countries: {
            ...snapshot.countries,
            [userCountry]: snapshot.countries[userCountry] + 1
          }
        }
      }
    }, null, true);

    setUserSheetsRolled(prevState => prevState + 1);
  };

  const onSetUserCountry = (country) => {
    setUserCountry(country);
  };

  const onSetHasInteracted = (interacted) => {
    setHasInteracted(interacted);
  };

  return {
    hasInteracted,
    globalSheetsRolled,
    userSheetsRolled,
    userCountry,
    onSetHasInteracted,
    onIncrementUserSheet,
    onSetUserCountry
  };
};
