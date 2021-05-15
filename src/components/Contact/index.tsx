import React from 'react'
import './style.scss';

function Contact() {
  return (
    <div className="contactContainer">
      <div className="containerMap">
        <iframe title="Map IFSP" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14625.17258705151!2d-48.0185491!3d-23.5938174!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa65e4fb6d75446bf!2sInstituto%20Federal%20de%20Educa%C3%A7%C3%A3o%2C%20Ci%C3%AAncia%20e%20Tecnologia%20de%20S%C3%A3o%20Paulo%2C%20Campus%20Itapetininga!5e0!3m2!1spt-BR!2sbr!4v1621115518279!5m2!1spt-BR!2sbr" width="472" height="388" style={{ border: '0' }}></iframe>
      </div>
      <div className="containerText">
        <h1>Contact</h1>
        <p>Av. João Olímpio de Oliveira, 1561 - Vila Asem, Itapetininga - SP, 18202-000</p>
        <div className="containerIcons">
          <a href="mailto:carlos.santos@ifsp.edu.br" target="_blank" rel="noreferrer">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="https://github.com/topics/gtac" target="_blank" rel="noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://itp.ifsp.edu.br" target="_blank" rel="noreferrer">
            <i className="fas fa-globe"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
