import React from "react";
import mfnfgif from "./mfnfgif.gif";

class Main extends React.Component {
  render() {
    return (
      <div id="maincontainer">
        <div id="introcontainer">
          <h1 id="introtitle">MAKE FAMILY NOT FRIENDS</h1>
          <img id="mfnfgif" alt="MFNF Gif" src={mfnfgif}></img>
          <h2 id="introdescription">A Beautiful Family</h2>
        </div>
      </div>
    );
  }
}

export default Main;
