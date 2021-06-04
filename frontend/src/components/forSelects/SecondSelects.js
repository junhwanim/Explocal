import React, { useContext, useState, useRef } from "react";
import Select from "react-select";
import { DataContext } from "../DataContext";
import styled from "styled-components";
import { Link } from "react-router-dom";

function SecondSelects() {
  const { localsCountries, localsCityValue, setLocalsCityValue } =
    useContext(DataContext);
  const [countryValue, setCountryValue] = useState("");
  const [countryError, setCountryError] = useState("");
  const [cityError, setCityError] = useState("");
  const cityRef = useRef(null);

  const options1 = localsCountries.map((nation) => {
    return { label: nation.country, value: nation.code };
  });

  let findCity = undefined;
  let options2 = undefined;

  {
    countryValue &&
      (findCity = localsCountries.find((nation) => {
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
      border: "2px solid #051747",
      boxShadow: "none",
      color: "#cbb162",
      "&:hover": {
        borderColor: "#cbb162",
        cursor: "pointer",
      }
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
      <Row>
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
              setLocalsCityValue("");
            }}
            placeholder="Countries"
            options={options1}
            styles={customStyles}
          />
        </Wrapper1>
      </Row>
      <Row2>
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
              setLocalsCityValue(value);
              setCityError("");
              // setCountryError("Required");
            }}
          />
        </Wrapper2>
      </Row2>
      {countryValue && !localsCityValue ? (
        <ShowLocals
          to={`/locals/${localsCityValue.label}`}
          onClick={(e) => {
            e.preventDefault();
            setCityError("* REQUIRED *");
          }}
        >
          Search
        </ShowLocals>
      ) : countryValue && localsCityValue ? (
        <ShowLocals to={`/locals/${localsCityValue.label}`}>
          Search
        </ShowLocals>
      ) : (
        <ShowLocals
          to={`/locals/${localsCityValue.label}`}
          onClick={(e) => {
            e.preventDefault();
            setCountryError("* REQUIRED *");
          }}
        >
          Search
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
  margin-top: 33px;
  margin-left: 20px;
  height: 40px;
  width: 150px;
  border-radius: 5px;
  border: none;
  color: #fefefe;
  background-color: #051747;
  font-size: 18px;
  font-weight: 400;

  &:hover {
    background-color: #cbb162;
    transition: all 0.2s ease-in-out;
    color: #000000
  }

  @media screen and (max-width: 825px){
      flex-direction: column;
      margin-left: 0;

  }
`;

const SelectsWrapper = styled.div`
  display: flex;
  margin-top: 20px;

  @media screen and (max-width: 825px){
      flex-direction: column;
      align-items: center;
  }
`;

const CountryLabel = styled.label`
  margin-bottom: 10px;
  color: #000000;
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

@media screen and (max-width:825px){
      margin-bottom: 20px;
  }
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

const Row = styled.div`
  display: flex;
  flex-direction: column;
`;
const Row2 = styled.div`
margin-left: 10px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width:825px){
      margin-left: 0;
  }
`;
export default SecondSelects;
