import React from "react";
import '../NavBar/NavBar.css'

const NavBar = () => {
    return (
        <div class="navbar bg-base-100 nav top-10">
            <div class="flex-1 text-white">
                <div class="btn btn-ghost normal-case text-lg">daisyUI</div>
            </div>
            <div class="flex-none pr-5 text-white">
                <div class="btn btn-ghost normal-case text-lg">Home</div>
            </div>
            <div class="flex-none pr-5 text-white">
                <div class="btn btn-ghost normal-case text-lg">Servicios</div>
            </div>
            <div class="flex-none pr-10 text-white">
                <div class="btn btn-ghost normal-case text-lg">Contactos</div>
            </div>

        </div>
    )
}
export default NavBar;