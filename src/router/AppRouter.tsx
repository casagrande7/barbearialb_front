import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import CadastroClientes from "../components/CadastroClientes";
import ListagemClientes from "../components/ListagemClientes";
import CadastroServicos from "../components/CadastroServicos";
import ListagemServicos from "../components/ListagemServicos";
import CadastroProfissionais from "../components/CadastroProfissionais";
import ListagemProfissionais from "../components/ListagemProfissionais";
import EditarServicos from "../components/EditarServicos";
import EditarClientes from "../components/EditarClientes";
import EditarProfissionais from "../components/EditarProfissionais";
import CadastroAgenda from "../components/CadastroAgenda";
import ListagemAgenda from "../components/ListagemAgenda";
import EditarAgenda from "../components/EditarAgenda";
import RecuperarSenha from "../components/RecuperarSenha";

const AppRouter = () => {
    return(
        <BrowserRouter>
          <Routes>
            <Route path="/Cadastro/Clientes" element= {<CadastroClientes />} />
            <Route path="/Listagem/Clientes" element= {<ListagemClientes />} />
            <Route path="/Editar/Clientes/:id" element= {<EditarClientes />} />
            <Route path="/Recuperar/Senha/Clientes/:id" element= {<RecuperarSenha />} />
            <Route path="/Cadastro/Servicos" element= {<CadastroServicos />} />
            <Route path="/Listagem/Servicos" element= {<ListagemServicos />} />
            <Route path="/Editar/Servicos/:id" element= {<EditarServicos />} />
            <Route path="/Cadastro/Profissionais" element= {<CadastroProfissionais />} />
            <Route path="/Listagem/Profissionais" element= {<ListagemProfissionais />} />
            <Route path="/Editar/Profissionais/:id" element= {<EditarProfissionais />} />
            <Route path="/Cadastro/Agenda" element= {<CadastroAgenda />} />
            <Route path="/Listagem/Agenda" element= {<ListagemAgenda />} />
            <Route path="/Editar/Agenda/:id" element= {<EditarAgenda />} />
           </Routes>
        </BrowserRouter>

    );
}
export default AppRouter;