import React from "react";
import style from "./Footer.module.css"

const Footer = () => {
    return(
        <footer className={style.footer}>
            <p>
                <span>Atualização de Clientes</span> @ SENAI
            </p>
        </footer>
    );
}

export default Footer;