import React from "react";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Container,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Stack,
    Heading,
    Text
  } from '@chakra-ui/react'

  import logo2 from '../../../Img/logo2.png'
const HeaderQuestions = () => {
    return(

        <div className="relative bg-base-200 animate__animated animate__fadeIn pt-10">
<div className="font-normal text-xl flex justify-center pt-20 pb-5 ">
Preguntas frecuentes
<div className="lg:pl-80 lg:ml-96 pl-20">
  <a href="/">

<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-left" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="5" y1="12" x2="19" y2="12" />
  <line x1="5" y1="12" x2="11" y2="18" />
  <line x1="5" y1="12" x2="11" y2="6" />
</svg>
  </a>
</div>
</div>
        <div className="overflow-y-auto flex items-center justify-center pb-10  "  > 

<div className=" md:w-1/2 w-80">
        <table className="table lg:w-full md:w-56 rounded-lg bg-border-black flex items-center bg-white divide-y ">
         
          <div class="collapse collapse-arrow hover:bg-base-200">
  <input type="checkbox" /> 
  <div class="collapse-title text-xl font-medium  ">
    Mi pedido no fue entregado
  </div>
  <div class="collapse-content w"> 
    <p>En caso de que tu pedido no haya sido entregado, te avisamos, y lo pasamos para el otro dia, esto normalmente para cuando llegamos al domicilio y no hay nadie, o no encontramos la numeracion!.</p>
  </div>
</div>
          <div class="collapse collapse-arrow hover:bg-base-200">
  <input type="checkbox" /> 
  <div class="collapse-title text-xl font-medium">
    ¿Que envios hacen?
  </div>
  <div class="collapse-content"> 
    <p>Nos manejamos con envios particulares, ya sea que vendas por Instagram, u otras redes sociales. Y tambien nos manejamos con Mercado Flex.</p>
  </div>
</div>
          <div class="collapse collapse-arrow hover:bg-base-200">
  <input type="checkbox" /> 
  <div class="collapse-title text-xl font-medium">
    ¿Cuanto tarda en llegar?
  </div>
  <div class="collapse-content"> 
    <p>Normalmente los envios se entregan en las 24 horas despues de haberse retirado.</p>
  </div>
</div>
          <div class="collapse collapse-arrow hover:bg-base-200">
  <input type="checkbox" /> 
  <div class="collapse-title text-xl font-medium">
    ¿Que dias trabajan?
  </div>
  <div class="collapse-content"> 
    <p>Trabajamos de Lunes a Sabados, en un rango horario aproximadamente desde las 9 am hasta las 21 pm.</p>
  </div>
</div>
          <div class="collapse collapse-arrow hover:bg-base-200">
  <input type="checkbox" /> 
  <div class="collapse-title text-xl font-medium">
    ¿ContraPago?
  </div>
  <div class="collapse-content"> 
    <p>Te ofrecemos el servicio de ContraPago, que es eso? basicamente le das la opcion al cliente de pagar el producto cuando se realiza la entrega, para eso, nos avisas con anterioridad, para que sepamos cuanto tenemos que cobrar, y al otro dia te llevamos el efectivo del pedido!</p>
  </div>
</div>
          <div class="collapse collapse-arrow hover:bg-base-200">
  <input type="checkbox" /> 
  <div class="collapse-title text-xl font-medium">
    ¿Como los contacto?
  </div>
  <div class="collapse-content"> 
    <p>Nos podes contactar mendiante el numero de Whatsapp, mediante Instagram o mediante un email, respondemos mediante todas las vias!</p>
  </div>
</div>
          <div class="collapse collapse-arrow hover:bg-base-200">
  <input type="checkbox" /> 
  <div class="collapse-title text-xl font-medium">
    Se perdio un paquete
  </div>
  <div class="collapse-content"> 
    <p>En caso de que se llegue a perder algun pedido, nosotros nos hacemos cargo del producto, y te damos lo correspondiente al producto!.</p>
  </div>
</div>
          <div class="collapse collapse-arrow hover:bg-base-200">
  <input type="checkbox" /> 
  <div class="collapse-title text-xl font-medium">
    ¿Hay cantidad minima?
  </div>
  <div class="collapse-content"> 
    <p>No, no tenes que tener una cantidad minima de pedidos para contratar nuestros servicios!.</p>
  </div>
</div>
          <div class="collapse collapse-arrow hover:bg-base-200">
  <input type="checkbox" /> 
  <div class="collapse-title text-xl font-medium">
    ¿Como les doy los pedidos?
  </div>
  <div class="collapse-content"> 
    <p>Nos avisas un dia antes via Whatsapp, y coordinamos un horario para poder pasar a retirarlos en la direccion que nos hayas dicho, ya sea tu local o tu domicilio, !No te preocupes!</p>
  </div>
</div>
          <div class="collapse collapse-arrow hover:bg-base-200">
  <input type="checkbox" /> 
  <div class="collapse-title text-xl font-medium">
    ¿En que horario retiran?
  </div>
  <div class="collapse-content"> 
    <p>Normalmente retiramos los pedidos cerca del mediodia, pero se puede arreglar algun otro horario!</p>
  </div>
</div>
          
        </table>
</div>

        </div>
      </div>
    )
}

export default HeaderQuestions;