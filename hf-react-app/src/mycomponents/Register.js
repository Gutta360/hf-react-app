import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Stack } from '@mui/material';

const Register = () => {
    const tabcontent = {
        backgroundColor: 'rgb(66,73,73)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '66vh'
    }

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event) => {
        event.preventDefault();
    };

    return (
        <div style={tabcontent}>
            <Stack
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                noValidate
                autoComplete="off"
            >
                <TextField

                    sx={{
                        // Default underline
                        '& .MuiInput-underline:before': {
                            borderBottomColor: 'white', // Default underline color
                        },
                        // Hover underline
                        '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                            borderBottomColor: 'white', // Hover underline color
                        },
                        // Focused underline
                        '& .MuiInput-underline:after': {
                            borderBottomColor: 'white', // Focused underline color
                        },
                        '& .MuiInputLabel-root': {
                            color: 'white', // Default label color
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                            color: 'white', // Focused label color
                        },
                        '& .MuiFormHelperText-root': {
                            color: 'white', // Helper text color
                        },
                        // Change the color of the entered text
                        '& .MuiInput-root': {
                            '& input': {
                                color: 'white', // Text color of the input
                            }
                        }
                    }}

                    id="standard-basic" label="Username" variant="standard" />
                <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                    <Input
                        id="standard-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        sx={{
                            // Change the text color to white
                            input: {
                                color: 'white',
                            },
                            // Change the placeholder color to white
                            '& .MuiInputBase-input::placeholder': {
                                color: 'white',
                            },
                            // Change the border color to white
                            '& .MuiInput-underline:before': {
                                borderBottomColor: 'white',
                            },
                            // Change the border color on hover
                            '&:hover .MuiInput-underline:before': {
                                borderBottomColor: 'white',
                            },
                            // Change the border color when focused
                            '& .MuiInput-underline:after': {
                                borderBottomColor: 'white',
                            },
                            // Change the label color to white
                            '& .MuiInputLabel-root': {
                                color: 'white',
                            },
                            // Change the label color when focused
                            '& .MuiInputLabel-root.Mui-focused': {
                                color: 'white',
                            },
                            // Change the color of the adornment icon (visibility toggle)
                            '& .MuiSvgIcon-root': {
                                color: 'white',
                            },
                        }}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    onMouseUp={handleMouseUpPassword}
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
            </Stack>
        </div>
    )
}

export default Register