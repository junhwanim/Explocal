import React, { useContext, useState, useRef } from "react";
import Select from "react-select";
import { DataContext } from "../DataContext";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Selects() {
  const { countries } = useContext(DataContext);
  const [countryValue, setCountryValue] = useState("");
  const [cityValue, setCityValue] = useState("");
  const [countryError, setCountryError] = useState("");
  const [cityError, setCityError] = useState("");
  const cityRef = useRef(null);

  console.log(cityValue);
  const options1 = countries.map((nation) => {
    return { label: nation.country, value: nation.code };
  });

  let findCity = undefined;
  let options2 = undefined;

  {
    countryValue &&
      (findCity = countries.find((nation) => {
        if (countryValue.label === nation.country) {
          options2 = nation.cities.map((city) => {
            return { label: city, value: city };
          });
        }
        return findCity;
      }));
  }

  const customStyles = {
    control: (styles, state) => ({
      ...styles,
      width: "250px",
      border: "3px solid #cbb162",
      boxShadow: "none",
      color: "#cbb162",
      "&:hover": {
        borderColor: "#cbb162",
        cursor: "pointer",
      },
    }),

    option: (styles, state) => {
      return {
        ...styles,
        width: "250px",
        backgroundColor: state.isSelected ? "#cbb162" : "#fefefe",
        ":active": {
          backgroundColor: state.isSelected ? "#fefefe" : "#fefefe",
        },
        ":hover": {
          cursor: "pointer",
          backgroundColor: "#cbb162",
        },
        ":focus": {
          backgroundColor: "#cbb162",
        },
        color: "#000000",
      };
    },
    menuList: (styled, state) => ({
      ...styled,
      paddingTop: 0,
      paddingBottom: 0,
    }),
    menu: (styled, state) => ({
      ...styled,
      width: "250px",
      paddingTop: 0,
      paddingBottom: 0,
    }),
  };

  return (
    <SelectsWrapper>
      <CountryLabel htmlFor="country-select">Select a country</CountryLabel>
      <Wrapper1 error={countryError}>
        <Select
          id="country-select"
          onChange={(value) => {
            console.log("taco2", cityRef.current);
            cityRef.current.state.label = "";
            cityRef.current.state.value = "";
            setCountryValue(value);
            setCountryError("");
            setCityValue("");
          }}
          placeholder="Countries"
          options={options1}
          styles={customStyles}
        />
      </Wrapper1>
      <CountryLabel htmlFor="city-select">Select a city</CountryLabel>
      <Wrapper2 error={cityError}>
        <Select
          id="city-select"
          ref={cityRef}
          placeholder="Cities"
          styles={customStyles}
          options={options2}
          noOptionsMessage={() => "Country is not selected."}
          onChange={(value) => {
            setCityValue(value);
            setCityError("");
            // setCountryError("Required");
          }}
        />
      </Wrapper2>
      {countryValue && !cityValue ? (
        <ShowLocals
          to="/signin"
          onClick={(e) => {
            e.preventDefault();
            setCityError("* REQUIRED *");
          }}
        >
          Discover Locals
        </ShowLocals>
      ) : countryValue && cityValue ? (
        <ShowLocals to="/signin">Discover locals</ShowLocals>
      ) : (
        <ShowLocals
          to="/signin"
          onClick={(e) => {
            e.preventDefault();
            setCountryError("* REQUIRED *");
          }}
        >
          Discover Locals
        </ShowLocals>
      )}
    </SelectsWrapper>
  );
}

const ShowLocals = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  margin-top: 50px;
  height: 40px;
  width: 250px;
  border-radius: 5px;
  border: none;
  color: #000000;
  background-color: #cbb162;
  font-size: 18px;
  font-weight: 400;

  &:hover {
    background-color: #fefefe;
    transition: all 0.2s ease-in-out;
  }
`;

const SelectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const CountryLabel = styled.label`
  margin-bottom: 10px;
  color: #fefefe;
  font-size: 20px;
  font-weight: 600;
`;

const Wrapper1 = styled.div`
  margin-bottom: 40px;

  ${({ error }) => {
    return (
      error &&
      `&::after{
      content: "${error}";
      color: red;
      position: absolute;
  }`
    );
  }}
`;

const Wrapper2 = styled.div`
  ${({ error }) => {
    return (
      error &&
      `&::after{
      content: "${error}";
      color: red;
      position: absolute;
  }`
    );
  }}
`;

export default Selects;
