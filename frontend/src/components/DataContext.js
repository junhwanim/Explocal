import React, { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

let initialState = {
  country: "",
  city: "",
  email: "",
  password: "",
  password2: "",
  avatarSrc: "",
  name: "",
  username: "",
  bio: "",
  local: "",
};

export const DataProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [cityValue, setCityValue] = useState("");
  const [localsCountries, setLocalsCountries] = useState([]);
  const [localsCityValue, setLocalsCityValue] = useState([]);
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("currentUser"))
  );
  const [active, setActive] = useState("signin");
  const [formValue, setFormValue] = useState(initialState);
  const [reload, setReload] = useState(true);

  const pageVariants = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 1,
  };

  useEffect(() => {
    fetch("/api/destinations")
      .then((res) => res.json())
      .then((json) => {
        setCountries(json.data);
        setLocalsCountries(json.data);
      });
  }, [reload]);

  useEffect(() => {
    if (!reload) {
      return;
    }
    fetch("/api/users")
      .then((res) => res.json())
      .then((json) => {
        setAllUsers(json.data);
        setReload(false);
      });
  }, [reload]);

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
        setActive,
        formValue,
        setFormValue,
        setReload,
        pageTransition,
        pageVariants,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
