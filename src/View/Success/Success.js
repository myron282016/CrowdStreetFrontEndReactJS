import React from 'react';
import { createTheme, ThemeProvider, Box, Container, CssBaseline, Typography } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const theme = createTheme();

export default function Success(props) {
    var qualifiedData = localStorage.getItem("qualifiedData");
    return (
        <>
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 5,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            boxShadow: 3,
                            bgcolor: 'background.paper',
                            p: 2,
                            justifyContent: 'center'
                        }}
                    >
                        <CheckCircleOutlineIcon style={{ fill: "green", fontSize:40}} />
                        <Box
                            sx={{ m: 2 }}
                        >
                            <Typography className="youQualified">
                                {qualifiedData}
                            </Typography>
                            
                        </Box>
                        <Box
                            sx={{ m: 2 }}
                        >
                        <Typography className="thanksMessage">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </Typography>    
                        </Box>
                    </Box>


                </Container>
            </ThemeProvider>
        </>
    )
}
