"use client";

import React, { useEffect, useMemo, useState } from "react";
import Styles from './OurReach.module.css';
import SectionTitle from "../SectionTitle/SectionTitle.component";
import { Button, Stack, Typography } from "@mui/material";
import { AnimatePresence, motion } from 'framer-motion';
import { BsDot } from 'react-icons/bs';
import { PARA_FONT_SIZE } from "@/app/utilities/constants";

const OurReach = () => {
    const [selectedItem, setSelectedItem] = useState("Sangli")
    const DATA = {
        "Sangli": [
            "MIRAJ",
            "TASGAON",
            "KAVATHE MAHANKAL",
            "JAT",
            "VITA",
            "ATAPADI",
            "KADEGAON",
            "PALUS",
            "WALWA",
            "SHIRALA"
        ],
        "Kolhapur": [
            "SHAHUWADI",
            "PANHALA",
            "HATKANANGLE",
            "SHIROL",
            "KARVEER",
            "GAGANBAWDA",
            "RADHANAGARI",
            "PAPER",
            "BHUDARGAD",
            "AJRA",
            "GADHINGLAJ",
            "CHANDGAD"
        ]
    }

    const distNames = useMemo(item => Object.keys(DATA), [])

    useEffect(() => {
    }, [selectedItem])

    return (
        <div id="our-reach" className={Styles.ourReachContainer}>
            <SectionTitle
                title="Our Reach"
                subTitle="20+ in Maharashtra"
            />
            <div className={Styles.ourReachContentContainer}>
                <Stack gap="20px" direction='row' >
                    {
                        Object.keys(DATA).map(item => {
                            return (
                                <Button size="small" onClick={_ => setSelectedItem(item)} style={{ minWidth: '140px', borderRadius: '100px' }} fullWidth variant={item === selectedItem ? "contained" : 'outlined'} key={item}>{item}</Button>
                            )
                        })
                    }
                </Stack>
            </div>

            <div className={Styles.reachCityList}>
                <AnimatePresence mode='popLayout'>
                    {
                        DATA[selectedItem].map((item, index) => {
                            return (
                                <motion.div key={item} initial={{ opacity: 0, y: -20, rotate: '-5deg' }} animate={{ opacity: 1, y: 0, rotate: '0deg', transition: { delay: 0.1 * index } }} exit={{ opacity: 0, y: 20, rotate: '-5deg', transition: { duration: 0.1 * index } }} className={Styles.ourReachCityItemContainer}>
                                    {
                                        index !== 0
                                        &&
                                        <BsDot size={30} />
                                    }
                                    <Typography color='#444' fontWeight='500' fontSize={PARA_FONT_SIZE}>{item}</Typography>
                                </motion.div>


                            )
                        })
                    }
                </AnimatePresence>
            </div>

        </div >
    )
}


export default OurReach;