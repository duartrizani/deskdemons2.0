import React, { createContext } from 'react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';


export const MaybeShowNavBar = ({ children }) => {
    

    const location = useLocation();

    const [showNavBar, setShowNavBar] = useState(false)

    useEffect(() => {
        if (location.pathname == '/res') {
            setShowNavBar(false)
        } 
        else if(location.pathname == '/desserte') {
            setShowNavBar(false)
        }
        else if(location.pathname == '/crysos') {
            setShowNavBar(false)
        }
        else if(location.pathname == '/toon') {
            setShowNavBar(false)
        }
        else if(location.pathname == '/thjerrza') {
            setShowNavBar(false)
        }
        else {
            setShowNavBar(true)
        }
    }, [location]);


    return (

            <div> {showNavBar && children} </div>
    )
}

export default MaybeShowNavBar