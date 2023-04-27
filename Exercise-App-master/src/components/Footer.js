import React from 'react'
import {Box, Stack, Typography} from '@mui/material'
import {Link} from 'react-router-dom'
import Logo from '../assets/images/Logo.png'

const Footer = () => {
  return (
    <Box mt="80px" bgcolor='rgb(26,23,23)'>
      <Stack gap='40px' alignItems='center' px='40px' pt='24px'>
        <Link to='/'><img src={Logo} alt='logo' width='300px' height='150px' /></Link>
        <Typography variant='h5' pb='30px' mt='10px'>
          Made by Jack_Nap_Joker
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer
