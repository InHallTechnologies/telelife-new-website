"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { AiOutlineHome } from "react-icons/ai";


const NormalNav = ({ Styles }) => {
    const router = useRouter();

    const handleClick = () => {
        router.push("/")
    }

    return (
        <div className={Styles.navigationContainer}>
            <img style={{ cursor: 'pointer' }} onClick={handleClick} src="/logo.svg" alt="Telelife" />
            <div className={Styles.homeButton} onClick={handleClick} >
                <AiOutlineHome size={19} />
                <p className={Styles.homeTitle}>Home</p>
            </div>
        </div>
    )
}

export default NormalNav;