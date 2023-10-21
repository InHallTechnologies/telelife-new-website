"use client";

import React, { useRef } from "react";
import Styles from './About.module.css';
import SectionTitle from "../SectionTitle/SectionTitle.component";
import { Stack, Typography } from "@mui/material";
import { PARA_FONT_SIZE } from "@/app/utilities/constants";
import { useInView, motion, AnimatePresence } from "framer-motion";

const AboutTelelife = () => {

    const containerRef = useRef();
    const inView = useInView(containerRef, { once: true });


    const ABOUT_DATA = [
        {
            image: "/dataimage/ambulance.gif",
            title: "Swift",
            subTitle: "Experience fast medical service from your locality"
        },
        {
            image: "/dataimage/medical-insurance.gif",
            title: "Reliable",
            subTitle: "Consistently good in quality and performance"
        },
        {
            image: "dataimage/x-ray.gif",
            title: "Authentic",
            subTitle: 'Telilife ensures end-to-end transparency with the customer.'
        }
    ]

    return (
        <div ref={containerRef} className={Styles.aboutTelelifeContainer}>
            <SectionTitle
                title="About Telelife"
                subTitle="Who are we? What do we do?"
            />
            <Stack gap="20px" style={{ marginTop: '36px' }}>
                <Typography color='#444' fontSize={PARA_FONT_SIZE}>Telelife is a telemedicine platform that doctors, pharmacies, labs, Hospitals and other healthcare providers licensed in India can use to provide telemedicine services. Telelife itself is not a healthcare provider. We provide a platform to build and run the network of healthcare facilities in any city and village. This empowers the app users to communicate easily with all healthcare service providers and redirect them to the right facility at the right time.</Typography>
                <Typography color='#444' fontSize={PARA_FONT_SIZE}>Via Telelife, exclusive support of treatments from experienced doctors is provided with video consultation or clinic visits.The app users are also connected to pharmacies to receive special discounts on medicines purchases.The Telelife app also provides access to labs and Hospital services in nearby areas with reasonable prices and appointments. The highly equipped Ambulances will be available for emergency purposes via Telelife mobile application.</Typography>
                <Typography color='#444' fontSize={PARA_FONT_SIZE}>We pledge to provide the Swift, Reliable and Authentic services to our app users. We do invite you to join us in our mission and contribute to a Healthy & Happy India.</Typography>
            </Stack>


            {
                inView
                &&
                <div className={Styles.aboutListContainer}>
                    {
                        ABOUT_DATA.map((item, index) => {
                            return (
                                <motion.div key={item.title} initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: index * 0.5 } }} className={Styles.aboutItemContainer}>
                                    <img style={{ width: '100px', height: '100px' }} src={item.image} />
                                    <Typography color='#444' fontWeight='bold' fontSize="1.5rem">{item.title}</Typography>
                                    <Typography color="#444" fontSize={"1.1rem"}>{item.subTitle}</Typography>
                                </motion.div>
                            )
                        })
                    }
                </div>
            }

        </div>
    )
}

export default AboutTelelife;