import { Box, Paper, styled, Typography, Button, TextField, FormGroup } from '@mui/material';
import React from 'react';

import newsletterbg from '../../Assets/Images/newsletterbg.png';

const NewsLetterWrapper = styled(Paper)(({ theme }) => ({
    padding: '3rem 2rem',

    background: `url(${newsletterbg}) no-repeat`,
    backgroundColor: theme.palette.primary.light,
    backgroundSize: '100%',
    backgroundPosition: 'center',
}));

const NewsLetterInput = styled(TextField)(({ theme }) => ({
    backgroundColor: theme.palette.grey[700],
    borderRadius: theme.shape.borderRadius,
    opacity: 0.7,
}));

function NewsLetter() {
    return (
        <NewsLetterWrapper>
            <Box display="flex" flexDirection="column" alignItems="center">
                <>
                    <Typography variant="h1" fontWeight="bold" color="secondary.white">
                        Subscribe For Get Update
                    </Typography>
                    <Typography variant="h1" fontWeight="bold" color="secondary.white">
                        Every New Courses
                    </Typography>
                </>

                <Typography marginY={3} variant="subtitle2" color="grey">
                    20k+ students daily learn with Eduvi. Subscribe for new courses.
                </Typography>
                <FormGroup row>
                    <NewsLetterInput
                        size="small"
                        InputProps={{
                            endAdornment: (
                                <Button
                                    sx={(theme) => ({
                                        fontWeight: 'bold',
                                        fontSize: '.8rem',
                                        textTransform: 'capitalize',
                                        background: theme.palette.primary.dark,
                                    })}
                                    variant="contained"
                                    size="medium"
                                >
                                    Subscribe
                                </Button>
                            ),
                        }}
                        variant="filled"
                        placeholder="Type your answer here"
                    />
                </FormGroup>
            </Box>
        </NewsLetterWrapper>
    );
}

export default NewsLetter;
