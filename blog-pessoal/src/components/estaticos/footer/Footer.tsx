import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Typography, Grid } from '@material-ui/core';
import {Box} from '@mui/material';

function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box style={{ backgroundColor: "#6a1b9a", height: "120px" }}>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom style={{ color: "grey" }}>Siga-nos nas redes sociais </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://www.facebook.com/anacahrowl" target="_blank" rel="noopener noreferrer">
                                <FacebookIcon style={{ fontSize: 60, color: "grey" }} />
                            </a>
                            <a href="https://www.instagram.com/ancahrowl/" target="_blank" rel="noopener noreferrer">
                                <InstagramIcon style={{ fontSize: 60, color: "grey" }} />
                            </a>
                            <a href="https://https://www.linkedin.com/in/carolina-tavares-71731b21b/" target="_blank" rel="noopener noreferrer">
                                <LinkedInIcon style={{ fontSize: 60, color: "grey" }} />
                            </a>
                        </Box>
                    </Box>
                    <Box style={{ backgroundColor: "#7c4dff", height: "60px" }}>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "white" }} >© 2020 Copyright:</Typography>
                        </Box>
                        <Box>
                            <a target="_blank" href="https://brasil.generation.org" rel="noopener noreferrer">
                                <Typography variant="subtitle2" gutterBottom style={{ color: "purple" }} align="center"></Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;