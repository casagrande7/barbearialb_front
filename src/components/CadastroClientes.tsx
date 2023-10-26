import React, { Component, useState, ChangeEvent, FormEvent, useEffect } from 'react';
import Footer from './Footer';
import Header from './Header';
import styles from '../App.module.css'
import axios from 'axios';


const CadastroClientes = () => {
    // Use state é para verificar o estado 
    // set significa 
    const [nome, setNome] = useState<string>("");
    const [celular, setCelular] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [cpf, setCpf] = useState<string>("");
    const [dataNascimento, setDataNascimento] = useState<string>("");
    const [cidade, setCidade] = useState<string>("");
    const [estado, setEstado] = useState<string>("");
    const [pais, setPais] = useState<string>("");
    const [rua, setRua] = useState<string>("");
    const [numero, setNumero] = useState<string>("");
    const [bairro, setBairro] = useState<string>("");
    const [cep, setCep] = useState<string>("");
    const [complemento, setComplemento] = useState<string>("");
    const [senha, setSenha] = useState<string>("");
    // FormEvent monitora os eventos do formulário
    const CadastrarClientes = (e: FormEvent) => {
        e.preventDefault();

        const dados = {
            nome: nome,
            celular: celular,
            email: email,
            cpf: cpf,
            dataNascimento: dataNascimento,
            cidade: cidade,
            estado: estado,
            pais: pais,
            rua: rua,
            numero: numero,
            bairro: bairro,
            cep: cep,
            complemento: complemento,
            senha: senha

        }

        axios.post('http://127.0.0.1:8000/api/registro',
            dados,
            {
                headers: {
                    "Accept": "aplication/json",
                    "Content-Type": "aplication/json"

                }
            }).then(function (response) {
                if (response.data.sucess = false) {
                    console.log("error");
                    console.log(response.data.error);
                } else {
                    window.location.href = "/ListagemClientes"
                }
            }).catch(function (error) {
                console.log(error);
            });

    }

    const handleState = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === "nome") {
            setNome(e.target.value);
        }
        if (e.target.name === "celular") {
            setCelular(e.target.value);
        }
        if (e.target.name === "email") {
            setEmail(e.target.value);
        }
        if (e.target.name === "cpf") {
            setCpf(e.target.value);
        }
        if (e.target.name === "dataNascimento") {
            setDataNascimento(e.target.value);
        }
        if (e.target.name === "cidade") {
            setCidade(e.target.value);
        }
        if (e.target.name === "estado") {
            setEstado(e.target.value);
        }
        if (e.target.name === "pais") {
            setPais(e.target.value);
        }
        if (e.target.name === "rua") {
            setRua(e.target.value);
        }
        if (e.target.name === "numero") {
            setNumero(e.target.value);
        }
        if (e.target.name === "bairro") {
            setBairro(e.target.value);
        }
        if (e.target.name === "cep") {
            setCep(e.target.value);
        }
        if (e.target.name === "complemento") {
            setComplemento(e.target.value);
        }
        if (e.target.name === "senha") {
            setSenha(e.target.value);
        }


    }

    return (
        <div>
            <Header />
            <main className={styles.main}>
                <div className='container'>
                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='card-title'>Cadastrar Clientes</h5>
                            <form onSubmit={CadastrarClientes} className='row g-3'>
                                <div className='col-6'>
                                    <label htmlFor='nome' className='form-label'>Nome</label>
                                    <input type="text" name='nome' className='form-conrtrol' required onChange={handleState} />
                                </div>
                                <div className='col-6'>
                                    <label htmlFor='celular' className='form-label'>Celular</label>
                                    <input type="text" name='celular' className='form-conrtrol' required onChange={handleState} />

                                </div>
                                <div className='col-4'>
                                    <label htmlFor='email' className='form-label'>E-mail</label>
                                    <input type="text" name='email' className='form-conrtrol' required onChange={handleState} />

                                </div>
                                <div className='col-4'>
                                    <label htmlFor='cpf' className='form-label'>CPF</label>
                                    <input type="text" name='cpf' className='form-conrtrol' required onChange={handleState} />

                                </div>
                                <div className='col-4'>
                                    <label htmlFor='dataNascimento' className='form-label'>Data de Nascimento</label>
                                    <input type="date" name='dataNascimento' className='form-conrtrol' required onChange={handleState} />

                                </div>
                                <div className='col-4'>
                                    <label htmlFor='cidade' className='form-label'>Cidade</label>
                                    <input type="text" name='cidade' className='form-conrtrol' required onChange={handleState} />

                                </div>
                                <div className='col-4'>
                                    <label htmlFor='estado' className='form-label'>Estado</label>
                                    <input type="text" name='estado' className='form-conrtrol' required onChange={handleState} />

                                </div>
                                <div className='col-4'>
                                    <label htmlFor='pais' className='form-label'>País</label>
                                    <input type="text" name='pais' className='form-conrtrol' required onChange={handleState} />

                                </div>
                                <div className='col-4'>
                                    <label htmlFor='rua' className='form-label'>Rua</label>
                                    <input type="text" name='rua' className='form-conrtrol' required onChange={handleState} />

                                </div>
                                <div className='col-4'>
                                    <label htmlFor='numero' className='form-label'>Número</label>
                                    <input type="text" name='numero' className='form-conrtrol' required onChange={handleState} />

                                </div>
                                <div className='col-4'>
                                    <label htmlFor='bairro' className='form-label'>Bairro</label>
                                    <input type="text" name='bairro' className='form-conrtrol' required onChange={handleState} />

                                </div>
                                <div className='col-4'>
                                    <label htmlFor='cep' className='form-label'>CEP</label>
                                    <input type="text" name='cep' className='form-conrtrol' required onChange={handleState} />

                                </div>
                                <div className='col-4'>
                                    <label htmlFor='complemento' className='form-label'>Complemento</label>
                                    <input type="text" name='complemento' className='form-conrtrol' required onChange={handleState} />

                                </div>
                                <div className='col-4'>
                                    <label htmlFor='senha' className='form-label'>Senha</label>
                                    <input type="password" name='senha' className='form-conrtrol' required onChange={handleState} />

                                </div>
                                <div className='col-12'>
                                    <button type='submit' className='btn btn-success btn-sn'>Cadastrar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default CadastroClientes;