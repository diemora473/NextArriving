import React from "react";
import chicaplanilla from "../Img/chicaplanilla.jpg"
import '../NavBar/NavBar.css';
import 'animate.css';

const Mensajeria = () => {
    return (
        <div id="Mensajeria" class="hero  bg-base-200 pt-20 pb-20">
            <div class="hero-content flex-col lg:flex-row-reverse animate__animated animate__fadeIn ">
                <img src={chicaplanilla} class="w-72 rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold">Mensajería y Logística</h1>
                    <p class="py-6">Somos una empresa de logística y mensajería. Ofrecemos servicios de logística para todo tipo de tiendas online. Con entregas puerta a puerta, aseguramos que sus productos lleguen donde se necesitan siguiendo una estrategia de cumplimiento estricta y cuidadosa, brindando así soluciones completas para su negocio. Nuestra misión es ayudar a todos los empresarios y comerciantes que lo necesiten, aportando valor a su negocio y, sobre todo, mejorando la experiencia de compra de los consumidores.</p>
                    <a href="/NextArriving/AboutUs">

                    <div class="btn btn-ghost bg-green-700 normal-case text-lg rounded-full hover:bg-green-800 text-white  ">Ver Mas >></div>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Mensajeria;