import React from "react";
import { Button } from "../components";
import { useHistory } from 'react-router-dom';
import pageNotFoundPNG from '../assets/img/pageNotFound.png'

export default function PageNotFound() {
  const history = useHistory();

  const goToHomePage = () => {
    history.push('/');
  };

  return (
    <div className="container--page-not-found">
      <div className="page-not-found">
        <img src={pageNotFoundPNG} alt="404"/>
        <Button className="button--black " onClick={goToHomePage}>
          <span>На главную</span>
        </Button>
      </div>
    </div>
  );
}
