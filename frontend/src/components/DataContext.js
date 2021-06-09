import React, { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [cityValue, setCityValue] = useState("");
  const [localsCountries, setLocalsCountries] = useState([]);
  const [localsCityValue, setLocalsCityValue] = useState([]);
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("currentUser")))
  const [active, setActive] = useState("signin");

  useEffect(() => {
    fetch("/api/destinations")
      .then((res) => res.json())
      .then((json) => {
        setCountries(json.data);
        setLocalsCountries(json.data);
      });
  }, []);

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((json) => setAllUsers(json.data));
  }, []);

  return (
    <DataContext.Provider
      value={{
        countries,
        allUsers,
        cityValue,
        setCityValue,
        localsCountries,
        localsCityValue,
        setLocalsCityValue,
        currentUser,
        setCurrentUser,
        active,
        setActive
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
