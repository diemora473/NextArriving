import React from "react";
import chicaplanilla from "../Img/chicaplanilla.jpg"
import '../NavBar/NavBar.css'

const Information = () => {
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse ">
                <img src={chicaplanilla} class="w-72 rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold">Mensajería y Logística</h1>
                    <p class="py-6">Somos una empresa de logística y negocios express con años de experiencia en el mercado. Brindamos servicios de logística para todo tipo de tiendas en línea y relacionadas con el comercio electrónico: envío y distribución de productos, entrega puerta a puerta, almacenamiento y cumplimiento.</p>
                    <div class="btn btn-ghost bg-orange-500 normal-case text-lg rounded-full hover:bg-orange-500 text-white ml-96 ">Ver Mas >></div>
                </div>
            </div>
        </div>
    )
}
export default Information;