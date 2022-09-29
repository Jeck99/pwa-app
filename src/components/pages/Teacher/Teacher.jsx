import "./Teacher.css";
import React from "react";

function Teacher(props) {
  return (
    <div data-testid="teacherDiv" className="teacher">
      <h1 data-testid="textFullname">{props.fullName}</h1>
    </div>
  );
};

export default Teacher;
