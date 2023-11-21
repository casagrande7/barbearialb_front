import React from "react";
import style from "./Footer.module.css"

const Footer = () => {
    return(
        <footer className={style.footer}>
            <p>
                <span>Atualização da Agenda</span> @ SENAI
            </p>
        </footer>
    );
}

export default Footer;