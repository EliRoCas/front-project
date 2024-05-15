import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// const URL = 'http://localhost:5000/apiClients/clients/';

// Se define este URL para la versión de despliegue
const URL = 'https://tech-deployment.onrender.com/apiClients/clients';

const CompAddClients = () => {
    const [name, setName] = useState('');
    const [lastName, setLastname] = useState('');
    const [idCard, setIdCard] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [adress, setAdress] = useState('');
    const navigate = useNavigate();

    // Se crea la funcion de guardar
    const saveClients = async (e) => {
        e.preventDefault();

        await axios.post(URL, {
            name: name,
            lastName: lastName,
            idCard: idCard,
            email: email,
            phone: phone,
            adress: adress
        })
        navigate('/clients')
    }

    return (
        <div>

            <h3>Formulario para Guardar Clientes</h3>
            <form onSubmit={saveClients}>
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input value={name} onChange={(e) => setName(e.target.value)}
                        type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Apellidos</label>
                    <input value={lastName} onChange={(e) => setLastname(e.target.value)}
                        type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Documento</label>
                    <input value={idCard} onChange={(e) => setIdCard(e.target.value)}
                        type="number" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Correo</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)}
                        type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Teléfono</label>
                    <input value={phone} onChange={(e) => setPhone(e.target.value)}
                        type="number" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Dirección</label>
                    <input value={adress} onChange={(e) => setAdress(e.target.value)}
                        type="text" className="form-control" />
                </div>

                <button type="submit" className="btn btn-dark">
                    <i className="fa-solid fa-floppy-disk"></i>
                </button>
            </form>
        </div>
    )
}

export default CompAddClients;