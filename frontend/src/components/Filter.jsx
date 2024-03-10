import React, { useState, useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addFilterOption,
  addMaxPriceFilter,
  addMinPriceFilter,
} from "../store/productReducer";
import InputMask from "react-input-mask";
const Filter = ({ classElement }) => {
  const dispatch = useDispatch();
  const minPrice = useSelector((state) => state.product.minPriceFilter);
  const maxPrice = useSelector((state) => state.product.maxPriceFilter);
  const [checkboxOption, setCheckboxOption] = useState([
    { name: "Сначала дорогие", active: false, option: "priceDown" },
    { name: "Сначала дешевыe", active: false, option: "priceUp" },
  ]);
  function changeCheckbox(event) {
    const target = event.target;
    const name = target.name;
    setCheckboxOption(
      checkboxOption.map((item, index) =>
        index === +name ? { ...item, active: true } : { ...item, active: false }
      )
    );
  }
  useEffect(() => {
    for (let i = 0; i < checkboxOption.length; i++) {
      if (checkboxOption[i].active) {
        dispatch(addFilterOption(checkboxOption[i].option));
      }
    }
  }, [checkboxOption]);

  return (
    <div className={`filter ${classElement}`}>
      <div className="filter__close">
        <span>
          <img src="/images/close.svg" alt="" />
        </span>
      </div>
      <div className={"filter__price"}>
        <h3 className={"filter__name"}>Цена</h3>
        <div className={"filter__price-row"}>
          <div className={"filter__price-before"}>
            <InputMask
              value={minPrice}
              onChange={(e) => dispatch(addMinPriceFilter(e.target.value))}
              type="text"
              mask="99999999"
              maskChar=""
            />
          </div>
          <span className={"filter__price-dash"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="2"
              viewBox="0 0 18 2"
              fill="none"
            >
              <line
                x1="1"
                y1="1"
                x2="17"
                y2="1"
                stroke="#DBDBDB"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <div className={"filter__price-after"}>
            <InputMask
              value={maxPrice}
              onChange={(e) => dispatch(addMaxPriceFilter(e.target.value))}
              type="text"
              mask="99999999"
              maskChar=""
            />
          </div>
        </div>
      </div>

      <div className={"filter__sort"}>
        <h3 className={"filter__name"}>Сортировка</h3>
        {checkboxOption.map((item, index) => (
          <label key={index} className={"checkbox-filter"}>
            <input
              onChange={changeCheckbox}
              name={index}
              checked={item.active}
              className={"checkbox-filter__disabled"}
              type="checkbox"
            />
            <span className={"checkbox-filter__active"}></span>
            <span className={"checkbox-filter__name"}>{item.name}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Filter;
