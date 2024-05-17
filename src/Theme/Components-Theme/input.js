import { customPrimaryColors, customSecondaryColors } from '../customColors';

export const inputTextField = {
    defaultProps: {
        fullWidth: true,
    },
    styleOverrides: {
        root: {
            fontSize: '.5rem',
        },
    },
};

export const input = {
    defaultProps: {
        disableUnderline: true,
    },
    styleOverrides: {
        root: {},
        input: {
            padding: '0',
            fontSize: '.8rem',
            '&::placeholder': {
                fontWeight: 'bold',
                fontSize: '.8rem',
            },
        },
        colorSecondary: {
            color: customSecondaryColors.light,
            fontWeight: 'bold',
        },
    },
};

export const formLabel = {
    styleOverrides: {
        root: {
            margin: '5px 0',
            fontSize: '.9rem !important',
            color: customPrimaryColors.light,
            fontWeight: 'bold',
        },
        colorSecondary: {
            color: customSecondaryColors.light,
        },
    },
};

export const inputTextOutlinedInput = {
    defaultProps: {
        disableUnderline: true,
    },
    styleOverrides: {
        root: {
            borderRadius: '10px',
        },
        input: {
            padding: '1rem',
            fontSize: '.8rem',
            '&:focus': {},
            '&::placeholder': {
                fontWeight: 'bold',
            },
        },
        colorSecondary: {
            backgroundColor: customPrimaryColors.light,
        },
    },
};
export const inputTextFilledInput = {
    defaultProps: {
        disableUnderline: true,
    },
    styleOverrides: {
        root: {
            borderRadius: '10px',
            padding: '0 5px',
        },
        input: {
            padding: '1rem 2rem',
            color: 'white',
            fontSize: '.7rem',
            '&:focus': {},
            '&::placeholder': {
                fontWeight: 'bold',
            },
        },
        colorSecondary: {
            backgroundColor: customPrimaryColors.light,
        },
    },
};
