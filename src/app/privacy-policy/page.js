import React from "react";
import Styles from './PrivacyPolicy.module.css';
import NormalNav from "../NormalNav/NormalNav.component";
import { List, ListItem, Typography } from "@mui/material";
import FooterSection from "../components/Footer/Footer.component";

const PrivacyPolicy = () => {
    return (
        <div>
            <div className={Styles.pageContainer}>
                <NormalNav Styles={Styles} />
                <div style={{ marginTop: 20 }}>
                    <Typography variant='h4'>Privacy Policy</Typography>
                    <div style={{ display: "flex", flexDirection: 'column', gap: 20, marginTop: 20, paddingBottom: 40 }}>
                        <p>
                            <strong>Telelife Medicare India Private Limited</strong> operates the <a href="https://www.telelife.in">www.telelife.in</a> website, which provides access to the services of Telemedicine (case discussion with specialists before visiting in person) for patients in collaboration with established doctors, pharmacies, diagnostic labs, hospitals & other healthcare service providers by providing platform-based referral and marketing for healthcare providers.
                        </p>
                        <p>
                            This page is used to inform website visitors regarding our Privacy Policies with the collection, use, and disclosure of Personal Information if anyone decides to use our Service. If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.
                        </p>
                        <p>
                            At Telelife, we respect your right to privacy and we understand that visitors to <a href="https://www.telelife.in">www.telelife.in</a> ("Site") need to control the use of their personal information. The privacy policy below describes the measures taken by us to protect your privacy in connection with your use of our Site.
                        </p>
                        <p>
                            Telelife allows all the service providers such as doctors, pharmacies, labs, hospitals & other healthcare-related vendors, who have signed contracts with Telelife, to serve advertisements to the Users (“Advertised Content”), which may include third-party banners, badges, contextual advertising and content created or provided by an Advertiser (collectively referred to as "Advertisements" or "Advertising"). The Advertised Content shall be clearly demarcated and differentiated from Telelife Content. Telelife may “target” some ads to users for a certain general profile. Telelife does NOT use personally identifiable information to target ads. Further, all the terms and conditions governing advertisements on the Website are governed by the advertisement policy mentioned here.
                        </p>
                        <p>
                            The Telelife Content is available on the Website, including, without limitation, text, copy, audio, video, photographs, illustrations, graphics, and other visuals, is targeted at the general public for informational purposes only and does not constitute professional medical advice, diagnosis, treatment, or recommendations of any kind. Further, the details regarding the process of generating and reviewing the Telelife Content are detailed in the editorial policy.
                        </p>
                        <p>
                            The Company reserves the right to change or modify these Terms of Use or any policy or guideline of the Website, including the Privacy Policy, at any time and in its sole discretion. Any changes or modifications will be effective immediately upon posting the revisions on the Website, and you waive any right you may have to receive specific notice of such changes or modifications. Your continued use of the Website will confirm your acceptance of such changes or modifications; therefore, you should frequently review these Terms of Use and applicable policies to understand the terms and conditions that apply to your use of the Website.
                        </p>
                        <p>
                            Information Collection and Use - For a better experience while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to your name, sexual orientation, phone number, your treatment reports as an image or PDF, and recommendations from recognized doctors and postal address. The information that we collect will be used to contact or identify you and to provide services that meet your needs.
                        </p>
                        <p>
                            Information You Provide - Telelife does not collect any personal information from those who visit the Site unless a visitor is uploading data on the Telelife Contact page, in which case we store your email and/or phone number to associate your uploaded data with you. We ensure that the data you upload is anonymized prior to any usage on our website.
                        </p>
                        <p>
                            Communications With Us - When you contact us by email or other communications, we may retain that information in order to respond to your request and improve our services.
                        </p>
                        <p>
                            Log Data - We want to inform you that whenever you visit our Service, we collect information that your browser sends to us, which is called Log Data. This Log Data may include information such as your computer’s Internet Protocol (“IP”) address, browser version, pages of our Service that you visit, the time and date of your visit, the time spent on those pages, and other statistics. We will use this log information to help diagnose problems with our server and to administer our Site. Your log information may also be used to gather broad demographic information.
                        </p>
                        <p>
                            Location Data - When you are using Telelife with a browser or mobile device, you can enter a location or explicitly allow Telelife access to your location. Telelife collects and stores that information for providing your location-specific information for a better user experience.
                        </p>
                        <p>
                            Cookies - "Cookies" are files with a small amount of data that is commonly used as an anonymous unique identifier. These are sent to your browser from the website that you visit and are stored on your computer’s hard drive. Our website uses these "cookies" to save information locally to improve our Service. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your computer. If you choose to refuse our cookies, you may not be able to use some portions of our Service.
                        </p>
                        <p>
                            Demographics and Interest Information - The Telelife website has implemented Google Analytics Demographics and Interest reporting. This tool enables us to view demographic and other information aggregated from the overall population of the visitors to our site. This does not include any personally identifiable information.
                        </p>
                        <h2>HOW DO WE USE YOUR PERSONALLY IDENTIFIABLE INFORMATION?</h2>
                        <ul>
                            <li>Tracking Information - We use your contact information when you submit your details in our contact form. This information will be identified as anonymous and will be shared with the regional administrator in your area for better service provisions. We also use your uploaded reports from recognized healthcare practitioners, your name, age, gender, and address, which are required to book services such as Doctors, Labs, Ambulances, and Hospitals.</li>
                        </ul>
                        <h2>WHO DO WE SHARE YOUR PERSONALLY IDENTIFIABLE INFORMATION WITH?</h2>
                        <ul>
                            <li>For a better user experience, we share all the required data with District and/or Taluka admins from Telelife and with the service providers for whom you have purchased the services.</li>
                        </ul>
                        <h2>WHAT ELSE SHOULD YOU KNOW ABOUT YOUR PRIVACY?</h2>
                        <p>We will retain the information we collect from you in our system indefinitely. If you would like information deleted, you may request deletion by emailing us at <a href="mailto:telelife.medicare@gmail.com">telelife.medicare@gmail.com</a>.</p>
                        <h2>Security</h2>
                        <ul>
                            <li>Security - We work hard to protect Telelife and our users from unauthorized access to or unauthorized alteration, disclosure, or destruction of information we hold. We maintain industry-standard security measures to protect sensitive data. If you register to establish an account or to receive price alerts, your password is also encrypted. Although we will exercise reasonable care in providing secure transmission of information between your computer and our servers, we cannot ensure or warrant the security of any information transmitted to us over the Internet, and we accept no liability for any unintentional disclosure.</li>
                            <li>Links to Other Sites - Our Site contains hyperlinks and pointers to Internet sites maintained by third parties. These links are provided for your reference only. We do not control, operate, or endorse in any respect information, products, or services on such third-party sites and are not responsible for their content. Many third-party sites have their own privacy policies that differ from ours. This privacy policy only covers our Site and does not cover any other site. While we make every effort to keep your information secure, we do not control the policies of other sites.</li>
                            <li>Do Not Track Requests - At this time, we do not respond to browser ‘Do Not Track Signals.</li>
                        </ul>
                        <h2>CHANGES TO THIS PRIVACY POLICY</h2>
                        <p>We may make changes in our privacy policy from time to time. When we do so, we will post the revised privacy policy on our Site. Please check the revision date at the top of this page to determine if the policy has been modified since you last reviewed it.</p>
                        <h2>CONTACTING JIYYO</h2>
                        <p>We would like to receive your comments and questions about this Privacy Policy and any other matter you have regarding our Site. Please email us your comments or questions at: <a href="mailto:telelife.medicare@gmail.com">telelife.medicare@gmail.com</a>.</p>
                        <h2>ACCEPTANCE OF PRIVACY POLICY</h2>
                        <p>Your use of our Site, including any dispute concerning privacy, is subject to this Privacy Policy and the Terms of Use posted on our Site. BY ACCESSING THIS PAGE, YOU ARE ACCEPTING THE PRACTICES SET OUT IN THIS PRIVACY POLICY AND TERMS OF USE.</p>
                    </div>
                </div>


            </div>
            <FooterSection />
        </div>

    )
}

export default PrivacyPolicy;