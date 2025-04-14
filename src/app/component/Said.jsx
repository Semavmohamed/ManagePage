
"use client";
import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import Mbutton from "./Buttons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Saidsection() {
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));

    const details = [
        {
            photo: "/images/avatar-anisha.png",
            name: "Anisha Li",
            say: "Manage has supercharged our team's workflow. The visibility on larger milestones keeps everyone motivated.",
        },
        {
            photo: "/images/avatar-ali.png",
            name: "Ali Bravo",
            say: "We’ve been able to cancel so many other subscriptions since using Manage. There’s no more cross-channel confusion and everyone is much more focused.",
        },
        {
            photo: "/images/avatar-richard.png",
            name: "Richard Watts",
            say: "Manage allows us to stay structured and organized. I can’t stop recommending it to everyone I talk to!",
        },
    ];

    return (
        <Container maxWidth="lg" sx={{ mt: 8, position: "relative" ,mb:8}}>
            <Typography
                variant="h4"
                align="center"
                sx={{ fontWeight: "bold", color: "hsl(228, 39%, 23%)", mb: "100px" }}
            >
                What they've said
            </Typography>

            {/* ✅ Show Grid only on medium and up */}
            {!isSmallScreen && (
                <Grid container justifyContent="center" spacing={4}>
                    {details.map((detail, index) => (
                        <Grid
                            item
                            key={index}
                            xs={12}
                            md={4}
                            sm={6}
                            sx={{ display: "flex", width: { md: "30%", xs: "100%" } }}
                        >
                            <Box
                                sx={{
                                    backgroundColor: "#eee",
                                    borderRadius: "12px",
                                    padding: 3,
                                    boxShadow: "0 2px 12px rgba(0, 0, 0, 0.1)",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    paddingTop: "30px",
                                }}
                            >
                                <img
                                    src={detail.photo}
                                    alt={detail.name}
                                    style={{
                                        width: "80px",
                                        height: "80px",
                                        borderRadius: "50%",
                                        objectFit: "cover",
                                        position: "relative",
                                        top: "-30%",
                                    }}
                                />
                                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                                    {detail.name}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{ color: "gray", textAlign: "center" }}
                                >
                                    "{detail.say}"
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            )}

            {/* ✅ Show Swiper only on small screens */}
            {isSmallScreen && (
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={20}
                    pagination={{ clickable: true }}
                    slidesPerView={1}
                    style={{ paddingBottom: "40px" }}
                    className="custom-pagination"
                >
                    {details.map((detail, index) => (
                        <SwiperSlide key={index}>
                            <Box
                                sx={{
                                    backgroundColor: "#eee",
                                    padding: 3,
                                    textAlign: "center",
                                    boxShadow: "0 2px 12px rgba(0, 0, 0, 0.1)",
                                    mt: 2,
                                    mx: 2,
                                }}
                            >
                                <img
                                    src={detail.photo}
                                    alt={detail.name}
                                    style={{
                                        width: "80px",
                                        height: "80px",
                                        borderRadius: "50%",
                                        objectFit: "cover",
                                        marginBottom: "16px",
                                        position: "relative",
                                        top: "-30%",
                                    }}
                                />
                                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                                    {detail.name}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{ color: "gray", textAlign: "center" }}
                                >
                                    "{detail.say}"
                                </Typography>
                            </Box>
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}

            {/* ✅ Button */}
            <Box sx={{ mt: 6, textAlign: "center" }}>
                <Mbutton
                    text="Get Started"
                    sx={{ }}
                />
            </Box>
        </Container>
    );
}
