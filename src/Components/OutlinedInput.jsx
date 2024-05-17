import { FormControl, FormGroup, FormHelperText, FormLabel, IconButton, TextField } from '@mui/material';
import React from 'react';

function OutlinedInput({ label, placeholder, startIcon, endIcon, type }) {
    return (
        <FormControl fullWidth component="fieldset" margin="normal">
            <FormLabel component="legend" color="primary">
                {label}
            </FormLabel>
            <FormGroup>
                <TextField
                    type={type || 'text'}
                    InputProps={{
                        startAdornment: startIcon || null,
                        endAdornment: endIcon ? (
                            <IconButton variant="text" size="small" color="inherit">
                                {endIcon}
                            </IconButton>
                        ) : null,
                    }}
                    placeholder={placeholder}
                    variant="outlined"
                    size="small"
                />
            </FormGroup>
            <FormHelperText></FormHelperText>
        </FormControl>
    );
}

export default OutlinedInput;
