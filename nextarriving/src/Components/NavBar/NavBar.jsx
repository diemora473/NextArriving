import React from "react";
import '../NavBar/NavBar.css'
import 'animate.css';

const NavBar = () => {
    return (
        <div className="relative sticky animate__animated animate__fadeIn">

            <div class="navbar bg-base-100 nav top-0 sticky">
                <div class="flex-1 text-white">
                    <div class="btn btn-ghost normal-case text-lg rounded-full hover:bg-orange-500">daisyUI</div>
                </div>
                <div class="flex-none pr-5 text-white">
                    <div class="btn btn-ghost normal-case text-lg hover:bg-orange-500 rounded-full ">Home</div>
                </div>
                <div class="flex-none pr-5 text-white">
                    <a href="#Mensajeria">

                    <div class="btn btn-ghost normal-case text-lg rounded-full  hover:bg-orange-500">Servicios</div>
                    </a>
                </div>
                <div class="flex-none pr-10 text-white">
                    <div class="btn btn-ghost normal-case text-lg rounded-full  hover:bg-orange-500">Contactos</div>
                </div>
            </div>

        </div>
    )
}
export default NavBar;