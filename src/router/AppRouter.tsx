import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import CadastroClientes from "../components/CadastroClientes";
import ListagemClientes from "../components/ListagemClientes";

const AppRouter = () => {
    return(
        <BrowserRouter>
          <Routes>
            <Route path="/CadastroClientes" element= {<CadastroClientes />} />
            <Route path="/ListagemClientes" element= {<ListagemClientes />} />
           </Routes>
        </BrowserRouter>

    );
}
export default AppRouter;