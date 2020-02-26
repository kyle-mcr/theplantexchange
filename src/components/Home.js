import React, { Fragment } from "react";
import { useAuth0 } from "../react-auth0-spa";
import "./Home.css";
import img from './background.jpg';

const Home = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <div id="loading">
        <div id="message">
        <img class="image1" src={img} alt="TPE"/>
        </div>

    </div>;
  }

  return (
    <Fragment>
     <div class="loading">
      </div>
      <div id="message">
      <img class="image1" src={img} alt="TPE"/>
      </div>
    </Fragment>
  );
};

export default Home;