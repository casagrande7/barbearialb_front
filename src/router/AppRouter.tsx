import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import CadastroClientes from "../components/CadastroClientes";
import ListagemClientes from "../components/ListagemClientes";
import CadastroServicos from "../components/CadastroServicos";
import ListagemServicos from "../components/ListagemServicos";
import CadastroProfissionais from "../components/CadastroProfissionais";
import ListagemProfissionais from "../components/ListagemProfissionais";
import Editar from "../components/EditarClientes";
import EditarServicos from "../components/EditarServicos";
import EditarClientes from "../components/EditarClientes";
import EditarProfissionais from "../components/EditarProfissionais";

const AppRouter = () => {
    return(
        <BrowserRouter>
          <Routes>
            <Route path="/CadastroClientes" element= {<CadastroClientes />} />
            <Route path="/ListagemClientes" element= {<ListagemClientes />} />
            <Route path="EditarClientes/:id" element= {<EditarClientes />} />
            <Route path="/CadastroServicos" element= {<CadastroServicos />} />
            <Route path="/ListagemServicos" element= {<ListagemServicos />} />
            <Route path="EditarServicos/:id" element= {<EditarServicos />} />
            <Route path="/CadastroProfissionais" element= {<CadastroProfissionais />} />
            <Route path="/ListagemProfissionais" element= {<ListagemProfissionais />} />
            <Route path="EditarProfissionais/:id" element= {<EditarProfissionais />} />
           </Routes>
        </BrowserRouter>

    );
}
export default AppRouter;