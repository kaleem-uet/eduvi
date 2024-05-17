
import { Box, Paper, Typography, Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../Assets/Images/logo.svg';

function Card({ title, horizontal, link }) {
    return (
        <Paper variant="outlined">
            <Box
                padding={2}
                display="flex"
                flexDirection="column"
                alignItems={horizontal ? 'flex-start' : 'center'}
                justifyContent="center"
            >
                {horizontal ? null : <img src={logo} width="80" alt="" />}
                <Typography variant="h4" marginY={2} fontWeight="bold" color="inherit">
                    {title}
                </Typography>
                <Typography
                    variant="subtitle2"
                    textAlign={horizontal ? 'left' : 'center'}
                    marginBottom={2}
                    color="grey"
                >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet repellendus praesentium, possimus
                    labore error veritatis? Exercitationem soluta commodi natus nihil, dolorem adipisci eveniet maiores
                    est, at minima asperiores nobis. Ex.
                </Typography>
                <Link to={link}>
                    <Button variant="outlined" color="primary">
                        Details
                    </Button>
                </Link>
            </Box>
        </Paper>
    );
}

export default Card;
