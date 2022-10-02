import { Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import '../Loading/Loading.css'
import logo2 from '../Img/logo2.png';
import Fondo3 from '../Img/Fondo3.jpg';
import mancha from '../Img/mancha.png';
import mancha1 from '../Img/mancha1.png';
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
        <div className="bg-gradiet-to-r from-orange-500 via-orange-600 to-pink-500 h-1/3">
            <div className="relative flex justify-center pt-32  ">

                <img
                    className="h-32"
                    src={logo2}
                    alt="NextArriving"
                />
            </div>
            <div className="flex justify-center pt-32 ">

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
            </div>

        </div>
    )
}
export default Loading;