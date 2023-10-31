import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import CadastroClientes from "../components/CadastroClientes";
import ListagemClientes from "../components/ListagemClientes";
import CadastroServicos from "../components/CadastroServicos";
import ListagemServicos from "../components/ListagemServicos";
import CadastroProfissionais from "../components/CadastroProfissionais";
import ListagemProfissionais from "../components/ListagemProfissionais";

const AppRouter = () => {
    return(
        <BrowserRouter>
          <Routes>
            <Route path="/CadastroClientes" element= {<CadastroClientes />} />
            <Route path="/ListagemClientes" element= {<ListagemClientes />} />
            <Route path="/CadastroServicos" element= {<CadastroServicos />} />
            <Route path="/ListagemServicos" element= {<ListagemServicos />} />
            <Route path="/CadastroProfissionais" element= {<CadastroProfissionais />} />
            <Route path="/ListagemProfissionais" element= {<ListagemProfissionais />} />
           </Routes>
        </BrowserRouter>

    );
}
export default AppRouter;