import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Transition } from "react-transition-group";
function Dropdown({ classItem, payload, mainDops }) {
  const dispatch = useDispatch();
  const [dropdownActive, setDropdownActive] = useState(false);
  const [heightList, setHeightList] = useState("");
  function dropdownСhoose(id) {
    for (let i = 0; i < mainDops.length; i++) {
      mainDops[i].selected = false;
      if (id == mainDops[i].id) {
        mainDops[i].selected = true;
      }
    }
    dispatch(payload(mainDops));
    setDropdownActive(false);
  }

  const transitionStyles = {
    entering: { height: heightList.scrollHeight },
    entered: { height: heightList.scrollHeight },
    exiting: { height: 0 },
    exited: { height: 0 },
  };

  useEffect(() => {
    setHeightList(document.querySelector(`.${classItem} .dropdown-kit__list`));
  }, []);

  return (
    <Transition in={dropdownActive} timeout={200}>
      {(state) => (
        <div className={`dropdown-kit ${classItem} ${state}`}>
          <div
            onClick={() => setDropdownActive(!dropdownActive)}
            className={`dropdown-kit__hero ${state}`}
          >
            {mainDops.map((item) => (
              <React.Fragment key={item.id}>
                {item.selected ? item.name : ""}
              </React.Fragment>
            ))}
            <svg
              width="10"
              height="7"
              viewBox="0 0 8 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.64645 4.35355C3.84171 4.54882 4.15829 4.54882 4.35355 4.35355L7.53553 1.17157C7.7308 0.976311 7.7308 0.659728 7.53553 0.464466C7.34027 0.269204 7.02369 0.269204 6.82843 0.464466L4 3.29289L1.17157 0.464466C0.976311 0.269204 0.659728 0.269204 0.464466 0.464466C0.269204 0.659728 0.269204 0.976311 0.464466 1.17157L3.64645 4.35355ZM3.5 3L3.5 4L4.5 4L4.5 3L3.5 3Z"
                fill="#323232"
              />
            </svg>
          </div>

          <ul style={{ ...transitionStyles[state] }} className={`dropdown-kit__list ${state}`}>
            {mainDops.map((item) => (
              <li
                onClick={() => dropdownСhoose(item.id)}
                key={item.id}
                className={`dropdown-kit__item ${item.selected ? "active" : ""}`}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </Transition>
  );
}

export default Dropdown;
