import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import CadastroClientes from "../components/CadastroClientes";
import ListagemClientes from "../components/ListagemClientes";
import CadastroServicos from "../components/CadastroServicos";
import ListagemServicos from "../components/ListagemServicos";
import BuscaCep from "../components/BuscaCepFormCliente";

const AppRouter = () => {
    return(
        <BrowserRouter>
          <Routes>
            <Route path="/CadastroClientes" element= {<CadastroClientes />} />
            <Route path="/ListagemClientes" element= {<ListagemClientes />} />
            <Route path="/CadastroServicos" element= {<CadastroServicos />} />
            <Route path="/ListagemServicos" element= {<ListagemServicos />} />
            <Route path="/BuscaCep" element= {<BuscaCep />} />
           </Routes>
        </BrowserRouter>

    );
}
export default AppRouter;