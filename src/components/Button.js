import React from "react";
import LanguageContext from "../contexts/LanguageContext"
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component {

  renderContent = (value) => {
    if (value === "english") return "Submit";
    else return "Voorleggen";
  };

  renderButton = (color) => {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {(value) => this.renderContent(value)}
        </LanguageContext.Consumer>
      </button>
    );
  };

  render() {
    return (
      <ColorContext.Consumer>
        {(color) => this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
