import React, { Component, useState, ChangeEvent, FormEvent, useEffect } from "react";
import styles from "../App.module.css";
import Header from "./Header";
import FooterAtualizacaoServicos from "./FooterAtualizaçãoServicos";
import { useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const EditarServicos = () => {

    const [id, setId] = useState<number>();
    const [nome, setNome] = useState<string>("");
    const [preco, setPreco] = useState<string>("");
    const [descricao, setDescricao] = useState<string>("");
    const [duracao, setDuracao] = useState<string>("");
    const [nomeErro, setNomeErro] = useState<string>("")
    const [precoErro, setPrecoErro] = useState<string>("")
    const [descricaoErro, setDescricaoErro] = useState<string>("")
    const [duracaoErro, setDuracaoErro] = useState<string>("")


    const parametro = useParams();

    const atualizarServicos = (e: FormEvent) => {
        setNomeErro("")
        setDescricaoErro("")
        setDuracaoErro("")
        setPrecoErro("")

        e.preventDefault();

        const dados = {
            id: id,
            nome: nome,
            preco: preco,
            descricao: descricao,
            duracao: duracao


        }

        axios.put("http://127.0.0.1:8000/api/atualizar", dados, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        }).then(function (response) {
            if (response.data.success === false) {
                if ('nome' in response.data.error) {
                    setNomeErro(response.data.error.nome[0])
                }
                if ('descricao' in response.data.error) {
                    setDescricaoErro(response.data.error.descricao[0])
                }
                if ('duracao' in response.data.error) {
                    setDuracaoErro(response.data.error.duracao[0])
                }
                if ('preco' in response.data.error) {
                    setPrecoErro(response.data.error.preco[0])
                }
            }
            if (response.data.status === true) {
                Swal.fire({
                    title: "Cadastro Atualizado",
                    text: "Serviços atualizado com sucesso",
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
                    text: "Erro ao atualizar o profissional!",
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
                const response = await axios.get("http://127.0.0.1:8000/api/find/" + parametro.id)
                setNome(response.data.data.nome);
                setPreco(response.data.data.preco);
                setDescricao(response.data.data.descricao);
                setDuracao(response.data.data.duracao);
                setId(response.data.data.id);

            } catch (error) {
                console.log("Erro ao buscar dados da API")

            }
        }
        fetchData();
    }, []);

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
            <Header />
            <main className={styles.main}>
                <div className='container'>
                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='card-title'>Atualizar Serviços</h5>
                            <form onSubmit={atualizarServicos} className='row g-3'>
                                <div className='col-6'>
                                    <label htmlFor='nome' className='form-label'>Nome</label>
                                    <input type="text" name='nome' className='form-control' value= {nome} required onChange={handleState} />
                                    <div className='text-danger'>{nomeErro}</div>
                                </div>
                                <div className='col-6'>
                                    <label htmlFor='preco' className='form-label'>Preço</label>
                                    <input type="text" name='preco' className='form-control'  value= {preco}required onChange={handleState} />
                                    <div className='text-danger'>{precoErro}</div>

                                </div>
                                <div className='col-6'>
                                    <label htmlFor='descricao' className='form-label'>Descrição</label>
                                    <input type="text" name='descricao' className='form-control'  value= {descricao}required onChange={handleState} />
                                    <div className='text-danger'>{descricaoErro}</div>

                                </div>
                                <div className='col-6'>
                                    <label htmlFor='duracao' className='form-label'>Duração</label>
                                    <input type="text" name='duracao' className='form-control'  value= {duracao}required onChange={handleState} />
                                    <div className='text-danger'>{duracaoErro}</div>

                                </div>

                                <div className='col-12'>
                                    <button type='submit' className='btn btn-success btn-sn'>Atualizar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>

            <FooterAtualizacaoServicos />
        </div>
    );
}


export default EditarServicos;