import React, { useState, useEffect } from 'react';
import Navbar from "./Navbar";
import {useNavigate} from "react-router-dom";

export default function Home(){
    const navigate = useNavigate();
    useEffect(() => {
        const token = sessionStorage.getItem("token");
        if(!token)
        {
            navigate("/");
        }
    }, []);
    return (
        <>
            <Navbar/>
            <div>
                wejghaehjh
            </div>
        </>
    );
}