import React from 'react'
import LogoIFSP from '../../assets/img/logo_if.png';
import './style.scss';

function Header() {
  return (
    <header id="header">
      <div className="containerWelcome">
        <div className="containerImage">
          <img src={LogoIFSP} alt="Logo IFSP" />
        </div>
        <div className="containerText">
          <h1>GTAC</h1>
          <p>Grupo de Tecnologias e Aplicações da Computação</p>

        </div>
      </div>
      <div className="containerButton">
        <button>
          <i className="fas fa-arrow-down"></i>
        </button>
      </div>
    </header>
  )
}

export default Header;
