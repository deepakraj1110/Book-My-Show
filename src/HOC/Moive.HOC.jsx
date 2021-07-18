import React, { Component } from "react";
import { Route } from "react-router-dom";
import MoiveLayout from "../Layouts/Moive.layout";

const MovieHOC = ({ component: Component, ...rest }) => {
    return (
      <>
        <Route
          {...rest}
          component={(props) => (
            <MoiveLayout>
              <Component {...props} />
            </MoiveLayout>
          )}
        />
      </>
    );
  };

  export default MovieHOC;