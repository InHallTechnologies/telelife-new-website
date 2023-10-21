"use client";
import React from "react";
import Styles from "./Footer.module.css";
import { useRouter } from "next/navigation";

const FooterSection = () => {
    const router = useRouter();
    const handlePDFClick = (type) => _ => {
        let url = ""
        if (type === "PP") {
            url = "/privacy-policy"
        }
        if (type === "TNC") {
            url = "/terms-of-service"
        }
        if (type === "CRP") {
            url = "/cancellation-policy"

        }
        router.push(url)
    }

    return (
        <footer className={Styles.footerContainer}>
            <div className="containerWidth">
                <div className={Styles.footerContent}>

                    <div>
                        <img className={Styles.footerIcon} src="/whiteLogo.png" />
                        <p className={Styles.footerContentHeadlines}>Bapusaheb Deshmukh Complex, Main Road Palus, G.N. 2435, 1, Dist, Palus, Maharashtra 416310</p>
                    </div>

                    <div>
                        <h3 className={Styles.footerContentHeadlines}>Links</h3>
                        <ul className={Styles.unorderedListContainer}>
                            <li className={Styles.footerListItem}>
                                <div onClick={handlePDFClick("PP")} className={Styles.footerLinkItemContainer}>
                                    <img className={Styles.linkArrow} src="/linkArrow.png" />
                                    <p className={Styles.footerLinkItemData}>Privacy Policy</p>
                                </div>
                            </li>

                            <li className={Styles.footerListItem}>
                                <div onClick={handlePDFClick("TNC")} className={Styles.footerLinkItemContainer}>
                                    <img className={Styles.linkArrow} src="/linkArrow.png" />
                                    <p className={Styles.footerLinkItemData}>Terms of Service</p>
                                </div>
                            </li>

                            <li className={Styles.footerListItem}>
                                <div onClick={handlePDFClick("CRP")} className={Styles.footerLinkItemContainer}>
                                    <img className={Styles.linkArrow} src="/linkArrow.png" />
                                    <p className={Styles.footerLinkItemData}>Cancellation and Refund Policy</p>
                                </div>
                            </li>

                        </ul>
                    </div>

                    <div>
                        <h3 className={Styles.footerContentHeadlines}>Reach Us</h3>
                        <ul className={Styles.unorderedListContainer}>
                            <li className={Styles.footerListItem}>
                                <div className={Styles.footerLinkItemContainer}>
                                    <img className={Styles.linkArrow} src="/call.png" />
                                    <p className={Styles.footerLinkItemData}>+91 9649644040</p>
                                </div>
                            </li>

                            {/* <li className={Styles.footerListItem}>
                                <div className={Styles.footerLinkItemContainer}>
                                    <img className={Styles.linkArrow} src="/call.png" />
                                    <p className={Styles.footerLinkItemData}>+91 XXXXXXXXXX</p>
                                </div>
                            </li> */}

                            <li className={Styles.footerListItem}>
                                <div className={Styles.footerLinkItemContainer}>
                                    <img className={Styles.linkArrow} src="/email.png" />
                                    <a className={Styles.footerLinkItemData} href="mailto:telelife.medicare@gmail.com">telelife.medicare@gmail.com</a>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className={Styles.footerContentHeadlines}>Follow Us</h3>
                        <ul className={Styles.unorderedListContainer}>
                            <li className={Styles.footerListItem}>
                                <div className={Styles.footerLinkItemContainer}>
                                    <img className={Styles.footerSocialIcon} src="/socialIcons/white/facebook.png" />
                                    <a className={Styles.footerLinkItemData} href="https://www.facebook.com/people/Telelife-Medicare-India-PVT-LTD/100083451548008/" >Telelife Medicare India PVT LTD</a>
                                </div>
                            </li>

                            <li className={Styles.footerListItem}>
                                <div className={Styles.footerLinkItemContainer}>
                                    <img className={Styles.footerSocialIcon} src="/socialIcons/white/instagram.png" />
                                    <a className={Styles.footerLinkItemData} href="https://www.instagram.com/telelifeofficial/" >telelifeofficial</a>
                                </div>
                            </li>

                            <li className={Styles.footerListItem}>
                                <div className={Styles.footerLinkItemContainer}>
                                    <img className={Styles.footerSocialIcon} src="/socialIcons/white/twitter.png" />
                                    <a className={Styles.footerLinkItemData} href="https://twitter.com/TelelifeIndia" >@TelelifeIndia</a>
                                </div>
                            </li>

                            <li className={Styles.footerListItem}>
                                <div className={Styles.footerLinkItemContainer}>
                                    <img className={Styles.footerSocialIcon} src="/socialIcons/white/linkedin.png" />
                                    <a className={Styles.footerLinkItemData} href="https://www.linkedin.com/company/telelife-medicare-india-pvt-ltd/">Telelife Medicare India PVT LTD</a>
                                </div>
                            </li>

                            <li className={Styles.footerListItem}>
                                <div className={Styles.footerLinkItemContainer}>
                                    <img className={Styles.footerSocialIconYoutube} src="/socialIcons/white/youtube.png" />
                                    <a className={Styles.footerLinkItemData} href="https://www.youtube.com/channel/UCGdnnFTn4d6dx2rL_qJcLZg"> Telelife Medicare</a>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>

                <div>
                    <hr style={{ backgroundColor: 'white', height: "3px", margin: 0, marginTop: 20 }} />
                    <p className={Styles.allRightsText}>Copyright 2022. All Rights Reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default FooterSection;