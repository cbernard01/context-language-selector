import React from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "../contexts/LanguageContext"
import ColorContext from "../contexts/ColorContext";

class App extends React.Component {
  state = {language: "english", color: "red"};

  onLanguageChange = language => {
    this.setState({language: language});
  };

  renderLanguage = () => {
    return (
      <div className={"ui grid"} style={{margin: "10px"}}>
        <div className="three wide column">
          Select a language:
        </div>
        <div className="thirteen wide column">
          <div className="ui icon mini buttons">
            <button className="ui button" onClick={() => this.onLanguageChange("english")}>
              <i className="flag us"/>
            </button>
            <button className="ui button" onClick={() => this.onLanguageChange("dutch")}>
              <i className="flag nl"/>
            </button>
          </div>
        </div>
      </div>
    );
  };

  renderForm = () => {
    return (
      <div className="ui grid">
        <div className="five wide column">
          <ColorContext.Provider value={this.state.color}>
            <LanguageContext.Provider value={this.state.language}>
              <UserCreate/>
            </LanguageContext.Provider>
          </ColorContext.Provider>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className={"ui container"}>
        {this.renderLanguage()}
        {this.renderForm()}
      </div>
    );
  }
}

export default App;
