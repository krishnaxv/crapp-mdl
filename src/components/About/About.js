import React, { Component } from 'react';
// eslint-disable-next-line import/no-webpack-loader-syntax
import componentHandler from 'exports?componentHandler!material-design-lite/material';
import Panel from '../Panel/Panel';

class About extends Component {
  componentDidMount() {
    componentHandler.upgradeDom();
  }
  render () {
    return (
      <div className="tabs__about">
        <p>CRApp MDL is a shell app built with create-react-app & Material Design Lite.</p>
        <Panel />
      </div>
    );
  }
}

export default About;
