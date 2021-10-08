import React from "react";
import axios from "axios";

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const newContactData = {
            nome: e.target.name.value,
            telefone: e.target.phone.value,
            email: e.target.email.value,
        };
        axios.post("/api/contact", newContactData).then((response) => {
            alert("Contato enviado! Aguarde que entraremos em contato.");
            window.location.reload();
        });
    };
    return (
        <>
            <p>Deixe seus dados que entrarei em contato.</p>
            <form onSubmit={handleSubmit}>
                <label for='name'>Nome:</label>
                <input type='text' id='name' name='name' />
                <br />
                <label for='phone'>Telefone:</label>
                <input type='text' id='phone' name='phone' /> <br />
                <label for='email'>Email:</label>
                <input type='text' id='email' name='email' /> <br />
                <button type='submit'>Enviar</button>
            </form>
        </>
    );
};

export default Contact;
