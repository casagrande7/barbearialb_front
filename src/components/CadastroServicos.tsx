import React, { Component, useState, ChangeEvent, FormEvent, useEffect } from 'react';
import styles from '../App.module.css'
import axios from 'axios';
import FooterServicos from './FooterServicos';
import HeaderServicos from './HeaderServicos';
import Swal from 'sweetalert2';


const CadastroServicos = () => {
    // Use state é para verificar o estado 
    // set significa 
    const [nome, setNome] = useState<string>("");
    const [preco, setPreco] = useState<string>("");
    const [descricao, setDescricao] = useState<string>("");
    const [duracao, setDuracao] = useState<string>("");

    // FormEvent monitora os eventos do formulário
    const CadastrarServicos = (e: FormEvent) => {
        e.preventDefault();

        const dados = {
            nome: nome,
            preco: preco,
            descricao: descricao,
            duracao: duracao
        }

        axios.post('http://127.0.0.1:8000/api/store',
            dados,
            {
                headers: {
                    "Accept": "aplication/json",
                    "Content-Type": "aplication/json"

                }
            }).then(function (response) {
                if (response.data.status === true) {
                    Swal.fire({
                        title: "Cadastro Concluído",
                        text: "Serviço cadastrado com sucesso",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 1000
                    });
                    window.setTimeout(() => {
                        window.location.href = "/Listagem/Servicos";
                    }, 1000);
                } else {
                    console.log("error");
                    console.log(response.data.error);
                    Swal.fire({
                        title: "Opsss...",
                        text: "Erro ao cadastrar o serviço!",
                        icon: "error",
                        showConfirmButton: false,
                        timer: 1000
                    });
                }
            }).catch(function (error) {
                console.log(error);
            });

    }

    const handleState = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === "nome") {
            setNome(e.target.value);
        }
        if (e.target.name === "preco") {
            setPreco(e.target.value);
        }
        if (e.target.name === "descricao") {
            setDescricao(e.target.value);
        }
        if (e.target.name === "duracao") {
            setDuracao(e.target.value);
        }
    }

    return (
        <div>
            <HeaderServicos />
            <main className={styles.main}>
                <div className='container'>
                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='card-title'>Cadastrar Serviços</h5>
                            <form onSubmit={CadastrarServicos} className='row g-3'>
                                <div className='col-6'>
                                    <label htmlFor='nome' className='form-label'>Nome</label>
                                    <input type="text" name='nome' className='form-control' required onChange={handleState} />
                                </div>
                                <div className='col-6'>
                                    <label htmlFor='preco' className='form-label'>Preço</label>
                                    <input type="text" name='preco' className='form-control' required onChange={handleState} />

                                </div>
                                <div className='col-6'>
                                    <label htmlFor='descricao' className='form-label'>Descrição</label>
                                    <input type="text" name='descricao' className='form-control' required onChange={handleState} />

                                </div>
                                <div className='col-6'>
                                    <label htmlFor='duracao' className='form-label'>Duração</label>
                                    <input type="text" name='duracao' className='form-control' required onChange={handleState} />

                                </div>

                                <div className='col-12'>
                                    <button type='submit' className='btn btn-success btn-sn'>Cadastrar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>

            <FooterServicos />
        </div>
    );
}

export default CadastroServicos;