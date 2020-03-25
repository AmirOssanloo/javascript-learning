import React, { useCallback, useState, useEffect } from 'react';
import db from '#database/db';

export default (props) => {
  const [globalSheetsRolled, setGlobalSheetsRolled] = useState(0);
  const [userSheetsRolled, setUserSheetsRolled] = useState(0);

  useEffect(() => {
    db.ref('/').on('value', snapshot => {
      setGlobalSheetsRolled(snapshot.val().globalSheetsRolled);
    });
  }, []);

  const onIncrementUserSheet = useCallback(() => {
    db.ref('/').transaction(snapshot => {
      if (snapshot) {
        return {
          ...snapshot,
          globalSheetsRolled: snapshot.globalSheetsRolled + 1
        };
      } else {
        return {
          globalSheetsRolled: globalSheetsRolled
        }
      }
    }, null, true);

    setUserSheetsRolled(prevState => prevState + 1);
  });

  return {
    globalSheetsRolled,
    userSheetsRolled,
    setGlobalSheetsRolled,
    onIncrementUserSheet
  };
};
