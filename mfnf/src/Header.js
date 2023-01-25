import React from "react";
import mfnftrans from "./mfnftrans.png";

class Header extends React.Component {
  render() {
    return (
      <div id="headercontainer">
        <header id="header">
          <div id="headernav">
            {/* <h1 id="Roster">FAMILY</h1> */}
            <img id="mfnflogo" alt="MFNF Logo" src={mfnftrans}></img>
            {/* <h1 id="contact">CONTACT</h1> */}
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
