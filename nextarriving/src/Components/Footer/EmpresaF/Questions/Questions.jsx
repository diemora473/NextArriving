import React, { useEffect } from "react";
import FooterQuestions from "./FooterQuestions";
import HeaderQuestions from "./HeaderQuestions";
import NavQuestions from "./NavQuestions";
import Prueba from "./Prueba";
import Loading from "../../../Loading/Loading";
import { useState } from "react";
const Questions = () => {
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
<Loading/> :
<div>
<NavQuestions/>
<HeaderQuestions/>
<FooterQuestions/>
</div>  
}
        </div>
    )
}

export default Questions;