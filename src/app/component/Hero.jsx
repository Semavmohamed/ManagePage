
"use client";
import * as React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Mbutton from "./Buttons";
import SampleImage from "../images/illustration-intro.svg"; // استبدلها بالصورة الخاصة بك

export default function HeroSection() {
  return (
    <Box sx={{ position: "relative", overflow: "hidden" }}>
      {/* الخلفية الدائرية التي تغطي الصفحة بالكامل */}
      <Box
        sx={{
          position: "fixed", // يجعل الدوائر تمتد على الصفحة بأكملها
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: -1, // يجعلها في الخلف
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: " absolute",
            top: "28%",
            left: "91%",
            transform: " translate(-50%, -50%) rotate(-53deg)",
            width: "832px",
            height: " 332px",
            backgroundColor: "hsl(12, 88%, 59%)",
            borderRadius: " 300px",
            opacity: " 0.3",
            zIndex: "-1",
          }}
        />
        <Box
          sx={{
            position: " absolute",
            display: { xs: "none", md: 'block' },
            top: " 119%",
            left: " -5%",
            transform: " translate(-50%, -50%) rotate(-53deg)",
            width: "878px",
            height: " 332px",
            backgroundColor: "hsl(12, 88%, 59%)",
            borderRadius: " 300px",
            opacity: " 0.3",
            zIndex: "-1",
          }}
        />
      </Box>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="space-between" 
          direction={{ xs: "column", md: "row" }}
        >
          {/* the paragraph */}
          <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }} >
              <Box sx={{
                padding: " 50px 100px 0px 28px",
              }}>
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: "50px",
                    fontWeight: "bold",
                    color: "hsl(228, 39%, 23%)",
                    textAlign: { xs: "center", md: "left" }
                  }}
                >
                  Bring everyone together to build better products
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    mt: 2,
                    color: "gray",
                    textAlign: { xs: "center", md: "left" }
                  }}
                >
                  Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.
                </Typography>
                <Box sx={{ mt: 3, textAlign: { xs: "center", md: "left" }, }}
                  xs={12} md={6}>
                  <Mbutton text="Get Started" />
                </Box>
              </Box>
                              {/* الصورة */}
              <Box >
                <Box sx={{textAlign:"center",order: { xs: 1, md: 0 } }}  >
                  <Image
                    src={SampleImage}
                    alt="Sample"
                    style={{
                      width: "1000px",
                       maxWidth: "100%", height: "auto", paddingLeft: "40px"
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}



