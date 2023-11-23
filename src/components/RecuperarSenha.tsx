import React, { Component, useState, ChangeEvent, FormEvent, useEffect } from "react";
import styles from "../App.module.css";
import Header from "./Header";
import FooterAtualizacaoClientes from "./FooterAtualizaçãoClientes";
import { useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const RecuperarSenha = () => {

    const [email, setEmail] = useState<string>("");

    const parametro = useParams();

    const recuperadorSenha = (e: FormEvent) => {
        e.preventDefault();

        const dados = {
            email: email,
        }

        axios.put("http://127.0.0.1:8000/api/recuperarSenha", dados, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        }).then(function (response) {
            if (response.data.status === false) {
                console.log("error");
                console.log(response.data.error);
                Swal.fire({
                    title: "Opsss...",
                    text: "Erro ao atualizar a senha!",
                    icon: "error",
                    showConfirmButton: false,
                    timer: 1500
                });
            } else {
                Swal.fire({
                    title: "Senha Atualizada",
                    text: "Senha redefinida com sucesso",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1000
                });
                 
                window.setTimeout(() => {
                    window.location.href = "/Listagem/Clientes";
                }, 1000);
                
            }
        }).catch(function (error) {
            console.log("Ocorreu um erro ao atualizar");
        });

    }

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get("http://127.0.0.1:8000/api/pesquisa/" + parametro.id)
                if(response.data.status){
                    setEmail(response.data.data.email);
                }
                else{
                    console.log("Erro ao buscar dados da API")  
                }
                
            } catch (error) {
                console.log("Erro ao buscar dados da API")

            }
        }
        fetchData();
    }, []);

    const handleState = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === "email") {
            setEmail(e.target.value);
        }
    }

    return (
        <div>
            <Header />
            <main className={styles.main}>
                <div className='container'>
                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='card-title'>Recuperar Senha</h5>
                            <form onSubmit={recuperadorSenha} className='row g-3'>
                                <div className='col-4'>
                                    <label htmlFor='email' className='form-label'>E-mail</label>
                                    <input type="text" name='email' className='form-control' required onChange={handleState} value={email} />
                                </div>
                                <div className='col-12'>
                                    <button type='submit' className='btn btn-success btn-sn'>Recuperar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>

            <FooterAtualizacaoClientes />
        </div>
    );
}


export default RecuperarSenha;