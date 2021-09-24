import React from 'react'
import { createTheme, ThemeProvider, Box, Container, CssBaseline, Typography } from '@mui/material';
import DoNotDisturbAltIcon from '@mui/icons-material/DoNotDisturbAlt';

const theme = createTheme();

export default function Error() {
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
                                You are at Wrong url
                            </Typography>

                        </Box>
                        <Box
                            sx={{ m: 2 }}
                        >
                            <Typography className="thanksMessage">
                                Please Type the Correct Url
                            </Typography>
                        </Box>
                        <Box
                            sx={{

                            }}
                        >
                        </Box>
                    </Box>

                </Container>
            </ThemeProvider>
        </>
    )
}
