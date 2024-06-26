import { Box, Container, Grid, Stack, styled, Typography } from '@mui/material';
import React from 'react';
import { Icon } from '@iconify/react';
import logo from '../../Assets/Images/logo.svg';
import FooterList from './FooterList';
import footerData from './footerlist.json';

const Icons = {
    options: {
        width: '25',
        color: '#0A033C',
    },
    icons: ['ri:facebook-fill', 'mdi:instagram', 'mdi:twitter', 'mdi:linkedin'],
};

const CustomIcon = styled(Icon)(({ theme }) => ({
    padding: '3px',
    borderRadius: 100,

    color: theme.palette.primary.light,

    transition: theme.transitions.create(['background-color', 'color', 'transform'], {
        duration: theme.transitions.duration.complex,
    }),

    ':hover': {
        color: 'white',
        transform: 'scale(1.2)',
        background: theme.palette.secondary.main,
    },
}));

function Footer() {
    return (
        <Container>
            <Grid container p={2} py={4}>
                <Grid item xs={2}>
                    <img src={logo} alt="" />
                    <Stack direction="row" spacing={0.5} marginTop={2}>
                        {Icons.icons.map((el, i) => (
                            <CustomIcon key={i} icon={el} width={Icons.options.width} />
                        ))}
                    </Stack>
                    <Box paddingY={2}>
                        <Typography variant="subtitle1" marginBottom={2} color="grey">
                            © 2021 Eduvi.co
                        </Typography>
                        <Typography variant="subtitle1" color="grey">
                            Eduvi is a registered trademark of Eduvi.co
                        </Typography>
                    </Box>
                </Grid>
                {footerData.map((el, i) => (
                    <Grid item key={i} xs={footerData.length == i + 1 ? 1 : 3}>
                        <FooterList title={el.title} list={el.list} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default Footer;
