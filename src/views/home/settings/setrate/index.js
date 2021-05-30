import React from "react"
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';


export default function SetAvailable() {

    const data = [
        { title: '$25 per hour', value: 25 },
        { title: '$24 per hour', value: 24 },
        { title: '$23 per hour', value: 23 },
        { title: '$22 per hour', value: 22 },
        { title: '$21 per hour', value: 21 },
        { title: '$20 per hour', value: 20 },
    ]

    return (
        <Container className="mt-1 mb-1">
            <Box className="pb-1">
                <Typography className="text-align-center font-weight-bold" variant="h5"> SET YOUR RATE </Typography>
            </Box>

            <Box className="d-flex theme-border theme-box-shadow theme-border-radius p-1 justify-content-between mt-1">
                <Box className="d-flex align-items-center">
                    <Typography className="font-weight-bold">MINIMUM SHIFT RATE</Typography>
                </Box>
                <Box>
                    <Autocomplete
                        id="combo-box-demo"
                        options={data}
                        getOptionLabel={(option) => option.title}
                        style={{ width: 300 }}
                        value={data[0]}
                        renderInput={(params) => <TextField {...params} label="Rate" variant="outlined" />}
                    />
                </Box>
            </Box>
            <Box className="d-flex theme-border theme-box-shadow theme-border-radius p-1 justify-content-between mt-1">
                <Box className="d-flex align-items-center">
                    <Typography className="font-weight-bold">PERSONAL CARE AIDE</Typography>
                </Box>
                <Box>
                    <Autocomplete
                        id="combo-box-demo"
                        options={data}
                        getOptionLabel={(option) => option.title}
                        style={{ width: 300 }}
                        value={data[0]}
                        renderInput={(params) => <TextField {...params} label="Rate" variant="outlined" />}
                    />
                </Box>
            </Box>
            <Box className="d-flex theme-border theme-box-shadow theme-border-radius p-1 justify-content-between mt-1">
                <Box className="d-flex align-items-center">
                    <Typography className="font-weight-bold">PERSONAL CARE AIDE</Typography>
                </Box>
                <Box>
                    <Autocomplete
                        id="combo-box-demo"
                        options={data}
                        getOptionLabel={(option) => option.title}
                        style={{ width: 300 }}
                        value={data[0]}
                        renderInput={(params) => <TextField {...params} label="Rate" variant="outlined" />}
                    />
                </Box>
            </Box>
            <Box className="d-flex theme-border theme-box-shadow theme-border-radius p-1 justify-content-between mt-1">
                <Box className="d-flex align-items-center">
                    <Typography className="font-weight-bold">PERSONAL SUPPORT WORKER</Typography>
                </Box>
                <Box>
                    <Autocomplete
                        id="combo-box-demo"
                        options={data}
                        getOptionLabel={(option) => option.title}
                        style={{ width: 300 }}
                        value={data[0]}
                        renderInput={(params) => <TextField {...params} label="Rate" variant="outlined" />}
                    />
                </Box>
            </Box>

        </Container>
    )
}