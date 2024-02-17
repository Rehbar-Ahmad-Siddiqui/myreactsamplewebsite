import React from 'react';
import { Box, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <>
    <Box sx={{textAlign: 'center', bgcolor: '#1A1A19', color:'white', p:3 }}>
    <Box sx={{my:3, "& svg": {
        fontSize:"40px",
        cursor:"pointer",
        mr: 2,
        },
        "& svg:hover": {
          color: 'goldenrod',
          transform: 'translateY(5px)',
          transition:'all 400ms',
        }
    }}>
       <InstagramIcon />
       <FacebookIcon />
       <YouTubeIcon />
       <XIcon />
       <GitHubIcon />
    </Box>
    <Typography variant='h5' sx={{"@media (max-width: 600px)": {
        fontSize: "0.75rem",
    }}}>
        All Rights Reserved &copy; Er. Rehbar Ahmad Siddiqui
    </Typography>
    </Box>
    </>
  )
}

export default Footer