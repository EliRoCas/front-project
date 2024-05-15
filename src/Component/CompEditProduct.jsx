import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

// const URL = 'http://localhost:5000/apiClients/Products/';

// Se define este URL para la versión de despliegue
const URL = 'https://tech-deployment.onrender.com/apiClients/Products/';

// Se crea la función componente, para editar los clientes
const CompEditProducts = () => {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [price, setPrice] = useState('');
    const [over18, setOver18] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();


    // Se crea la función para Actualizar el elemento 
    const editProduct = async (e) => {
        e.preventDefault();
        await axios.patch(`${URL}${id}`, {
            name: name,
            type: type,
            price: price,
            over18: over18
        })
        navigate('/products/');
    };

    useEffect(() => {
        getProductID()
    }, []);

    const getProductID = async () => {
        const result = await axios.get(`${URL}${id}`)
        setName(result.data.name)
        setType(result.data.type)
        setPrice(result.data.price)
        setOver18(result.data.over18)

    }

    return (
        <div>
            <h3>Formulario para Editar Productos</h3>
            <form onSubmit={editProduct}>
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input value={name} onChange={(e) => setName(e.target.value)}
                        type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Tipo</label>
                    <input value={type} onChange={(e) => setLastname(e.target.value)}
                        type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Precio</label>
                    <input value={price} onChange={(e) => setIdCard(e.target.value)}
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
                    <i className="fa-solid fa-pencil"></i>
                </button>
            </form>
        </div>
    )
}

export default CompEditProducts;