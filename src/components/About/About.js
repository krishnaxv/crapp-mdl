import React from 'react';

const About = () => {
  return (
    <div>
      <p>CRApp MDL is a shell app built with create-react-app & Material Design Lite.</p>
      <div className="mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
        <div className="mdl-tabs__tab-bar">
          <a href="#starks-panel" className="mdl-tabs__tab is-active">Starks</a>
          <a href="#lannisters-panel" className="mdl-tabs__tab">Lannisters</a>
          <a href="#targaryens-panel" className="mdl-tabs__tab">Targaryens</a>
        </div>
        <div className="mdl-tabs__panel is-active" id="starks-panel">
          <ul>
            <li>Eddard</li>
            <li>Catelyn</li>
            <li>Robb</li>
            <li>Sansa</li>
            <li>Brandon</li>
            <li>Arya</li>
            <li>Rickon</li>
          </ul>
        </div>
        <div className="mdl-tabs__panel" id="lannisters-panel">
          <ul>
            <li>Tywin</li>
            <li>Cersei</li>
            <li>Jamie</li>
            <li>Tyrion</li>
          </ul>
        </div>
        <div className="mdl-tabs__panel" id="targaryens-panel">
          <ul>
            <li>Viserys</li>
            <li>Daenerys</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
