import React from "react";
import { GrupoList } from "../assets/styled/List";
// import { Link } from "react-router-dom";
const List = () => {
  return (
    <>
      <GrupoList>
        <ul>
          <li>
            <p className="active"> Home</p>
          </li>
          <li>
            <p> Reviews</p>
          </li>
          <li>
            <p>Reissues</p>
          </li>
          <li>
            <p>Interviews</p>
          </li>
          <li>
            <p>Podcast</p>
          </li>
          <li>
            <p>Contact</p>
          </li>
        </ul>
      </GrupoList>
    </>
  );
};
export { List };
