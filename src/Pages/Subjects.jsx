import Card from '../Components/Card';
import PrimaryCard from '../Components/PrimaryCard';
import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';

import subjectsImg from '../Assets/Images/subjects.png';

function Subjects({ dashboard }) {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <PrimaryCard padding="2rem 4rem">
                        <Grid container>
                            <Grid item xs={6} display="flex" alignItems="center" justifyContent="center">
                                <Typography variant="h1" fontWeight="bold" color="primary.light">
                                    All Subjects
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
                    <Typography variant="h2" color="primary.light">
                        Subjects
                    </Typography>
                </Grid>
                {[...Array(5)].map((i, index) => (
                    <Grid key={index} item xs={12} md={6} lg={3}>
                        <Card
                            title={`Card ${index}`}
                            link={dashboard ? `/teacher/subject/${index}` : `/topics/${index}`}
                        />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default Subjects;
