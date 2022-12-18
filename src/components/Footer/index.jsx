import React from "react";
import facebook from "./facebook.svg"
import twitter from "./twitter.svg"
import instagram from "./instagram.svg"
import styles from "./Footer.module.scss";


export default function Footer(){
    return (
        <footer className={styles.rodape}>
            <div className={styles.rodape__icones}>
                <a 
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noreferrer">
                        <img src={facebook} alt="ícone do facebook" />
                </a>
                <a 
                    href="https://www.twitter.com"
                    target="_blank"
                    rel="noreferrer">
                        <img src={twitter} alt="ícone do twitter" />
                </a>
                <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noreferrer">
                        <img src={instagram} alt="ícone do instagram" />
                </a>
            </div>
            <p>Desenvolvido durante a formação <strong>React com JavaScript</strong> da Alura</p>
        </footer>
    )
}