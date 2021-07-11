import React from "react";
import { Grid } from "@material-ui/core";
import "./App.css";

const years = {
  Y2017: require("./desawarYears/2017.json"),
};

const DesawarGame = () => {
  // const [currentYear, setCurrentYear] = useState(years.Y2017);
  const currentYear = years.Y2017;
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
    let list = e.target.value.split(",");

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
                {value[item]}
              </span>
            );
          })}
        </p>
      );
    });
  };

  return (
    <Grid>
      <input
        style={{ position: "fixed", right: 0 }}
        placeholder="search number"
        onChange={find}
      ></input>

      {getData()}
    </Grid>
  );
};

export default DesawarGame;
