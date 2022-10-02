import React from "react";
import { Link } from "react-router-dom";
import paquete from "../Img/paquete.jpeg";
const InfoZone = () => {
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse ">
                <div>
                    <h1 class="text-5xl font-bold">Mensajería y Logística</h1>
                    <p class="py-6">Somos una empresa de logística y negocios express con años de experiencia en el mercado. Brindamos servicios de logística para todo tipo de tiendas en línea y relacionadas con el comercio electrónico: envío y distribución de productos, entrega puerta a puerta, almacenamiento y cumplimiento.</p>
                    <Link to='/NextArriving/Zone'>
                        <div class="btn btn-ghost bg-orange-500 normal-case text-lg rounded-full hover:bg-orange-500 text-white mr-2x1 ">Ver Mas >></div>
                    </Link>
                </div>
                <img src={paquete} class="w-72 rounded-lg shadow-2xl" />
            </div>
        </div>
    )
}
export default InfoZone;