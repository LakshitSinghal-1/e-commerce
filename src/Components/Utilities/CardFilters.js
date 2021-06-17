import React from "react";
import { 
    Checkbox
}  from "antd";

const CardFilters = (props) => {
    const { filterTypeArray, title, filterProducts} = props;
    function onChange(checkedValues) {
        filterProducts(checkedValues, title.toLowerCase());
      }
    return(
        <div style={{margin: "5%"}}>
            <h2>{title}</h2>
            <Checkbox.Group options={filterTypeArray} onChange={onChange} />
        </div>
        );
};

export default CardFilters;