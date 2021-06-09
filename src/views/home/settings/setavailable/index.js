import React , { useEffect, useState } from "react"
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

    const [mode, SetMode] = useState(true)
    // const [data, SetData] = useState([])

    useEffect(() => {
        let temp = [];
        temp.push({
            name: "",
            date: new Date().toLocaleDateString()
        })
    }, [])

    const data = [
        {
            name: "Today",
            date: "May 30th 2021",
        },
        {
            name: "Monday",
            date: "May 31th 2021",
        },
        {
            name: "Tuesday",
            date: "June 1th 2021",
        },
        {
            name: "Wednesday",
            date: "June 2th 2021",
        },
    ]

    return (
        <Container className="mt-1 mb-1">
            <Box className="pb-1">
                <Typography className="text-align-center font-weight-bold" variant="h5"> SET YOUR AVAILABILITY </Typography>
            </Box>
            <Box className="d-flex justify-content-between align-items-center theme-border theme-box-shadow theme-border-radius p-1">
                <Typography>RECURRING WEEKLY SCHEDULE</Typography>
                <Box>
                    <Button onClick={() => SetMode(!mode)} className={!mode ? "bg-gray color-gray" : ""}>On</Button>
                    <Button onClick={() => SetMode(!mode)} className={mode ? "bg-theme color-theme" : ""}>Off</Button>
                </Box>
            </Box>
            <Box className="mt-2">
                <Typography className="text-align-center font-weight-bold" variant="h5"> SELECT THE DAYS AND TIMING OF YOUR AVAILABILITY </Typography>
            </Box>
            {
                data.map((item, key) => (
                    <Grid key={key} container className="theme-border theme-border-radius p-1 mt-1">
                        <Grid item md={4} className="d-flex justify-content-between align-items-center">
                            <Box className="d-flex align-items-center">
                                <Typography className="font-weight-bold">{item.name}</Typography>
                                <Typography className="ml-1">{item.date}</Typography>
                            </Box>
                            <Box>
                                <Button onClick={() => SetMode(!mode)} className={!mode ? "bg-gray color-gray" : ""}>On</Button>
                                <Button onClick={() => SetMode(!mode)} className={mode ? "bg-theme color-theme" : ""}>Off</Button>
                            </Box>
                        </Grid>
                        <Grid item md={6} className="d-flex justify-content-between align-items-center pl-1">
                            <AirbnbSlider
                                ThumbComponent={AirbnbThumbComponent}
                                getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
                                defaultValue={[20, 40]}
                            />
                        </Grid>
                        <Grid item md={2} className="d-flex justify-content-end align-items-center">
                            <Typography>06:00 AM - 05:59 AM</Typography>
                        </Grid>
                    </Grid>
                ))
            }
        </Container>
    )
}