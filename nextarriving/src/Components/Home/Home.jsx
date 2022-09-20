import React from "react";
import Hero from "../Hero/Hero";
import Hero2 from "../Hero2/Hero2";
import IconWpp from "../IconWpp/IconWpp";
import Mensajeria from "../Information/Information";
import InfoZone from "../InformationZone/InformationZone";
import NavBar from "../NavBar/NavBar";
import Statistics from "../Statistics/Statistics";
import Line from "../Divider/Divider";
import Footer from "../Footer/Footer";
const Home = () => {
    return (
        <div>
            <IconWpp />
            <NavBar />
            <Hero />
            <Mensajeria />
            <Line />
            <InfoZone />
            <Hero2 />
            <Footer />
        </div>
    )
}
export default Home;