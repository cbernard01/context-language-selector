import React from "react";
import LanguageContext from "../contexts/LanguageContext"
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component {
  static contextType = LanguageContext;

  renderContent = () => {
    if (this.context.language === "english") return "Submit";
    else return "Voorleggen";
  };

  renderButton = (color) => {
    return (
      <button className={`ui button ${color}`}>
          {this.renderContent()}
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
