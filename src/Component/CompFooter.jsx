import React from "react";
import brain from "../img/brain.png"

const CompFooter = () => {
    return (
        <div className="card-footer">
            <h4 className="card-title">Bogotá - Colombia</h4>
            <p className="card-text">eleglot@gmail.com</p>
            <p className="card-text">3150000545</p>
            <img src={brain} alt="Brain jumping" className="footer-img" />

            <div className="card-footer text-muted">
                Horario: Lunes a Viernes 8am - 7pm
            </div>

        </div>

    )
}

export default CompFooter; 