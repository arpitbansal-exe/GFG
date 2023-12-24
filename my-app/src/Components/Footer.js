import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Assets/Logo.png'

export default function Footer() {
    return (
        <footer className="footer w-full p-10 bg-neutral text-neutral-content bottom-0 ">
            <aside>
                <img width="50" height="50" src={logo} alt='GFG MIT ADT'></img>
                <p>GeeksforGeeks SC MIT-ADT<br />Empowering students</p>
            </aside>
            <nav>
                <header className="footer-title">Connect with us</header>
                <div className="grid grid-flow-col gap-4">
                    <Link to="https://www.instagram.com/gfg_mitadt/" target='_blank'><img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg" width="24" height="24" alt='@gfg_mitadt'></img> </Link>
                    <Link to="https://www.linkedin.com/company/geeksforgeeks-mitadt-student-chapter" target='_blank'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1200px-LinkedIn_icon.svg.png" width="24" height="24" alt='geeksforgeeks-mitadt-student-chapter'></img> </Link>
                    <Link to="https://chat.whatsapp.com/HkHoCm9Rfv6Cxgt4MOtm5K" target='_blank'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png" width="24" height="24" alt="wp community"></img> </Link>
                
                </div>
            </nav>
        </footer>
    )
}
