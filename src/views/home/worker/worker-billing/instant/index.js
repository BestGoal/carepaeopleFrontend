import React from "react"
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import Slider from '@material-ui/core/Slider';
import { withStyles } from '@material-ui/core/styles';

function AirbnbThumbComponent(props) {
    return (
        <span {...props}>
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
        </span>
    );
}

const AirbnbSlider = withStyles({
    root: {
        color: '#2b82eb',
        height: 3,
        padding: '13px 0',
    },
    thumb: {
        height: 27,
        width: 27,
        backgroundColor: '#fff',
        border: '1px solid currentColor',
        marginTop: -12,
        marginLeft: -13,
        boxShadow: '#ebebeb 0 2px 2px',
        '&:focus, &:hover, &$active': {
            boxShadow: '#ccc 0 2px 3px 1px',
        },
        '& .bar': {
            height: 9,
            width: 1,
            backgroundColor: 'currentColor',
            marginLeft: 1,
            marginRight: 1,
        },
    },
    active: {},
    track: {
        height: 3,
    },
    rail: {
        color: '#d8d8d8',
        opacity: 1,
        height: 3,
    },
})(Slider);

export default function SetAvailable() {

    const [mode, SetMode] = React.useState(true)

    return (
        <Container className="mt-4 worker-setting-available">
            <Box className="pb-1">
                <Typography className="text-align-center font-weight-bold" variant="h5"> INSTANT PAY </Typography>
            </Box>
            <Box className="d-flex justify-content-between align-items-center theme-border theme-box-shadow theme-border-radius p-1">
                <Typography>Enable Automatic StaffyPay</Typography>
                <Box className="btn-home">
                    <Button onClick={() => SetMode(!mode)} className={!mode ? "on-btn": ""}>On</Button>
                    <Button onClick={() => SetMode(!mode)} className={mode ? "bg-theme color-white off-btn":""}>Off</Button>
                </Box>
            </Box>
        </Container>
    )
}