import React from 'react';
import FooterZone from './FooterZone';
import InfoZone from './InfoZone';
import NavZone from './NavZone';
const Zone = () => {
    return (
        <div>
            <NavZone />
            <InfoZone />
            <FooterZone />
        </div>
    )
}

export default Zone;