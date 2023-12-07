import React, { Component, useState, ChangeEvent, FormEvent, useEffect } from "react";
import styles from "../App.module.css";
import Header from "./Header";
import FooterAtualizacaoClientes from "./FooterAtualizaçãoClientes";
import { useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const EditarClientes = () => {

    const [id, setId] = useState<number>();
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
    const [pesquisa, setPesquisa] = useState<string>("")
    const [nomeErro, setNomeErro] = useState<string>("");
    const [celularErro, setCelularErro] = useState<string>("");
    const [emailErro, setEmailErro] = useState<string>("");
    const [cpfErro, setCpfErro] = useState<string>("");
    const [dataNascimentoErro, setDataNascimentoErro] = useState<string>("");
    const [cidadeErro, setCidadeErro] = useState<string>("");
    const [estadoErro, setEstadoErro] = useState<string>("");
    const [paisErro, setPaisErro] = useState<string>("");
    const [ruaErro, setRuaErro] = useState<string>("");
    const [numeroErro, setNumeroErro] = useState<string>("");
    const [bairroErro, setBairroErro] = useState<string>("");
    const [cepErro, setCepErro] = useState<string>("");
    const [complementoErro, setComplementoErro] = useState<string>("");
    const [senhaErro, setSenhaErro] = useState<string>("");

    const parametro = useParams();

    const atualizarClientes = (e: FormEvent) => {
        setNomeErro("")
        setCelularErro("")
        setEmailErro("")
        setCpfErro("")
        setDataNascimentoErro("")
        setCidadeErro("")
        setEstadoErro("")
        setPaisErro("")
        setRuaErro("")
        setNumeroErro("")
        setBairroErro("")
        setCepErro("")
        setComplementoErro("")
        setSenhaErro("")

        e.preventDefault();

        const dados = {
            id: id,
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
            senha: senha,
            pesquisa: pesquisa
        }

        axios.put("http://127.0.0.1:8000/api/cliente/atualizar", dados, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        }).then(function (response) {
            if (response.data.success === false) {
                if ('nome' in response.data.error) {
                    setNomeErro(response.data.error.nome[0])
                }
                if ('celular' in response.data.error) {
                    setCelularErro(response.data.error.celular[0])
                }
                if ('email' in response.data.error) {
                    setEmailErro(response.data.error.email[0])
                }
                if ('cpf' in response.data.error) {
                    setCpfErro(response.data.error.cpf[0])
                }
                if ('dataNascimento' in response.data.error) {
                    setDataNascimentoErro(response.data.error.dataNascimento[0])
                }
                if ('cidade' in response.data.error) {
                    setCidadeErro(response.data.error.cidade[0])
                }
                if ('estado' in response.data.error) {
                    setEstadoErro(response.data.error.estado[0])
                }
                if ('pais' in response.data.error) {
                    setPaisErro(response.data.error.pais[0])
                }
                if ('rua' in response.data.error) {
                    setRuaErro(response.data.error.rua[0])
                }
                if ('numero' in response.data.error) {
                    setNumeroErro(response.data.error.numero[0])
                }
                if ('bairro' in response.data.error) {
                    setBairroErro(response.data.error.bairro[0])
                }
                if ('cep' in response.data.error) {
                    setCepErro(response.data.error.cep[0])
                }
                if ('complemento' in response.data.error) {
                    setComplementoErro(response.data.error.complemento[0])
                }
                if ('senha' in response.data.error) {
                    setSenhaErro(response.data.error.senha[0])
                }
            }
            if (response.data.status === true) {
                Swal.fire({
                    title: "Cadastro Atualizado",
                    text: "Cliente atualizado com sucesso",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1000
                });
                window.setTimeout(() => {
                    window.location.href = "/Listagem/Clientes";
                }, 1000);
            } else {
                console.log("error");
                console.log(response.data.error);
                Swal.fire({
                    title: "Opsss...",
                    text: "Erro ao atualizar o cliente!",
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
                const response = await axios.get("http://127.0.0.1:8000/api/pesquisa/" + parametro.id)
                setNome(response.data.data.nome);
                setCelular(response.data.data.celular);
                setEmail(response.data.data.email);
                setCpf(response.data.data.cpf);
                setDataNascimento(response.data.data.dataNascimento);
                setCidade(response.data.data.cidade);
                setEstado(response.data.data.estado);
                setPais(response.data.data.pais);
                setRua(response.data.data.rua);
                setNumero(response.data.data.numero);
                setBairro(response.data.data.bairro);
                setCep(response.data.data.cep);
                setComplemento(response.data.data.complemento);
                setSenha(response.data.data.senha);
                setId(response.data.data.id)

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

    const findCep = (e: FormEvent) => {
        e.preventDefault()

        fetch('https://viacep.com.br/ws/' + cep + '/json/', {

            method: 'GET'

        }).then(response => response.json())
            .then(
                data => {
                    setCidade(data.localidade);
                    setPesquisa(data.cep);
                    setEstado(data.uf);

                }).catch(error => {

                });
    }

    return (
        <div>
            <Header />
            <main className={styles.main}>
                <div className='container'>
                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='card-title'>Atualizar Clientes</h5>
                            <form onSubmit={atualizarClientes} className='row g-3'>
                                <div className='col-6'>
                                    <label htmlFor='nome' className='form-label'>Nome</label>
                                    <input type="text" name='nome' className='form-control' required onChange={handleState} />
                                    <div className='text-danger'>{nomeErro}</div>
                                </div>
                                <div className='col-6'>
                                    <label htmlFor='celular' className='form-label'>Celular</label>
                                    <input type="tel" name='celular' className='form-control' required onChange={handleState} />
                                    <div className='text-danger'>{celularErro}</div>

                                </div>
                                <div className='col-4'>
                                    <label htmlFor='email' className='form-label'>E-mail</label>
                                    <input type="text" name='email' className='form-control' required onChange={handleState} />
                                    <div className='text-danger'>{emailErro}</div>

                                </div>
                                <div className='col-4'>
                                    <label htmlFor='cpf' className='form-label'>CPF</label>
                                    <input type="text" name='cpf' className='form-control' required onChange={handleState} />
                                    <div className='text-danger'>{cpfErro}</div>

                                </div>
                                <div className='col-4'>
                                    <label htmlFor='dataNascimento' className='form-label'>Data de Nascimento</label>
                                    <input type="date" name='dataNascimento' className='form-control' required onChange={handleState} />
                                    <div className='text-danger'>{dataNascimentoErro}</div>

                                </div>
                                <div className='col-4'>
                                    <label htmlFor='cep' className='form-label'>CEP</label>
                                    <input type="text" name='cep' className='form-control' required onBlur={findCep} onChange={handleState} />
                                    <div className='text-danger'>{cepErro}</div>

                                </div>
                                <div className='col-4'>
                                    <label htmlFor='cidade' className='form-label'>Cidade</label>
                                    <input type="text" value={cidade} name='cidade' className='form-control' required onChange={handleState} />
                                    <div className='text-danger'>{cidadeErro}</div>

                                </div>
                                <div className='col-4'>
                                    <label htmlFor='estado' className='form-label'>Estado</label>
                                    <input type="text" name='estado' value={estado} className='form-control' required onChange={handleState} />
                                    <div className='text-danger'>{estadoErro}</div>

                                </div>
                                <div className='col-4'>
                                    <label htmlFor='pais' className='form-label'>País</label>
                                    <input type="text" name='pais' className='form-control' required onChange={handleState} />
                                    <div className='text-danger'>{paisErro}</div>

                                </div>
                                <div className='col-4'>
                                    <label htmlFor='rua' className='form-label'>Rua</label>
                                    <input type="text" name='rua' className='form-control' required onChange={handleState} />
                                    <div className='text-danger'>{ruaErro}</div>

                                </div>
                                <div className='col-4'>
                                    <label htmlFor='numero' className='form-label'>Número</label>
                                    <input type="text" name='numero' className='form-control' required onChange={handleState} />
                                    <div className='text-danger'>{numeroErro}</div>

                                </div>
                                <div className='col-4'>
                                    <label htmlFor='bairro' className='form-label'>Bairro</label>
                                    <input type="text" name='bairro' className='form-control' required onChange={handleState} />
                                    <div className='text-danger'>{bairroErro}</div>

                                </div>
                                <div className='col-4'>
                                    <label htmlFor='complemento' className='form-label'>Complemento</label>
                                    <input type="text" name='complemento' className='form-control' required onChange={handleState} />
                                    <div className='text-danger'>{complementoErro}</div>

                                </div>
                                <div className='col-4'>
                                    <label htmlFor='senha' className='form-label'>Senha</label>
                                    <input type="password" name='senha' className='form-control' required onChange={handleState} />
                                    <div className='text-danger'>{senhaErro}</div>

                                </div>
                                <div className='col-12'>
                                    <button type='submit' className='btn btn-success btn-sn'>Atualizar</button>
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


export default EditarClientes;