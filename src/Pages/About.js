import React from 'react'
import Layout from '../Components/Layout/Layout'
import { Box, Typography } from '@mui/material'

const About = () => {
  return (
    <Layout>
        <Box sx={{
          my: 5,
          textAlign: "center",
          padding: 2,
          "& h4":{
            fontWeight: 'bold',
            my: 2,
            fontSize: "2 rem",
          },
          "& p": {
            textAlign: "justify"
          },
          "@media (max-width: 600px)":{
            mt: 0,
            "& h4": {
              fontSize: '1.5rem',
            }
          }
        }}>
          <Typography variant='h4'>
            Welcome to my Business
          </Typography>
          <p>
          Welcome to Business XYZ, where innovation meets excellence in providing cutting-edge solutions tailored to meet your needs. With a steadfast commitment to delivering unparalleled quality and service, Business XYZ stands as a beacon of reliability in today's dynamic marketplace. 
          </p>
         
          <p>
          At Business XYZ, we understand that every client is unique, which is why we pride ourselves on our ability to craft bespoke strategies that drive success. Whether you're a startup seeking guidance on market entry or an established corporation aiming to optimize operations, our team of seasoned professionals is dedicated to guiding you towards achieving your objectives. 
          </p>
          
          <p>
          With years of industry experience under our belt, we have honed our expertise across various sectors, including technology, finance, healthcare, and beyond. Our multidisciplinary approach ensures that we can tackle even the most complex challenges with finesse, offering comprehensive solutions that are both innovative and pragmatic.
          </p>
          <br />
          <p>
          Transparency and integrity form the bedrock of our business ethos. We believe in fostering long-term partnerships built on trust and mutual respect. Our commitment to open communication means that you can rely on us to be transparent every step of the way, providing clear insights and recommendations to empower your decision-making process.
          </p>
          <p>
          At Business XYZ, we don't just meet expectations; we exceed them. Our relentless pursuit of excellence drives us to continuously evolve and adapt to ever-changing market dynamics. Join us on the journey towards success, and let's unlock the full potential of your business together.
          </p>
        </Box>
    </Layout>
  )
}

export default About