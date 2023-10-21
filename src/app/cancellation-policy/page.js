import React from "react";
import Styles from './Cancellation.module.css';
import NormalNav from "../NormalNav/NormalNav.component";
import { Typography } from "@mui/material";
import FooterSection from "../components/Footer/Footer.component";

const Cancellation = () => {
    return (
        <div>
            <div className={Styles.pageContainer}>
                <NormalNav Styles={Styles} />
                <div style={{ marginTop: 20 }}>
                    <Typography variant='h4'>Cancellation and Refund</Typography>
                    <div style={{ display: "flex", flexDirection: 'column', gap: 20, marginTop: 20, paddingBottom: 40 }}>
                        <p>1. Telelife Medicare India Private Limited will refund the full amount for cancellation of a service order or appointment if cancellation is done 6 hours before the scheduled time.</p>
                        <p>2. If the service order or appointment is canceled within 6 hours of the scheduled time then no refund would be provided.</p>
                        <p>3. The service order or appointment can be rescheduled till 1 hour before the appointment time at no extra cost by calling the customer care.</p>
                        <p>4. If the service order or appointment is rescheduled then it cannot be canceled anytime. However, the service order or appointment can be rescheduled a maximum of 2 times.</p>
                        <p>5. In case of refund, Your money would be refunded to your account by reversal of the transaction as per the payment mode within 15 working days of the cancellation of an appointment.</p>
                        <p>6. For any delay in refunding the money due to unforeseen conditions beyond the control of Telelife, Telelife would not be liable to pay any extra amount as compensation for delay.</p>
                        <p>7. Contact Us If you have any questions on how to get the refund, please contact us.</p>
                        <ul>
                            <li>Email - <a href="mailto:telelife.medicare@gmail.com">telelife.medicare@gmail.com</a></li>
                            <li>Contact Number - +919469464040</li>
                            <li>Postal Address - G.N.2435/1, Main road Palus, Bapusaheb Deshmukh Complex, Below HDFC Bank Palus, Sangli, MH 416310, India.</li>
                        </ul>
                        <p>8. ACCEPTANCE OF CANCELLATION AND REFUND POLICY</p>
                        <p>Your use of our Site, including any dispute concerning cancellation and refund, is subject to this CANCELLATION AND REFUND POLICY document. BY ACCESSING THIS PAGE, YOU ARE ACCEPTING THE PRACTICES SET OUT IN THIS CANCELLATION AND REFUND POLICY.</p>
                    </div>
                </div>


            </div>
            <FooterSection />
        </div>

    )
}

export default Cancellation;