import React from "react";
import LanguageContext from "../contexts/LanguageContext"

class LanguageSelector extends React.Component {
  static contextType = LanguageContext;

  render() {
    return (
      <div className={"ui grid"} style={{margin: "10px"}}>
        <div className="three wide column">
          Select a language:
        </div>
        <div className="thirteen wide column">
          <div className="ui icon mini buttons">
            <button className="ui button" onClick={() => this.context.onLanguageChange("english")}>
              <i className="flag us"/>
            </button>
            <button className="ui button" onClick={() => this.context.onLanguageChange("dutch")}>
              <i className="flag nl"/>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default LanguageSelector;
