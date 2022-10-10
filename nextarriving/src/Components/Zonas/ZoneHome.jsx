import React, { useEffect, useState } from 'react';
import FooterZone from './FooterZone';
import InfoZone from './InfoZone';
import NavZone from './NavZone';
import Loading from '../Loading/Loading';
const Zone = () => {
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

            <NavZone />
            <InfoZone />
            <FooterZone />
            </div>
            }
            </div>
    )
}

export default Zone;