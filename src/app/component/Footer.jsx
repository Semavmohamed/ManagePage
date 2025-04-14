'use client';

import {
    Box,
    Container,
    Grid,
    Typography,
    TextField,
    IconButton,
    Stack,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import Logo from '../images/logo.svg';
import Image from 'next/image';
import { useState } from 'react';
import MButton from './Buttons';

export default function Footer() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = () => {
        const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        if (!isValidEmail) {
            setError(true);
        } else {
            setError(false);
            console.log('Valid Email:', email);
            setEmail('');
        }
    };

    return (
        <Box component="footer" sx={{ bgcolor: '#1d1e25', color: 'white', py: 6 }}>
            <Container maxWidth="lg" sx={{ padding: "40px" }}>
                <Grid container spacing={4} justifyContent="space-between" alignItems="flex-start" sx={{ textAlign: "center", justifyContent: { xs: "center", md: "space-between" } }}>
                    {/* Subscribe Form */}
                    <Grid item xs={12} md={3} sx={{ order: { xs: 1, md: 3 } }}>
                        <Stack direction="row" spacing={1}>
                            <TextField
                                variant="filled"
                                placeholder="Updates in your inbox…"
                                size="small"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                error={error}
                                helperText={error ? 'Please insert a valid email' : ''}
                                InputProps={{
                                    disableUnderline: true,
                                    sx: {
                                        bgcolor: 'white',
                                        borderRadius: '24px',
                                        px: 1,
                                        color: 'hsl(12, 88%, 59%)',
                                        '&::placeholder': {
                                            color: 'hsl(12, 88%, 59%)',
                                            opacity: 1,
                                        },
                                        '&.Mui-focused': {
                                            bgcolor: 'white',
                                            color: "hsl(12, 88%, 59%)"
                                        },
                                        '&:hover': {
                                            bgcolor: 'white',
                                            color: "hsl(12, 88%, 59%)"
                                        },
                                    },
                                }}
                                inputProps={{
                                    style: { color: '#282626', padding: "11px" },
                                }}
                                sx={{ flexGrow: 1 }}
                            />
                            <MButton onClick={handleSubmit} type="button" text="Go" />
                        </Stack>
                    </Grid>
                    <Grid item xs={6} sm={4} md={3} sx={{ display: "flex", justifyContent: "space-between", gap: "100px", order: { xs: 2, md: 2 }, padding: { xs: " 0px 29px" } }}>
                        {/* Navigation Links 1 */}
                        <Stack spacing={1} sx={{ alignItems: 'flex-start' }}>
                            {['Home', 'Pricing', 'Products', 'About Us'].map((text) => (
                                <Typography
                                    key={text}
                                    sx={{
                                        cursor: 'pointer',
                                        transition: 'color 0.3s',
                                        '&:hover': { color: '#f25f3a' },
                                        textAlign: { xs: 'center', md: 'left' },
                                    }}
                                >
                                    {text}
                                </Typography>
                            ))}
                        </Stack>
                        {/* Navigation Links 2 */}
                        <Stack spacing={1} sx={{ alignItems: 'flex-start' }}>
                            {['Careers', 'Community', 'Privacy Policy'].map((text) => (
                                <Typography
                                    key={text}
                                    sx={{
                                        cursor: 'pointer',
                                        transition: 'color 0.3s',
                                        '&:hover': { color: '#f25f3a' },
                                        textAlign: { xs: 'center', md: 'left' },
                                    }}
                                >
                                    {text}
                                </Typography>
                            ))}
                        </Stack>
                        {/* </Grid> */}
                    </Grid>
                    {/* Logo and Social Icons */}
                    <Grid item xs={12} md={3} sx={{ order: { xs: 4, md: 1 } }}>
                        <Stack direction="column" sx={{ flexGrow: 1 }}>
                            <Box sx={{ order: { xs: 2, md: 1 } }} >
                                <Image src={Logo} alt="Logo" />
                            </Box>
                            <Stack direction="row" mb={4} sx={{ order: { xs: 1, md: 2 } }} >
                                {[FacebookIcon, TwitterIcon, YouTubeIcon, InstagramIcon, PinterestIcon].map(
                                    (Icon, index) => (
                                        <IconButton
                                            key={index}
                                            sx={{
                                                color: 'white',

                                                transition: 'color 0.3s',
                                                '&:hover': { color: '#f25f3a' },
                                            }}
                                            color="inherit"
                                        >
                                            <Icon sx={{ fontSize: { xs: "50px", md: "30px" }, }} />
                                        </IconButton>
                                    )
                                )}
                            </Stack>
                        </Stack>
                    </Grid>
                </Grid>

                {/* Bottom text */}
                <Box textAlign="center" sx={{ display: 'flex', justifyContent: 'end', mt: 4 }}>
                    <Typography variant="body2" color="gray" sx={{ margin: "auto" }}>
                        &copy; 2025 Manage. All rights reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}
