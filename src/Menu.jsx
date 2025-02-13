import React from 'raect'
import Styles from "./navbar.module.css";
const Logo = ()=>{
    return (
        <div className={Styles.menuBlock}>
            <ul>
                <li><a href="">Dashboard</a></li>
                
                <li><a href="">Classrooms</a></li>
                <li><a href="">Assements</a></li>
                <li><a href="">Store</a></li>
                <li><a href="">Calender</a></li>
                <li><a href="">News</a></li>
                <li><a href="">Blog</a></li>
            </ul>
        </div>
    )
}
export default Menu