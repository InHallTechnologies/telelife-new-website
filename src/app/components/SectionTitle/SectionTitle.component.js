import React from "react";
import Styles from './SectionTitle.module.css';
import { Divider, Stack, Typography } from "@mui/material";

const SectionTitle = ({ title, subTitle }) => {

    return (
        <div>
            <Stack gap="20px" direction='row'>
                <div className={Styles.divider} />
                <Stack>
                    <Typography style={{ fontWeight: '700', color: '#444', fontSize: '2rem' }}>{title}</Typography>
                    <Typography style={{ fontWeight: '500', color: '#444', fontSize: '1.5rem' }}>{subTitle}</Typography>
                </Stack>
            </Stack>
        </div>
    )
}

export default SectionTitle;