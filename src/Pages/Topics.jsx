import Card from '../Components/Card';
import PrimaryCard from '../Components/PrimaryCard';
import { Container, Grid, Typography, Button, Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

import subjectsImg from '../Assets/Images/subjects.png';

function Topics({ dashboard }) {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <PrimaryCard padding="2rem 4rem">
                        <Grid container>
                            <Grid item xs={6} display="flex" alignItems="center" justifyContent="center">
                                <Typography variant="h1" fontWeight="bold" color="primary.light">
                                    All Topics
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <img src={subjectsImg} width="100%" alt="" />
                            </Grid>
                            <Grid item xs={2}></Grid>
                        </Grid>
                    </PrimaryCard>
                </Grid>
                <Grid item xs={12}>
                    <Box display="flex" justifyContent="space-between">
                        <Typography variant="h2" color="primary.light">
                            Topics
                        </Typography>
                        {dashboard ? (
                            <Link to="/teacher/addtopic">
                                <Button variant="contained" color="primary">
                                    Add Topic
                                </Button>
                            </Link>
                        ) : null}
                    </Box>
                </Grid>
                {[...Array(5)].map((i, index) => (
                    <Grid key={index} item xs={12}>
                        <Card title={`Card ${index}`} horizontal link={`/topic/${index}`} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default Topics;
