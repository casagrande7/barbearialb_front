import axios from 'axios';
import React, { Component, useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from "../App.module.css";
import { CadastroAgenda } from '../interfaces/CadastroAgenda';
import Swal from 'sweetalert2';

const ListagemAgenda = () => {
    const [usuarios, setUsuarios] = useState<CadastroAgenda[]>([]);
    const [pesquisa, setPesquisa] = useState<string>('');
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleDelete = (id: number) => {
        Swal.fire({
            title: "Tem Certeza?",
            text: "Você não poderá reverter isso!",
            icon: "warning",
            showCancelButton: true,
            cancelButtonText: "Não Tenho Certeza",
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sim, Tenho Certeza"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deletado!",
                    text: "Agendamento excluído com sucesso",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1000
                });
                axios.delete('http://127.0.0.1:8000/api/deletarAgenda/' + id)
                    .then(function (response) {
                        window.setTimeout(() => {
                            window.location.href = "/Listagem/Agenda";
                        }, 1000);
                    }).catch(function (error) {
                        console.log(error);
                    })
            }
        });
    }

    const handleState = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === "pesquisa") {
            setPesquisa(e.target.value);
        }
    }

    const buscar = (e: FormEvent) => {
        e.preventDefault();

        async function fetchData() {
            try {

                const response = await axios.post('http://127.0.0.1:8000/api/pesquisaHorarios',
                    { data_hora: pesquisa },
                    {
                        headers: {
                            "Accept": "application/json",
                            "Content-Type": "application/json"
                        }
                    }).then(function (response) {
                        if (response.data.status) {

                            setUsuarios(response.data.data);
                        }
                        else {
                            console.log("Erro");
                        }
                    }).catch(function (error) {
                        console.log(error);
                    });


            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/todosAgenda');
                if (response.data.status) {
                    setUsuarios(response.data.data);
                } else {
                    console.log("Erro");
                }
            } catch (error) {
                setError("Ocorreu um erro");
                console.log(error);
            }
        }
        fetchData();
    }, []);
    return (
        <div>
            <main className={styles.main}>
                <div className='container mw-100 w-auto'>
                    <div className='col-md mb-3'>
                        <div className='card'>
                            <div className='card-body'>
                                <h5 className='card-little'>Pesquisar</h5>
                                <form onSubmit={buscar} className='row'>
                                    <div className='col-10'>
                                        <input type="text" name='pesquisa' className='form-control' onChange={handleState} />
                                    </div>
                                    <div className='col-1'>
                                        <button type='submit' className='btn btn-success'>Pesquisar</button>

                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='card-title'>Listagem de Agendamentos</h5>
                            <table className='table table-hover'>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Profissional ID</th>
                                        <th>Data e Horário</th>
                                        <th>Ações</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {usuarios.map(usuario => (
                                        <tr key={usuario.id}>
                                            <td>{usuario.id}</td>
                                            <td>{usuario.profissional_id}</td>
                                            <td>{usuario.data_hora}</td>
                                            <td>
                                                <Link to={"/Editar/Agenda/" + usuario.id} className='btn p-2 m-1 btn-primary btn-sm'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-clipboard2-check" viewBox="0 0 16 16">
                                                    <path d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5z" />
                                                    <path d="M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5z" />
                                                    <path d="M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3Z" />
                                                </svg></Link>
                                                <a href="#" onClick={() => handleDelete(usuario.id)} className='btn p-2 btn-danger btn-sm'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                                                </svg></a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default ListagemAgenda;