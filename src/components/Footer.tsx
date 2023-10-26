import React from "react";
import style from "./Footer.module.css"

const Footer = () => {
    return(
        <footer className={style.footer}>
            <p>
                <span>Cadastro de Clientes</span> @ SENAI
            </p>
        </footer>
    );
}

export default Footer;