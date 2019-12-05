import React from "react";
import "./style/IconList.scss";

class IconList extends React.Component {
  constructor() {
    super();
    this.state = {
      Show: false
    };
  }
  notif() {
    this.setState({
      Show: !this.state.Show
    });
  }

  render() {
    return (
      <div className="intFamilies">
        <div className="icones">
          <div className="module" id="moteur">
            {this.state.Show ? (
              <p>Vidange, filtre à huile, filtre à gasoil Echéance: 70 000km</p>
            ) : null}
            <div id="imgIcone">
              <button onClick={() => this.notif()}>Moteur</button>
            </div>
          </div>
          <div className="module" id="freins">
            <div id="imgIcone">
              <h1>Freins</h1>
            </div>
          </div>
          <div className="module" id="chassis">
            <div id="imgIcone">
              <h1>Chassis</h1>
            </div>
          </div>
          <div className="module" id="pneus">
            <div id="imgIcone">
              <h1>Pneus</h1>
            </div>
          </div>

          <div className="module" id="carrosserie">
            <div id="imgIcone">
              <h1>Carrosserie</h1>
            </div>
          </div>
          <div className="module" id="electricite">
            <div id="imgIcone">
              <h1>Electricite</h1>
            </div>
          </div>
          <div className="module" id="echeances">
            <div id="imgIcone">
              <h1>Echeances</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default IconList;
