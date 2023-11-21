import React, { Component, useState, ChangeEvent, FormEvent, useEffect } from "react";
import styles from "../App.module.css";
import Header from "./Header";
import FooterAtualizacaoAgenda from "./FooterAtualizaçãoAgenda";
import { useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const EditarAgenda = () => {

    const [id, setId] = useState<number>();
    const [profissional_id, setProfissional_id] = useState<string>("");
    const [data_hora, setData_hora] = useState<string>("");

    const parametro = useParams();

    const atualizarAgenda = (e: FormEvent) => {
        e.preventDefault();

        const dados = {
            id: id,
            profissional_id: profissional_id,
            data_hora: data_hora,
        }

        axios.put("http://127.0.0.1:8000/api/updateAgenda", dados, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        }).then(function (response) {
            if (response.data.status === true) {
                Swal.fire({
                    title: "Cadastro Atualizado",
                    text: "Agenda atualizada com sucesso",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1000
                });
                window.setTimeout(() => {
                    window.location.href = "/Listagem/Agenda";
                }, 1000);
            } else {
                console.log("error");
                console.log(response.data.error);
                Swal.fire({
                    title: "Opsss...",
                    text: "Erro ao atualizar a agenda!",
                    icon: "error",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }).catch(function (error) {
            console.log("Ocorreu um erro ao atualizar");
        });

    }

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get("http://127.0.0.1:8000/api/pesquisaIdAgenda/" + parametro.id)
                setProfissional_id(response.data.data.profissional_id)
                setData_hora(response.data.data.data_hora)
                setId(response.data.data.id)

            } catch (error) {
                console.log("Erro ao buscar dados da API")

            }
        }
        fetchData();
    }, []);

    const handleState = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === "profissional_id") {
            setProfissional_id(e.target.value);
        }
        if (e.target.name === "data_hora") {
            setData_hora(e.target.value);
        }
    }

    return (
        <div>
            <Header />
            <main className={styles.main}>
                <div className='container'>
                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='card-title'>Atualizar Agenda</h5>
                            <form onSubmit={atualizarAgenda} className='row g-3'>
                                <div className='col-6'>
                                    <label htmlFor='profissional_id' className='form-label'>Profissional ID</label>
                                    <input type="text" name='profissional_id' className='form-control' required onChange={handleState} value={profissional_id} />
                                </div>
                                <div className='col-6'>
                                    <label htmlFor='data_hora' className='form-label'>Data e Hora</label>
                                    <input type="datetime-local" name='data_hora' className='form-control' required onChange={handleState} value={data_hora} />

                                </div>
                                <div className='col-12'>
                                    <button type='submit' className='btn btn-success btn-sn'>Atualizar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>

            <FooterAtualizacaoAgenda />
        </div>
    );
}


export default EditarAgenda;