import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";

import styles from "../App.module.css"
import Footer from "./Footer";
import Header from "./Header";

const BuscaCep = () => {

    const [cep, setCep] = useState<string>("");
    const [estado, setEstado] = useState<string>("");
    const [cidade, setCidade] = useState<string>("");
    const [pais, setPais] = useState<string>("");
    const [erro, setErro] = useState<string>("");

    const findCep = (e: FormEvent) => {
        e.preventDefault()

        fetch('https://viacep.com.br/ws/' + cep + '/json/', {

            method: 'GET'

        }).then(response => response.json())
            .then(
                data => {
                    setCidade(data.cidade);
                    setCep(data.cep);
                    setEstado(data.estado);
                    setPais(data.pais);
                    setErro("")
                }).catch(error => { setErro("Pesquisa Inválida") });
    }



    const submitForm = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === "cep") {
            setCep(e.target.value);
        }
    }



    return (
        <div>
            <Header />
            <main className={styles.main}>
                <form onSubmit={findCep}>
                    <label htmlFor="cep">CEP</label>
                    <input type="text" name="cep" id="cep" onChange={submitForm} />
                    <input type="submit" value="Pesquisar" />
                </form>
                <p>Cidade: {cidade}</p>
                <p>País: {pais}</p>
                <p>Estado: {estado}</p>
                <p>CEP: {cep}</p>
                <p className={styles.error}>{erro}</p>
            </main>
            <Footer />
        </div>
    );
}

export default BuscaCep;