import React from "react";
import LanguageSelector from "./LanguageSelector";
import ColorContext from "../contexts/ColorContext";
import {LanguageStore} from "../contexts/LanguageContext";
import UserCreate from "./UserCreate";

class App extends React.Component {
  state = {color: "red"};

  renderLanguage = () => {
    return (
      <LanguageSelector/>
    );
  };

  renderForm = () => {
    return (
      <ColorContext.Provider value={this.state.color}>
        <UserCreate/>
      </ColorContext.Provider>
    );
  };

  render() {
    return (
      <div className={"ui container"}>
        <LanguageStore>
          {this.renderLanguage()}
          {this.renderForm()}
        </LanguageStore>
      </div>
    );
  }
}

export default App;
