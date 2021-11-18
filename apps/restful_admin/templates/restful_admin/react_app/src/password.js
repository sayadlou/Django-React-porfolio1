// in src/Foo.js
import * as React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {Title} from 'react-admin';
import {Box, Button, InputLabel, TextField, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {useRef, useState} from "react";
import zxcvbn from 'zxcvbn';
import axios from "axios";
import {useAuthenticated, useNotify} from 'react-admin';


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));
const Foo = () => {
        useAuthenticated();
        const classes = useStyles();
        const [repeatValid, seRepeatVail] = useState(false)
        const [passValid, setPassVaild] = useState(false)
        const [repeatValidText, seRepeatValidText] = useState("")
        const [passValidText, sePassValidText] = useState("")
        const [password, setPassword] = useState("")
        const [passwordRepeat, setPasswordRepeat] = useState("")
        const notify = useNotify();

        function onPasswordChange(e) {
            setPassword(e.target.value)
            if (e.target.value === "") {
                setPassVaild(false)
                sePassValidText("")
            }
            if (e.target.value !== passwordRepeat) {
                seRepeatVail(true)
                seRepeatValidText("Not Equal")
            } else {
                seRepeatVail(false)
                seRepeatValidText("")
            }
        }

        function onRepeatChange(e) {
            setPasswordRepeat(e.target.value)
            if (e.target.value === "") {
                seRepeatVail(false)
                seRepeatValidText("")
            }
            if (password !== e.target.value) {
                seRepeatVail(true)
                seRepeatValidText("Not Equal")
            } else {
                seRepeatVail(false)
                seRepeatValidText("")
            }
        }

        async function sendPassword() {
            const formData = new FormData();
            formData.append("password", password)
            const token = localStorage.getItem('token');

            const result = await axios.put(
                'https://mrsaberi.herokuapp.com/admin/apiv1/password/1/',
                formData,
                {
                    headers: {"Authorization": `Token ${token}`}
                }
            )
            if (result.status === 200) {
                notify("password Changed", {type: 'success'});
            } else {
                notify("password did not Chang", {type: 'warning'});
            }
        }

        function OnFormSubmit() {
            if (password !== passwordRepeat) return;
            const strength = zxcvbn(password).score;

            if (strength <= 3) {
                alert("Please choose a stronger password");
            } else {
                sendPassword()
            }
        }

        return <Card>
            <Title title="My Page"/>
            <CardContent>
                <form
                    className={classes.root}
                    autoComplete="off"
                >
                    <Box style={{minHeight: "100px"}}>
                        <TextField
                            onChange={onPasswordChange}
                            required
                            type="password"
                            id="standard-required"
                            label="Password"
                            value={password}
                            helperText={passValidText}
                            error={passValid}
                        />
                        <TextField
                            onChange={onRepeatChange}
                            required
                            type="password"
                            value={passwordRepeat}
                            id="standard-required"
                            label="Repeat Password"
                            error={repeatValid}
                            helperText={repeatValidText}
                        />
                    </Box>
                    <Button onClick={OnFormSubmit} variant="contained" color="primary">
                        Save
                    </Button>

                </form>
            </CardContent>
        </Card>

    }
;

export default Foo;