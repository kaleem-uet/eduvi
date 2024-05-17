import { styled } from '@mui/material';

export const PrimaryCardWrapper = styled('div', {
    shouldForwardProp: (prop) => prop !== 'marginx' && prop !== 'marginy' && prop !== 'padding',
})(({ theme, marginx, marginy, padding }) => ({
    backgroundColor: '#EFEBF5',

    borderRadius: theme.shape.borderRadius,
    marginLeft: `${marginx}px`,
    marginRight: `${marginx}px`,
    marginTop: `${marginy}px`,
    marginBottom: `${marginy}px`,
    padding: padding ? padding : '1rem',

    [theme.breakpoints.down('md')]: {
        padding: '.5rem' || `calc(${padding}px / 2)`,
    },
}));
