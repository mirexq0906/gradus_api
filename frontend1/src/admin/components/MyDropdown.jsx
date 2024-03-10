import React, { useState } from "react";
const MyDropdown = ({category, setCategoryId, categoryId}) => {
  const [dropdown, setDropdown] = useState(false)
  return (
    <div className="dropdown">
      <div onClick={() => setDropdown(!dropdown)} className="dropdown__hero">
        {categoryId
          ? category.map((item) => (
              <React.Fragment>
                {categoryId == item.id ? item.name : ""}
              </React.Fragment>
            ))
          : "Выберите категорию"}
      </div>
      <ul className={`dropdown__list ${dropdown ? "active" : ""}`}>
        {category.map((item) => (
          <li key={item.id} onClick={() => {setCategoryId(item.id); setDropdown(false)}}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};
 
export default MyDropdown;
