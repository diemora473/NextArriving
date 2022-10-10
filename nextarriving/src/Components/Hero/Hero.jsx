import React from "react";
import logo from "../Img/logo.png"
import logo2 from "../Img/logo2.png"
import logoBlanco from "../Img/logoBlanco.png"
import Line from "../Divider/Divider";
import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Image,
    Icon,
    IconButton,
    createIcon,
    IconProps,
    useColorModeValue,
} from '@chakra-ui/react';
import Wave from "../Wave/Wave";
import '../NavBar/NavBar.css'
import Carousel from "../Carrousel/Carrousel";
import 'animate.css';
import '../Hero/Hero.css'
import NavBar from "../NavBar/NavBar";
export default function Hero() {
    return (
        <div className="relative bg-base-200 animate__animated animate__fadeIn pt-18 ">
          <section class=" -z-10"> 
              <div class="relative overflow-hidden bg-no-repeat bg-cover bg-base-200 Hero" >
              <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed Text ">
              <div class="flex justify-center items-center h-full ">
                <div class="text-center text-white px-6 md:px-12">
                  <h1 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">Conectandote con lo <br /><span>que queres</span></h1>
                  <div className=" pl-10 flex items-center justify-center">

                 <img
                 className="lg:h-36"
                 src={logoBlanco}
                 />
                 </div>
                </div>
              </div>
            </div>
              </div>
              <div class="-mt-2 md:-mt-4 lg:-mt-6 xl:-mt-10 text-base-200 hero2 " >
            <svg viewBox="0 0 2880 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M 0 48 L 1437.5 48 L 2880 48 L 2880 0 L 2160 0 C 1453.324 60.118 726.013 4.51 720 0 L 0 0 L 0 48 Z" fill="currentColor"></path>
            </svg>
          </div>
          </section>
        
        </div>
    );
};