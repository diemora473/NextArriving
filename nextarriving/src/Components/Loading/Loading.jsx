import { Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import './Loading.css'
import 'animate.css'
import logo3 from '../Img/logo3.png';
// import Fondo3 from '../Img/Fondo3.jpg';
import { Grid, GridItem } from '@chakra-ui/react'
const Loading = ({ done }) => {
    const [style, setStyle] = useState();
    const [showComponent, setShowComponent] = useState();
    setTimeout(() => {
        const newStyle = {
            opacity: 1,
            width: `${done}%`
        }
        setStyle(newStyle);
    }, 2000);

    useEffect(() => {
        setInterval(() => {
            setShowComponent(true);
        }, 3000)
    }, []);


    return (
        <div className="bg-gradiet-to-r from-orange-500  via-orange-600 to-pink-500  flex items-center justify-center h-screen w-sreen ">
            <div className="relative ">

                <img
                    className="h-42 animate__animated animate__fadeIn"
                    src={logo3}
                    alt="NextArriving"
                />
            </div>
            {/* <div className="flex justify-center pt-32 ">

                <div className="progress">
                    <div className="progress-done" style={style}>
                        {done}%
                    </div>
                    <div >
                    </div>
                </div>
            </div>
            <div className="relative pt-10">

                {showComponent &&
                    <Link to='/NextArriving'>
                        <div class="btn">Soy Prueba</div>
                    </Link>
                }
            </div> */}

        </div>
    )
}
export default Loading;