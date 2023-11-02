import React, { createContext, useState } from 'react';

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [state, setState] = useState({});

  return (
    <MovieContext.Provider value={{ state, setState }}>
      {children}
    </MovieContext.Provider>
  );
};