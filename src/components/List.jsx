import React from "react";
import { GrupoList } from "../assets/styled/List";
import { Link } from "react-router-dom";
const List = () => {
  return (
    <>
      <GrupoList>
        <ul>
          <Link to="/">
            <p className="active"> Home</p>
          </Link>
          <Link to="/reviews">
            <p> Reviews</p>
          </Link>
          <Link to="/Reissues">
            <p>Reissues</p>
          </Link>
          <Link to="/Interviews">
            <p>Interviews</p>
          </Link>
          <Link to="/Podcast">
            <p>Podcast</p>
          </Link>
          <Link to="/Contact">
            <p>Contact</p>
          </Link>
        </ul>
      </GrupoList>
    </>
  );
};
export { List };
