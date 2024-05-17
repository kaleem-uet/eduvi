import OutlinedInput from '../../Components/OutlinedInput';
import { Grid, Typography, Button } from '@mui/material';
import React from 'react';
import TeacherDashboard from './TeacherDashboard';

function AddTopic() {
    return (
        <TeacherDashboard>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h4" color="primary.light">
                        Add Topic
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <OutlinedInput label={'Topic name'} />
                </Grid>
                <Grid item xs={6}>
                    <OutlinedInput label={'Topic Detail'} />
                </Grid>
                <Grid item xs={6}>
                    <OutlinedInput type="file" label={'Slides'} />
                </Grid>
                <Grid item xs={12} textAlign="right">
                    <Button variant="contained" color="primary">
                        Submit
                    </Button>
                </Grid>
            </Grid>
        </TeacherDashboard>
    );
}

export default AddTopic;
