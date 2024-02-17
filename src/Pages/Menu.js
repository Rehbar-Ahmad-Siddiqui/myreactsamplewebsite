import React from 'react';
import Layout from '../Components/Layout/Layout';
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { MenuList } from '../data/data';
import { Link } from 'react-router-dom';



const Menu = () => {
  return (
    <Layout>
        <Box sx={{display:"flex", flexWrap: "wrap", justifyContent: "center"}}>
          {
          MenuList.map( menu => (
            <Card sx={{maxWidth:'350px', display: "flex", m:2}}>
              <CardActionArea>
                <CardMedia sx={{minHeight:'400px'}} component={'img'} src={menu.image} alt={menu.name} />
                <CardContent >
                  <Typography variant='h5' gutterBottom component={'div'} sx={{ display:"flex", justifyContent:"center"}}>
                    {menu.name} at INR {menu.price} 
                  </Typography>
                  <Typography variant='body2'>
                    {menu.description}
                  </Typography>
                  <Link to="/contact">
                  <Button sx={{ color:'red', bgcolor:'skyblue', ml:'90px', mt:'10px', fontWeight: "bold"}} >Contact Us </Button>
                  </Link>
                </CardContent>
              </CardActionArea>
            </Card>
          ))
          }
        </Box>
    </Layout>
  )
}

export default Menu