"use client";
import { Box, Typography } from "@mui/material";
import MainButton from './Buttons'; // تأكد من استيراد الزر بشكل صحيح

export default function SBEnd() {
    return (
        <Box sx={{
            backgroundColor: "hsl(12, 88%, 59%)",
            display: {xs:"block",md:"flex"},
            justifyContent: "space-around",
            padding: "50px",
            textAlign:{md:"none",xs:"center"}
        }}>
            <Typography variant="h5" sx={{
                color: "white", fontWeight: "bold", fontSize: "27px",
                width: {md:"33%",xs:"90%"},
                marginBottom:{md:"0px",xs:"30px"}
            }}>
                Simplyfiy How your Team Works Today.
            </Typography>

            {/* زر مع تغيير الخلفية فقط */}
            <MainButton
                text="Get Started"
                sx={{
                    backgroundColor: "white", // تغيير خلفية الزر هنا فقط
                    color: "#f3613c",
                    height: "100%",
                    "&:hover": {
                        backgroundColor: "#f4c5ba"
                    }, // تغيير لون النص في الزر
                }}
            />
        </Box>
    );
}
