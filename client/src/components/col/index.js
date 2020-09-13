import React from "react";

//COL - Adjusting column's size instead of it's classname. 

function Col(props) {
  const size = props.size.split(" ").map(size => "col-" + size).join(" ");

  return <div className={size} {...props} />;
}

export default Col;