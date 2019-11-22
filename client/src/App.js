import React from "react";
import "./App.scss";
import { Helmet } from "react-helmet";
import Burger from "./component/Burger";
import Card from "./component/Card";
import Input from "./component/Input";
import Button from "./component/Button";
import Tabx from "./component/Tab";
import Chart from "./component/Chart";
import Navigation from "./component/navigation/Navigation";
// npm run start:client

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* NOTE: Keep the helmet code below and change the app title.
            Add any meta tags you want, or any tag you want to go in the header. 
            You can modify everything else! */}
        <Helmet>
          <title>Your App Title Here</title>
        </Helmet>

        <Navigation />
        <header className="App-header">
          <Tabx />
          <h2>Brainstation 3D Starter - Team 5_minute_ramen</h2>
          <Chart />
          <Card />
          <Input />
          <Button />
        </header>
      </div>
    );
  }
}
