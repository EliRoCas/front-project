import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// const URL = 'http://localhost:5000/apiClients/Products/';
const URL = `${import.meta.env.VITE_SERVER_URL}/products/`;

// Se define este URL para la versión de despliegue
//const URL = 'https://tech-deployment.onrender.com/apiClients/products';


const CompAddProduct = () => {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [price, setPrice] = useState('');
    const [over18, setOver18] = useState('');
    const navigate = useNavigate();


    // Se crea la funcion de guardar
    const saveProduct = async (e) => {
        e.preventDefault();

        await axios.post(URL, {
            name: name,
            type: type,
            price: price,
            over18: over18
        })
        navigate('/products')
    }

    return (
        <div>

            <h3>Formulario para Agregar un Producto</h3>
            <form onSubmit={saveProduct}>
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input value={name} onChange={(e) => setName(e.target.value)}
                        type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Tipo</label>
                    <input value={type} onChange={(e) => setType(e.target.value)}
                        type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Precio</label>
                    <input value={price} onChange={(e) => setPrice(e.target.value)}
                        type="number" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-check-label"> Para mayores de edad</label>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" checked={over18}
                            onChange={(e) => setOver18(e.target.checked)} />
                    </div>
                </div>

                <button type="submit" className="btn btn-dark">
                    <i className="fa-solid fa-floppy-disk"></i>
                </button>
            </form>
        </div>
    )
}

export default CompAddProduct;