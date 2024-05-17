import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import PrimaryCard from '../Components/PrimaryCard';
import Slider from '../Common/Slider/Slider';
import NewsLetter from '../Common/Newsletter/NewsLetter';

export default function Topic(props) {
    return (
        <>
            <Container>
                <Grid container p={2}>
                    <Grid item xs={12}>
                        <PrimaryCard>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Slider />
                                </Grid>
                            </Grid>
                        </PrimaryCard>
                    </Grid>
                    <Grid item xs={8}>
                        <Box paddingY={4}>
                            {[
                                {
                                    title: 'Course Details',
                                },
                                {
                                    title: 'Certification',
                                },
                                {
                                    title: 'Who this course is for',
                                },
                            ].map((el, i) => (
                                <Box key={i} marginY={1}>
                                    <Typography variant="h1" marginBottom={2} color="primary.light">
                                        {el.title}
                                    </Typography>
                                    <Typography variant="subtitle1" color="primary.light">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua.
                                    </Typography>
                                    <Typography variant="subtitle1" color="primary.light">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                        gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis consectetur
                                        adipiscing elit.
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </Grid>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={12}>
                        <NewsLetter />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}
