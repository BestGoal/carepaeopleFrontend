import React from "react"
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function WorkerBillingReport() {

    const [mode, SetMode] = React.useState(true)
    const data = [
        { title: '2021', value: 25 },
        { title: '2020', value: 24 },
        { title: '2019', value: 23 },
        { title: '2018', value: 22 },
        { title: '2017', value: 21 },
        { title: '2016', value: 20 },
    ]

    return (
        <Container className="mt-4 worker-billing">
            <Box className="pb-1">
                <Typography className="text-align-center font-weight-bold" variant="h5"> REPORT </Typography>
            </Box>
            <Box className="d-flex justify-content-between align-items-center theme-border theme-box-shadow theme-border-radius p-1">
                <Autocomplete
                    id="combo-box-demo"
                    options={data}
                    getOptionLabel={(option) => option.title}
                    fullWidth
                    value={data[0]}
                    renderInput={(params) => <TextField {...params} label="Year" variant="outlined" />}
                />
                <Button fullWidth onClick={() => SetMode(!mode)} className="ml-1 bg-theme color-white">Generate Report</Button>
            </Box>
        </Container>
    )
}