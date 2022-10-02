import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import '../IconWpp/IconWpp.css';

const IconWpp = () => {
    return (
        <div className="whatsapp">
            <div className="whatsapp-icon cursor-pointer">
                <a href="https://api.WhatsApp.com/send?phone=5491127516431">

                    <BsWhatsapp />
                </a>
            </div>
        </div>
    )
}
export default IconWpp