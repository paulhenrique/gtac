import React from 'react'
import './style.scss';

function Footer() {
  return (
    <footer>
      <div className="containerFooter">
        <div>
          Designed By <a href="https://github.com/paulhenrique" target="_blank" rel="noreferrer">@paulhenrique</a>
        </div>
        <div>
          <h4>GTAC</h4>
          <p>Copyright ₢ 2021: Todos os Direitos Reservados</p>
        </div>
        <div>
          <a className="btn-top" href="#header">
            <i className="fas fa-arrow-up"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
