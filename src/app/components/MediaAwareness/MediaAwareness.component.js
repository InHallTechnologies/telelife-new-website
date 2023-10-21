"use client";
import React from "react";
import Styles from './MediaAwareness.module.css';
import SectionTitle from "../SectionTitle/SectionTitle.component";
import animationData from "../../../../public/Telilife-Medicare -undraw_social_expert_re_elbp-1.json";
import Lottie from "react-lottie";
import { Typography } from "@mui/material";
import { PARA_FONT_SIZE } from "@/app/utilities/constants";


const MediaAwareness = () => {

    return (
        <div id="media-awareness" className={Styles.mediaAwarenessContainer}>
            <SectionTitle
                title="Media Awareness"
                subTitle="Reach Us. Follow Us!"
            />
            <div className={Styles.mediaAwarenessContentContainer}>
                <div className={Styles.mediaIllustration}>
                    <Lottie
                        options={{ loop: true, autoplay: true, animationData: animationData }}
                        height={"100%"}
                        width={"100%"}
                    />
                </div>

                <div className={Styles.mediaTextContent}>
                    <div className={Styles.mediaContentPara}>
                        <Typography color='#444' fontSize={PARA_FONT_SIZE}>
                            We believe in communication with you through the medium where your family and friends are.
                            Our Social media handles are available for you to stay connected and updated about Telelife
                            Medicare India PVT LTD. We always bring the information for you, which is useful for your
                            family, friends and yourself to maintain a better health. You have complete freedom of speech to
                            speak about our services and contact us anytime through these channels. We are at your
                            service to help you with a better healthcare experience. So, immediately subscribe to our Social
                            media Channels and stay connected with us, because <strong>“Your health is our Priority”</strong>
                        </Typography>
                    </div>
                    <div style={{ marginTop: 12, display: 'flex', gap: '12px' }}>
                        <img className={Styles.socialIcons} src="/socialIcons/Facebook 1.webp" />
                        <img className={Styles.socialIcons} src="/socialIcons/Twitter 1.webp" />
                        <img className={Styles.socialIcons} src="/socialIcons/LinkedIn 1.webp" />
                        <img className={Styles.socialIcons} src="/socialIcons/Instagram 1.webp" />
                        <img className={Styles.socialIcons} src="/socialIcons/Youtube 1.webp" />
                        <img className={Styles.socialIcons} src="/socialIcons/Outlook 1.webp" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MediaAwareness