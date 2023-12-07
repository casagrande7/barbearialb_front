import React, { Component, useState, ChangeEvent, FormEvent, useEffect } from 'react';
import FooterAgenda from './FooterAgenda';
import Header from './Header';
import styles from '../App.module.css'
import axios from 'axios';
import Swal from 'sweetalert2';

const CadastroAgenda = () => {
    // Use state é para verificar o estado 
    // set significa 
    const [profissional_id, setProfissional_id] = useState<string>("");
    const [data_hora, setData_hora] = useState<string>("");
    const [profissional_idErro, setProfissional_idErro] = useState<string>("");
    const [data_horaErro, setData_horaErro] = useState<string>("")

    // FormEvent monitora os eventos do formulário
    const CadastrarAgenda = (e: FormEvent) => {
        setData_horaErro("")
        setProfissional_idErro("")

        e.preventDefault();

        const dados = {
            profissional_id: profissional_id,
            data_hora: data_hora
        }

        axios.post('http://127.0.0.1:8000/api/criarAgendaProfissional',
            dados,
            {
                headers: {
                    "Accept": "aplication/json",
                    "Content-Type": "aplication/json"
                }
            }).then(function (response) {
                if (response.data.status === false) {
                    if('profissional_id' in response.data.error){
                        setProfissional_idErro(response.data.error.profissional_id[0])
                    }
                    if('data_hora' in response.data.error){
                        setData_horaErro(response.data.error.data_hora[0])
                    }
                    Swal.fire({
                        title: "Opsss...",
                        text: "Erro ao cadastrar o agendamento!",
                        icon: "error",
                        showConfirmButton: false,
                        timer: 1000
                    });
                    console.log("error");
                    console.log(response.data.error);
                } else {
                    Swal.fire({
                        title: "Cadastro Concluído",
                        text: "Agendamento cadastrado com sucesso",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 1000
                    });
                    window.setTimeout(() => {
                        window.location.href = "/Listagem/Agenda";
                    }, 1000);
                }
            }).catch(function (error) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "ID do profissional não existente",
                    showConfirmButton: false,
                    timer: 1000
                  });
                console.log(error);
            });

    }

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
                            <h5 className='card-title'>Cadastrar Agendamento</h5>
                            <form onSubmit={CadastrarAgenda} className='row g-3'>
                                <div className='col-6'>
                                    <label htmlFor='profissional_id' className='form-label'>Profissional ID</label>
                                    <input type="text" name='profissional_id' className='form-control' required onChange={handleState} />
                                    <div className='text-danger'>{profissional_idErro}</div>
                                </div>
                                <div className='col-6'>
                                    <label htmlFor='profissional_id' className='form-label'>Data e Horário</label>
                                    <input type="datetime-local" name='data_hora' className='form-control' required onChange={handleState} />
                                    <div className='text-danger'>{data_horaErro}</div>
                                </div>
                                <div className='col-12'>
                                    <button type='submit' className='btn btn-success btn-sn'>Cadastrar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>

            <FooterAgenda />
        </div>
    );
}

export default CadastroAgenda;