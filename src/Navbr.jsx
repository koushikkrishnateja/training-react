import React from 'react'
import Logo from './Logo'
import Menu from './Menu'
import Styles from "./navbr.module.css";
const Navbr = ()=>{
    return (
        <section id ={Styles.navBlock}>
            <article>
                <Logo/>
                <Menu/>
            </article>
        </section>
    )
}
export default Navbr