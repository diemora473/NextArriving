import React from "react";
import Hero from "../Hero/Hero";
import Hero2 from "../Hero2/Hero2";
import IconWpp from "../IconWpp/IconWpp";
import Mensajeria from "../Information/InformationHome";
import InfoZone from "../InformationZone/InformationZone";
import NavBar from "../NavBar/NavBar";
import Statistics from "../Statistics/Statistics";
import Line from "../Divider/Divider";
import Footer from "../Footer/Footer";
import Loading from "../Loading/Loading";
import { useState } from "react";
import { useEffect } from "react";
import Prueba from "../prueba/prueba";

const Home = ({ done }) => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])
    return (
        <div>

            {loading ?
                <Loading done="100" /> :
                <div className="bg-base-200">
                    <div>
                        <IconWpp />
                        <NavBar />
                        <Hero />
                        {/* <Prueba/> */}
                        <Mensajeria />
                        {/* <InfoZone /> */}
                        <Hero2 />
                        <Footer />
                    </div>
                </div>
            }
        </div>
    )
}
export default Home;