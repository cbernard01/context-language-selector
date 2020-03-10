import React from "react";
import LanguageContext from "../contexts/LanguageContext"

class Field extends React.Component {
  static contextType = LanguageContext;

  renderContent = () => {
    if (this.context === "english") return "Name";
    else return "Naam";
  };

  render() {
    return (
      <div className="field">
        <label htmlFor="name">{this.renderContent()}</label>
        <input type="text" id="name"/>
      </div>
    )
  }
}

export default Field;
