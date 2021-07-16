import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import "./App.css";

const years = {
  Y_1982: require("./desawarYears/1982.json"),
  Y_1980: require("./desawarYears/1980.json"),
};

const DesawarGame = () => {
  const months = [
    "1982",
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  const [currentMonths, setCurrentMonths] = useState([...months]);

  const [currentYear, setCurrentYear] = useState(years.Y_1982.Sheet1);
  // const currentYear = years.Y_2017.Sheet1;
  //   const check = (selector, text) => {
  //     var elements = document.querySelectorAll(selector);
  //     return Array.prototype.filter.call(elements, function (element) {
  //       return RegExp(text).test(element.textContent);
  //     });
  //   };

  const check_multi = (selector, multiValue) => {
    var elements = document.querySelectorAll(selector);
    let local = multiValue.map((value) => {
      if (value) {
        return Array.prototype.filter.call(elements, function (element) {
          return RegExp(value).test(element.textContent);
        });
      } else {
        return 0;
      }
    });

    var merged = [].concat.apply([], local);
    return merged;
  };

  const find = (e) => {
    let list = e.target.value.split(" ");

    let mulitple_values = check_multi("span", list);

    let ele = mulitple_values;
    var ele_all = document.querySelectorAll("span");

    for (let i = 0; i < ele_all.length; i++) {
      ele_all[i].style.backgroundColor = "white";
    }

    if (ele.length > 0) {
      ele.map((current) => {
        current.style.backgroundColor = "red";
        return 0;
      });
    }
  };

  const getData = () => {
    return currentYear.map((value, index) => {
      return (
        <p style={{ margin: 0 }} key={index}>
          {Object.keys(value).map((item, key) => {
            return (
              <span key={key} className="span_box_fix">
                {value[currentMonths[key]]}
              </span>
            );
          })}
        </p>
      );
    });
  };

  const changeYear = (e) => {
    setCurrentYear(years[e.target.value].Sheet1);
    currentMonths[0] = e.target.value.split("_")[1];
    setCurrentMonths([...currentMonths]);
  };

  return (
    <Grid>
      <input
        style={{ position: "fixed", right: 0 }}
        placeholder="search number"
        onChange={find}
      ></input>

      <select onChange={changeYear}>
        {Object.keys(years).map((item, key) => {
          return <option key={key}>{item}</option>;
        })}
      </select>
      <h1>{currentMonths[0]}</h1>
      <p style={{ margin: 0 }}>
        {currentMonths.map((value, key) => {
          return (
            <span key={key} className="span_box_fix">
              {value}
            </span>
          );
        })}
      </p>
      {getData()}
    </Grid>
  );
};

export default DesawarGame;
