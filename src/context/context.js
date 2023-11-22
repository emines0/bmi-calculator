import { createContext, useState } from 'react';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [units, setUnits] = useState({
    metric: true,
    imperial: false,
  });

  return (
    <GlobalContext.Provider value={{ units, setUnits }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
