import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const URL = 'http://localhost:5000/apiClients/clients/';

const CompAddClients = () => {
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
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
            lastname: lastname,
            idCard: idCard,
            email: email,
            phone: phone,
            adress: adress
        })
        navigate('/clients')
    }

    return (
        <div>


        </div>
    )
}

export default CompAddClients;