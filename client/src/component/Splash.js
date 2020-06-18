import React from "react";

class Splash extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: "white" }}>
        <div className="Icon1">
          <button>As A doctor</button>
        </div><br/>
        <br/>
        <div>
          <button>As A patient</button>
        </div>
      </div>
    );
  }
}

export default Splash;
