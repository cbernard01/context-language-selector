import React from "react";
import LanguageContext from "../contexts/LanguageContext"

class Button extends React.Component {
  static contextType = LanguageContext;

  renderContent = () => {
    if (this.context === "english") return "Submit";
    else return "Voorleggen";
  };

  render() {
    return (
      <button className="ui button primary">{this.renderContent()}</button>
    );
  }
}

export default Button;
