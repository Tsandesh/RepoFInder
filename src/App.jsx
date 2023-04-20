import React from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Repo from "./components/Repo";
import { TypeAnimation } from "react-type-animation";

const App = () => {
  return (
    <>
      <Navbar />

      <h1 className="d-flex justify-content-center">
        {" "}
        Find Github's
        <span className="text-primary">
          <TypeAnimation
            sequence={[" Best", 4000, " Awesome", 3000]}
            repeat={Infinity}
            speed={{ type: "keyStrokeDelayInMs", value: 50 }}
          />{" "}
        </span>
        Repos
      </h1>
      <SearchBar />
      <Repo />
    </>
  );
};

export default App;
