import React from "react";
import Field from "./Field";
import Button from "./Button";

const UserCreate = () => {
  return (
    <div className="ui grid">
      <div className="five wide column">
        <div className="ui form">
          <Field/>
          <Button/>
        </div>
      </div>
    </div>
  );
};

export default UserCreate;
