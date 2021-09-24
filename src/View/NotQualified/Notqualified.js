import React from 'react'
import { createTheme, ThemeProvider, Box, Container, CssBaseline, Typography } from '@mui/material';
import DoNotDisturbAltIcon from '@mui/icons-material/DoNotDisturbAlt';

const theme = createTheme();


export default function Notqualified(props) {
    var notqualifiedData = localStorage.getItem("notqualifiedData");
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
                            p: 2
                        }}
                    >
                        <DoNotDisturbAltIcon style={{ fill: "green", fontSize: 40 }} />
                        <Box
                            sx={{ m: 2, mb :0 }}
                        >
                            <Typography className="youQualified">
                                {notqualifiedData}
                            </Typography>

                        </Box>
                        <Box
                            sx={{ m: 2 }}
                        >
                            <Typography className="thanksMessage">
                                Please Contact Support for Help!
                            </Typography>
                        </Box>
                    </Box>

                </Container>
            </ThemeProvider>
        </>
    )
}

