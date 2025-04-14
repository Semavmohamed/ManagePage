"use client";
import * as React from 'react';
import { Button } from '@mui/material';

export default function MainButton({ text, onClick,sx,type="button"}) {
  return (
    <>
      <Button
        onClick={onClick}
        type={type}
        sx={{
          color: "#fff"
          , backgroundColor: "hsl(12, 88%, 59%)",
          borderRadius: '35px',
          textTransform: 'capitalize',
          fontSize: "18px",
          padding: "11px 40px",
          fontSize: "13px",
          boxShadow:" 0px 7px 18px -2px hsl(12, 88%, 59%)" ,
          "&:hover": {
            boxShadow: "0px 2px 19px hsl(12, 88%, 59%)",
            backgroundColor: "hsl(12deg 87.38% 66.93% / 69)"
          },
          ...sx,
        }}
      >{text}</Button>
    </>

  );
}