import React from "react";
import FooterAbout from "./FooterAbout";
import HeaderAbout from "./HeaderAbout";
import NavAbout from "./NavAbout";
import Loading from "../../../Loading/Loading";
import { useState } from "react";
import { useEffect } from "react";

const AboutUs = () => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)

    },[])
    return (
        <div>
            {loading ? 
            <Loading/> :
            <div>

            <NavAbout/>
            <HeaderAbout/>
            {/* <Prueba/>} */}
            <FooterAbout/>
            </div>
        }
        </div>
    )
}
export default AboutUs;