// Dado que se trabaja con una base de datos en la nube (mongooDB), se debe utilizar 'axios' que es una 
// biblioteca de JavaScript que se utiliza para realizar solicitudes HTTP desde el navegador o desde Node.js

import axios from "axios";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'


// Se define la URL de la API donde se encuentran los endpoints 
const URL = 'http://localhost:5000/apiClients/Products/';

const CompShowProducts = () => {

    // Se utiliza el hook useState para definir el estado 'clients', que almacenará la lista de clientes
    const [products, setProducts] = useState([]);

    // Se utiliza el hook useEffect para cargar los clientes al montar el componente
    useEffect(() => {
        getProducts()
    },
        [])

    //GET - Función para mostrar los clientes 
    const getProducts = async () => {
        const result = await axios.get(URL);
        setProducts(result.data);
    }

    // DELETE - Función para eliminar clientes 
    const deleteProdcut = async (id) => {
        await axios.delete(`${URL}${id}`);
        getProducts(); // Se recarga la lista de clientes después de eliminar uno
    }

    return (
        <>
            <div className='container'>
                <div className='row'>

                    <div className='col'>
                        {/* Se utiliza el componente link, de React router dom, para crear enlaces al interior de la app*/}
                        {/* Se utiliza bootstrap y sus clases predeterminadas para elegir el botón y
                        las márgenes top - botton (mt-mb) */}
                        <Link to='/products/add/' className='btn btn-dark mt-2 mb-2'>
                        <i className="fa-solid fa-circle-plus"></i>
                        </Link>


                        <div className="table-responsive">
                            <table className="table table-dark table-hover">
                                <thead className='table-light'>
                                    <tr>
                                        <th>Nombre </th>
                                        <th>Tipo</th>
                                        <th>Precio</th>
                                        <th>Para mayores de edad</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* Se utliliza el método 'map' para recorrer cada elemento del array 'clients'
                                y con ello generar una fila en la tabla, para cada cliente*/}
                                    {products.map((product, index) => (

                                        <tr key={index}>
                                            <td>{product.name}</td>
                                            <td>{product.type}</td>
                                            <td>{product.price}</td>
                                            <td>{product.over18 ? "Sí" : "No"}</td>
                                            {/* Se añaden botones en la séptima celda de la fila de la tabla para editar y eliminar el cliente. */}
                                            <td>
                                                {/* Se crea un enlace para editar el cliente, que lleva al usuario a la página de edición del cliente con su ID. */}
                                                <Link to={`/products/edit/${product._id}`} className='btn btn-secondary mt-2 mb-2'>
                                                    <i className="fa-solid fa-pen-to-square"></i>
                                                </Link>
                                                {/* Se añade un botón para eliminar el cliente. */}
                                                <button onClick={() => deleteProdcut(product._id)} className="btn btn-danger">
                                                    <i className="fa-solid fa-trash-can"></i>
                                                </button>
                                            </td>
                                        </tr>

                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div >

        </>
    )
}

export default CompShowProducts; 