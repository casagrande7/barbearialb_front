import React from "react";
import style from "./Footer.module.css"

const FooterProfissionais = () => {
    return(
        <footer className={style.footer}>
            <p>
                <span>Cadastro de Profissionais</span> @ SENAI
            </p>
        </footer>
    );
}

export default FooterProfissionais;