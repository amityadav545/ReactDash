import React from 'react'
import '../Login/login.scss';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
export default function Login(props) {

    const theme = createTheme();
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };



    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>

                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label={props.placeholder}
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <Button
                            style={{ display: props.Display }}
                            type="submit"

                            variant="contained"
                            sx={{ mt: 1, mb: 1 }}
                        >
                            {props.buttonvalue2}
                        </Button>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label={props.password}
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            {props.buttonvalue}
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link to={props.link1} variant="body2" style={{ cursor: 'pointer' }}>
                                    {props.linkvalue1}
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link to={props.link2} variant="body2" style={{ cursor: 'pointer' }}>
                                    {props.linkvalue2}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>

            </Container>
        </ThemeProvider >
    )
}
