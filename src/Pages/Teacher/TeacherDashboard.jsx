import Card from '../../Components/Card';
import { Box, Grid, Typography, Button, Paper, Stack, Container } from '@mui/material';
import React from 'react';

function TeacherDashboard({ children }) {
    return (
        <Container>
            <Grid container>
                <Grid item xs={12}>
                    <Box padding={2}>
                        <Typography variant="h2" marginBottom={2} fontWeight="bold" color="primary.light">
                            Dashboard
                        </Typography>
                        <Box paddingY={2}>{children}</Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}

export default TeacherDashboard;
