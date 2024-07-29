import styles from './header.module.css';
import { FaBars, FaBeer } from "react-icons/fa";


const Header = () => {

    return (
        <div className={styles.header_area}>
            <header className={styles.header_section}>
                <div>
                    <span className={styles.brand_name}>Peak Nutrition Health & Wellness</span>

                </div>
                <div>
                    <ul className={styles.list_items}>

                        <li>
                            <a className={styles.single_item} href='/Home'>Home</a>
                        </li>
                        <li >
                            <a className={styles.single_item} href='/Services'>Services</a>
                        </li>
                        <li>
                            <a className={styles.single_item} href='/About'>About</a>
                        </li>
                        <li>
                            <a className={styles.single_item} href='/Contact'>Contact Us</a>
                        </li>

                        <a href="#" className={styles.icon} >
                            <FaBars />


                        </a>

                    </ul>

                </div>







            </header >


        </div >

    )
}

export default Header;  