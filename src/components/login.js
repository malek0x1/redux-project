import React, { useState } from 'react';
import Logo from "../logo.svg";
import '../css/login.css';

import {
    Grid,
    TextField,
    Paper,
    Button
} from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { login } from './redux/postSlice';


const LoginPage = () => {
    const [user, setUser] = useState("");
    const [pwd, setPwd] = useState("");

    const dispatch = useDispatch();
    return (
        <div style={{ padding: 30 }}>
            <Paper>
                <Grid
                    container
                    spacing={3}
                    direction={'column'}
                    justify={'center'}
                    alignItems={'center'}
                >                <img alt='img' src={Logo} width="200px" />


                    <Grid item xs={12}>
                        <TextField onChange={(e) => setUser(e.target.value)} label="Username"></TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField onChange={(e) => setPwd(e.target.value)} label="Password" type={'password'}></TextField>
                    </Grid>

                    <Grid item xs={12}>
                        <Button variant="contained" style={{ backgroundColor: 'black', color: 'white' }} onClick={() => dispatch(login({ username: user, password: pwd }))} fullWidth> Login </Button>
                        <p className='msg'>user: malek & password: malek</p>
                </Grid>
            </Grid>
        </Paper>
        </div >
    );
};

export default LoginPage;
