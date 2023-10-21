"use client";
import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import Styles from "./ContactUs.module.css";
import { Button, MenuItem, Select, TextField } from "@mui/material";
import { useRouter } from "next/navigation";

const ContactUs = () => {

    const router = useRouter();

    const handleClick = () => {
        router.push("/")
    }

    return (
        <div className={Styles.contactUsContainer}>
            <div className={Styles.greenBar}>
                <h2 className={Styles.greenTitle}>Get In Touch</h2>
                <p className={Styles.greenContent}>We would love to here your queries. You can reach us through our social links or fill in the form and click submit</p>
                <div style={{ marginTop: 20, display: "flex", flexDirection: 'column', gap: 12 }}>
                    <div className={Styles.footerLinkItemContainer}>
                        <img className={Styles.footerSocialIcon} src="/socialIcons/white/facebook.png" />
                        <a className={Styles.footerLinkItemData} href="https://www.facebook.com/people/Telelife-Medicare-India-PVT-LTD/100083451548008/" >Telelife Medicare India PVT LTD</a>
                    </div>
                    <div className={Styles.footerLinkItemContainer}>
                        <img className={Styles.footerSocialIconYoutube} src="/socialIcons/white/youtube.png" />
                        <a className={Styles.footerLinkItemData} href="https://www.youtube.com/channel/UCGdnnFTn4d6dx2rL_qJcLZg"> Telelife Medicare</a>
                    </div>
                    <div className={Styles.footerLinkItemContainer}>
                        <img className={Styles.footerSocialIcon} src="/socialIcons/white/twitter.png" />
                        <a className={Styles.footerLinkItemData} href="https://twitter.com/TelelifeIndia" >@TelelifeIndia</a>
                    </div>
                    <div className={Styles.footerLinkItemContainer}>
                        <img className={Styles.footerSocialIcon} src="/socialIcons/white/linkedin.png" />
                        <a className={Styles.footerLinkItemData} href="https://www.linkedin.com/company/telelife-medicare-india-pvt-ltd/">Telelife Medicare India PVT LTD</a>
                    </div>
                    <div className={Styles.footerLinkItemContainer}>
                        <img className={Styles.footerSocialIconYoutube} src="/socialIcons/white/youtube.png" />
                        <a className={Styles.footerLinkItemData} href="https://www.youtube.com/channel/UCGdnnFTn4d6dx2rL_qJcLZg"> Telelife Medicare</a>
                    </div>
                </div>
            </div>

            <div className={Styles.contactUsMainContent}>
                <div className={Styles.navigationContainer}>
                    <img style={{ cursor: 'pointer' }} onClick={handleClick} src="/logo.svg" alt="Telelife" />
                    <div className={Styles.homeButton} onClick={handleClick} >
                        <AiOutlineHome size={19} />
                        <p className={Styles.homeTitle}>Home</p>
                    </div>
                </div>
                <h2 className={Styles.sectionTitle}>Having any questions or queries in mind?</h2>
                <p className={Styles.sectionSubTitle}>You can also email us at <a href="mailto:telelife.medicare@gmail.com"><span className={Styles.emailId}>telelife.medicare@gmail.com</span></a></p>

                <form className={Styles.form}>
                    <TextField fullWidth variant='outlined' size="small" label="Enter email" type="name" />


                    <div className={Styles.horizontalControl}>
                        <TextField size="small" label="Phone Number" type="tel" />
                        <TextField size="small" label="Email Id" placeholder="someone@example.com" type="email" />
                    </div>

                    <Select
                        fullWidth
                        label="Reason"
                        size='small'
                        placeholder="Reason"
                        defaultValue="General query"
                    >
                        <MenuItem value={"Want to join Telelife"}>Want to join Telelife</MenuItem>
                        <MenuItem value={"Complains regarding service/s"}>Complains regarding service/s</MenuItem>
                        <MenuItem value={"General query"}>General query</MenuItem>
                    </Select>

                    <TextField multiline minRows={3} fullWidth label="Query" placeholder="Your text goes here..." />


                    <div className={Styles.buttonContainer}>
                        <Button className={Styles.button} type="submit">
                            Submit
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactUs;