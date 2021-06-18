import React, { useEffect, useState } from "react"
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

export default function SetAvailable() {

    const [rateData, setRateData] = useState([{title: '$15 per hour', value: 15 }]);

    useEffect(() => {
        let tempRateData = [];
        for(let i = 15; i <= 100 ; i ++) {
            let temp = {
                title: `${i}$ per hour`, value: i
            }
            tempRateData.push(temp);
        }
        tempRateData.push({
            title: "Other", value: "No Option"
        });
        setRateData(tempRateData);
    }, [])

    return (
        <Container className="container pt-2 mb-1">
            <Box className="pb-1">
                <Typography className="text-align-center font-weight-bold" variant="h5"> SET YOUR RATE </Typography>
            </Box>

            <Grid container spacing={3} className="d-flex theme-border theme-box-shadow theme-border-radius p-1 justify-content-between mt-1">
                <Grid item md={6} className="d-flex align-items-center">
                    <Typography className="font-weight-bold">MINIMUM SHIFT RATE</Typography>
                </Grid>
                <Grid item md={6} className="d-flex align-items-center">
                    <Autocomplete
                        fullWidth
                        id="combo-box-demo"
                        options={rateData}
                        getOptionLabel={(option) => option.title}
                        value={rateData[0]}
                        renderInput={(params) => <TextField {...params} label="Rate" variant="outlined" />}
                    />
                </Grid>
            </Grid>
        </Container>
    )
}