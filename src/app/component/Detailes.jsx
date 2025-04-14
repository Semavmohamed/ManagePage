
"use client";
import { Box, Container, Grid, Typography } from "@mui/material";

const features = [
    { number: "01", title: "Track company-wide progress", description: "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again." },
    { number: "02", title: "Advanced built-in reports", description: " Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed." },
    { number: "03", title: " Everything you need in one place", description: "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution." },
];

export default function FeatureSection() {
    return (
        <Container maxWidth="lg" sx={{ mt: 10 }}>
            <Grid
                container
                spacing={4}
                alignItems="center"
                justifyContent="space-between"
                sx={{ marginTop: "50px" }}
            >
                <Grid item xs={12} sm={12} md={6}>
                    {/* the define */}
                    <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, justifyContent: "space-between", width: "100%" }}>
                        <Box sx={{
                            flex: "1",
                            padding: "50px 100px 0px 28px",
                            textAlign: { xs: "center", md: "left" } // Corrected here
                        }}>
                            <Typography variant="h3"
                                sx={{
                                    fontSize: "40px",
                                    fontWeight: "bold",
                                    color: "hsl(228, 39%, 23%)",
                                    // textAlign: { xs: "center", md: "left" }
                                }}>
                                What’s different about Manage?
                            </Typography>
                            <Typography variant="body1"
                                sx={{
                                    mt: 2,
                                    color: "gray",
                                    lineHeight: '2',
                                    width: "320px",
                                    // textAlign: { xs: "center", md: "left" }
                                }}>
                                Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.
                            </Typography>
                        </Box>
                        {/* the list */}
                        <Box sx={{ py: 10, paddingTop: "40px", flex: "1" }}>
                            <Grid container spacing={3}>
                                {features.map((feature, index) => (
                                    <Grid item xs={12} sm={12} md={6} key={index}>
                                        <Box sx={{ display: "flex", alignItems: "baseline", marginBottom: "30px" }}>
                                            {/* the number  */}

                                            <Box sx={{ paddingRight: { md: "10px", xs: "0px" }, marginRight: { md: "20px", xs: "0px" } }}>
                                                <Typography variant="h3" sx={{
                                                    backgroundColor: "hsl(12, 88%, 59%)",
                                                    textAlign: "center",
                                                    padding: "8px 20px",
                                                    borderRadius: "21px",
                                                    fontSize: "15px", color: "white", fontWeight: "bold",
                                                }}>
                                                    {feature.number}
                                                </Typography>
                                            </Box>
                                            {/* the title                                    */}
                                            <Box>
                                                <Typography variant="h6" sx={{ fontWeight: "bold", fontSize: "18px", backgroundColor: { xs: "hsl(12deg 87.6% 58.8% / 19%)", md: "transparent" }, padding: { xs: "0px 10px", md: "0px" }, borderRadius: { xs: "20px" } }}>
                                                    {feature.title}
                                                </Typography>
                                                <Typography variant="body1" sx={{ color: "gray", mt: 2, fontSize: "14px" }}>
                                                    {feature.description}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}
