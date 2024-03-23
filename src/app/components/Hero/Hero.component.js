"use client";
import React, { useEffect, useState } from "react";
import Styles from './Hero.module.css';
import { AnimatePresence, motion } from 'framer-motion';
import animationData from "../../../../public/Telilife-Medicare -medical.json";
import animationData1 from "../../../../public/telelife-orignal-medicine.json";
import animationData2 from "../../../../public/mri.json";
import Lottie from "react-lottie";
import { Button, Stack, Typography } from "@mui/material";
import { PARA_FONT_SIZE } from "@/app/utilities/constants";


const Hero = ({ ref }) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const animations = [
        { animationData: animationData, title: `Devoting <span style='color:#59AB50'">24/7</span> to making a significant <br/>impact in the lives of patients` },
        { animationData: animationData1, title: `Delivering <span style='color:#59AB50'">genuine</span> medicines<br/> and services at your doorstep in a flash` },
        { animationData: animationData2, title: `Providing <span style='color:#59AB50'">confidential, authentic and  hassle free</span><br/>lab and test results` }
    ];
    const data = [
        { title: 'District', value: '2+', image: '/dataimage/cityPark.webp' },
        { title: 'Cities', value: '20+', image: '/dataimage/landMark.webp' },
        { title: "Service Providers", value: '20+', image: '/dataimage/medicine.webp' },
        { title: "Users", value: '100+', image: '/dataimage/community.webp' }

    ]

    const CalculateTime = (time) => {
        const mins = Math.floor(time / 60);
        const secs = time - mins * 60;
        //you can calculate milliseconds etc...
        return (mins, secs);
    }

    useEffect(() => {

        console.log(CalculateTime(100))
        const timeout = setTimeout(() => {
            setCurrentIndex((currentIndex + 1) % 3)
        }, 5000);

        return () => {
            clearTimeout(timeout);
        }
    }, [currentIndex])


    return (
        <div ref={ref} className={Styles.heroContainer}>
            <motion.div initial={{ x: -2000, }} animate={{ x: 0, filter: "blur(0px)", transition: { delay: 1, duration: 2 } }} className={Styles.backgroundGradient} />

            <div className={Styles.carouselContainer}>
                
                    {
                        animations.map((item, index) => {
                            if (currentIndex === index) {
                                return (
                                    <motion.div  key={index.toString()} animate={{ opacity: 1, transition: { ease: 'linear', duration: 0.5 } }} exit={{ opacity: 0, transition: { duration: 0.3 } }} className={Styles.carouselItemContainer}  >
                                        <Stack gap='20px'>
                                            <div style={{ width: 200, height: 3, backgroundColor: '#ccc', borderRadius: 10 }} />
                                            <div className={Styles.carouselTitle} dangerouslySetInnerHTML={{ __html: item.title }} />
                                            <Typography fontSize={PARA_FONT_SIZE} style={{ opacity: 0.5 }} >Experience swift and quality-driven medical services at your fingertips</Typography>
                                            <Button style={{ width: 200, marginTop: 16 }} variant="contained">Learn More</Button>
                                        </Stack>
                                        <div className={Styles.illusContainer}>
                                            <Lottie
                                                options={{ loop: true, autoplay: true, animationData: item.animationData }}
                                                style={{ height: "100%", width: '100%' }}

                                            />
                                        </div>
                                    </motion.div>
                                )
                            }

                        })
                    }
            </div>

            <div className={Styles.dataContainer}>
                {
                    data.map((item, index) => {
                        return (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: index * 0.3 } }} className={Styles.dataItemContainer} style={{ backgroundImage: `url("${item.image}")`, backgroundSize: 'cover', flex: 1, borderRadius: 8, minHeight: 200, color: 'white' }} key={item.image}>
                                <Typography style={{ fontWeight: "700", fontSize: '2.6rem' }}>{item.value}</Typography>
                                <Typography style={{ fontSize: PARA_FONT_SIZE }}>{item.title}</Typography>
                            </motion.div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Hero;