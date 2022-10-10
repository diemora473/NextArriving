import React from "react";
import FooterWorkWithUs from "./FooterWork";
import HeaderWith from "./HeaderWork";
import NavWith from "./NavWork";
import Loading from "../../../Loading/Loading";
import { useState } from "react";
import { useEffect } from "react";

const WorkWithUs = () => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])
    return(

        <div>
            {loading ? 
        <Loading/> :
<div>
        {/* <NavWith/> */}
<HeaderWith/>
<FooterWorkWithUs/>
</div>
        }
        </div>
    )
}

export default WorkWithUs;