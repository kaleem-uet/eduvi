import React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

export default function Dropdown({ children, title, noIcon }) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const Icons = open ? <ExpandLess /> : <ExpandMore />;

    return (
        <div>
            <Typography
                variant="subtitle1"
                sx={(theme) => ({
                    display: 'flex',
                    alignItems: 'center',
                    cursor: 'pointer',
                    color: theme.palette.text.primary,
                    padding: '0 .5rem',
                })}
                onClick={handleClick}
                // onMouseLeave={handleClose}
            >
                {title}
                {noIcon ? <></> : Icons}
            </Typography>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                PaperProps={{
                    // variant: "outlined",
                    elevation: 3,
                    onMouseLeave: () => handleClose(),
                    sx: {
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '1rem 1.5rem',
                    },
                }}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                {children}
            </Popover>
        </div>
    );
}
