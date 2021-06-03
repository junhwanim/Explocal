import React, { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);

  React.useEffect(() => {
    fetch("/destinations")
      .then((res) => res.json())
      .then((json) => setCountries(json.data));
  }, []);

console.log(countries)
  return (
    <DataContext.Provider
      value={{
        countries,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
