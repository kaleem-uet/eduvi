import { customPrimaryColors, customSecondaryColors } from '../customColors';
import { fontFamilies } from './typography';
export const muiButton = {
    styleOverrides: {
        containedPrimary: {
            color: 'white',
        },
        containedSecondary: {
            color: 'white',
        },
        textSecondary: {},
        fullWidth: {
            maxWidth: '100%',
        },
        sizeSmall: {
            padding: '10px',
        },
        sizeMedium: {
            padding: '1rem 2rem',
            maxWidth: '200px',
        },
        root: {
            fontFamily: fontFamilies.Metrophobic,
            whiteSpace: 'nowrap',
            lineHeight: 1,
        },
    },
    defaultProps: {
        disableElevation: true,
    },
};
