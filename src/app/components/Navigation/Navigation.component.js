"use client";
import React, { useState } from "react";
import Styles from './Navigation.module.css';
import Link from "next/link";
import { AnimatePresence, motion } from 'framer-motion';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Typography } from "@mui/material";
import { GrClose } from 'react-icons/gr';

const Navigation = ({ homeRef, aboutRef, mediaRef, ourReachRef, blogsRef }) => {
    const [showSlider, setShowSlider] = useState(false);

    const handleToggle = _ => setShowSlider(!showSlider);

    return (
        <div className={Styles.navigationContainer}>
            <Link href="/">
                <img src="/logo.svg" alt="Telelife Medicare Private Limited" />
            </Link>

            <nav className={Styles.navContainer}>
                <ul className={Styles.navList}>
                    <motion.li>
                        <Link style={{ textDecoration: 'none', color: '#444', fontWeight: 700 }} href='#'>Home</Link>
                    </motion.li>
                    <motion.li>
                        <Link style={{ textDecoration: 'none', color: '#444', fontWeight: 700 }} href='#about-us'>About Us</Link>
                    </motion.li>
                    <motion.li>
                        <Link style={{ textDecoration: 'none', color: '#444', fontWeight: 700 }} href='#media-awareness'>Media</Link>
                    </motion.li>
                    <motion.li>
                        <Link style={{ textDecoration: 'none', color: '#444', fontWeight: 700 }} href='#our-reach'>Our Reach</Link>
                    </motion.li>
                    <motion.li>
                        <Link style={{ textDecoration: 'none', color: '#444', fontWeight: 700 }} href='#blogs'>Blogs</Link>
                    </motion.li>
                    <motion.li>
                        <Link style={{ textDecoration: 'none', color: '#444', fontWeight: 700 }} href='/contact-us'>Contact Us</Link>
                    </motion.li>
                </ul>
            </nav>


            <div className={Styles.hamburgContainer}>
                <RxHamburgerMenu style={{ cursor: 'pointer', zIndex: 20 }} size={30} onClick={handleToggle} />
                <AnimatePresence mode='popLayout'>
                    {
                        showSlider
                        &&
                        <motion.div initial={{ backgroundColor: 'white' }} animate={{ backgroundColor: '#0000002f' }} className={Styles.sliderContainer}>
                            <motion.div initial={{ x: 1000 }} exit={{ x: 1000 }} animate={{ x: 0, transition: { duration: 0.5, ease: "linear" } }} style={{ backgroundColor: 'white', width: '60%' }}>
                                <div style={{ padding: 20, display: 'flex', justifyContent: 'flex-end' }}>
                                    <GrClose size={20} onClick={handleToggle} />
                                </div>
                                <div style={{ padding: 12, display: 'flex', marginTop: "20px", flexDirection: 'column', gap: 20, alignItems: 'center' }}>
                                    <Link href='#' className={Styles.sliderItemContainer}>
                                        <Typography>Home</Typography>
                                    </Link>
                                    <Link href='#about-us' className={Styles.sliderItemContainer}>
                                        <Typography>About Us</Typography>
                                    </Link>
                                    <Link href='#media-awareness' className={Styles.sliderItemContainer}>
                                        <Typography>Media</Typography>
                                    </Link>
                                    <Link href='#our-reach' className={Styles.sliderItemContainer}>
                                        <Typography>Our Reach</Typography>
                                    </Link>
                                    <Link href='#blogs' className={Styles.sliderItemContainer}>
                                        <Typography>Blogs</Typography>
                                    </Link>
                                    <Link href="/contact-us" className={Styles.sliderItemContainer}>
                                        <Typography>Contact Us</Typography>
                                    </Link>
                                </div>
                            </motion.div>
                        </motion.div>
                    }
                </AnimatePresence>

            </div>


        </div>
    )
}

export default Navigation;