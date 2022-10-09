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

        <div className="bg-base-200">
<div className="font-normal text-xl flex justify-center pt-5 pb-5 ">
Preguntas frecuentes
<div className="lg:pl-80 lg:ml-96">
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-left" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="5" y1="12" x2="19" y2="12" />
  <line x1="5" y1="12" x2="11" y2="18" />
  <line x1="5" y1="12" x2="11" y2="6" />
</svg>
</div>
</div>
        <div className="overflow-y-auto flex items-center justify-center pb-10 "  > 

<div className=" lg:w-1/2 ">
        <table className="table lg:w-full rounded-lg bg-border-black flex items-center bg-white">
         
          <div class="collapse collapse-arrow">
  <input type="checkbox" /> 
  <div class="collapse-title text-xl font-medium">
    Mi pedido no fue entregado
  </div>
  <div class="collapse-content"> 
    <p>hello</p>
  </div>
</div>
          <div class="collapse collapse-arrow">
  <input type="checkbox" /> 
  <div class="collapse-title text-xl font-medium">
    ¿Que envios hacen?
  </div>
  <div class="collapse-content"> 
    <p>hello</p>
  </div>
</div>
          <div class="collapse collapse-arrow">
  <input type="checkbox" /> 
  <div class="collapse-title text-xl font-medium">
    ¿Cuanto tarda en llegar?
  </div>
  <div class="collapse-content"> 
    <p>hello</p>
  </div>
</div>
          <div class="collapse collapse-arrow">
  <input type="checkbox" /> 
  <div class="collapse-title text-xl font-medium">
    ¿Que dias trabajan?
  </div>
  <div class="collapse-content"> 
    <p>hello</p>
  </div>
</div>
          <div class="collapse collapse-arrow">
  <input type="checkbox" /> 
  <div class="collapse-title text-xl font-medium">
    ¿ContraPago?
  </div>
  <div class="collapse-content"> 
    <p>hello </p>
  </div>
</div>
          <div class="collapse collapse-arrow ">
  <input type="checkbox" /> 
  <div class="collapse-title text-xl font-medium">
    ¿Como los contacto?
  </div>
  <div class="collapse-content"> 
    <p>hello</p>
  </div>
</div>
          <div class="collapse collapse-arrow ">
  <input type="checkbox" /> 
  <div class="collapse-title text-xl font-medium">
    Se perdio un paquete
  </div>
  <div class="collapse-content"> 
    <p>hello</p>
  </div>
</div>
          <div class="collapse collapse-arrow ">
  <input type="checkbox" /> 
  <div class="collapse-title text-xl font-medium">
    ¿Hay cantidad minima?
  </div>
  <div class="collapse-content"> 
    <p>hello</p>
  </div>
</div>
          <div class="collapse collapse-arrow ">
  <input type="checkbox" /> 
  <div class="collapse-title text-xl font-medium">
    ¿Como les doy los pedidos?
  </div>
  <div class="collapse-content"> 
    <p>hello</p>
  </div>
</div>
          <div class="collapse collapse-arrow ">
  <input type="checkbox" /> 
  <div class="collapse-title text-xl font-medium">
    ¿En que horario retiran?
  </div>
  <div class="collapse-content"> 
    <p>hello</p>
  </div>
</div>
          
        </table>
</div>

        </div>
      </div>
    )
}

export default HeaderQuestions;