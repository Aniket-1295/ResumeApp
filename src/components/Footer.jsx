import React from 'react'
import { Box, Typography, useTheme } from "@mui/material";


const Footer = () => {

  const theme = useTheme();
  const main = theme.palette.primary.main;
  return (
    // <div>Footer</div>
    <footer>
      <Box
        backgroundColor={theme.palette.background.alt}
        width="100%"
        maxWidth="98%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        p="1rem"
        m="0.5rem auto"
        borderRadius="8px"
      >
        <Typography variant="p" color={main} textAlign="center">
          <span color="#000">All Rights Reserved ©</span> ResumeBuilder
        </Typography>
      </Box>
    </footer>
  )
}

export default Footer