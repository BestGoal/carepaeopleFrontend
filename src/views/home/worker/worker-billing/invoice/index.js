import React from "react"
import Container from "@material-ui/core/Container"
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import CancelPresentation from "@material-ui/icons/CancelPresentation"

export default function WorkerBillingPaymentHistory() {

    const [value, setValue] = React.useState(1);
    let paymentData = [
        {

        }
    ]

    return (
        <Box className="worker-billing">
            <Container className="mt-3 worker-billing-invoice">
                <Box className="pb-1">
                    <Typography className="text-align-center font-weight-bold" variant="h5">INVOICES</Typography>
                </Box>
                <Grid container spacing={2} className="mt-2">
                    <Grid item xs={12} className="billing-tabs d-flex">
                        <Button variant="contained" className={`billing-tab bg-transparent box-shadow-none ${value === 1 && "select-item"}`} onClick={() => setValue(1)}>All</Button>
                        <Button variant="contained" className={`billing-tab bg-transparent box-shadow-none ${value === 2 && "select-item"}`} onClick={() => setValue(2)}>Unpaid</Button>
                        <Button variant="contained" className={`billing-tab bg-transparent box-shadow-none ${value === 3 && "select-item"}`} onClick={() => setValue(3)}>paid</Button>
                    </Grid>
                    {
                        value === 1 &&
                        <>
                            {
                                paymentData.map((item, key) => (
                                    <Grid item xs={12} className="theme-border theme-border-radius theme-box-shadow p-1" key={key}>
                                        <Box className="d-flex justify-content-between m-1">
                                            <Typography className="font-weight-bold">UHN - TORONTO WESTERN - ON</Typography>
                                            <Typography>Invoice No : 150923</Typography>
                                        </Box>
                                        <Box className="d-flex justify-content-start m-1">
                                            <Typography className="font-weight-bold">Description: </Typography>
                                            <Typography className="ml-1">Innocent Udemba as personal care aide @ UHN - TORONTO WESTERN - ON Tuesday May 11th ( 11:30pm - 07:30am ) $22/hr</Typography>
                                        </Box>
                                        <Box className="d-flex justify-content-between m-1">
                                            <Typography className="font-weight-bold">Amount: </Typography>
                                            <Typography className="ml-1">462 CAD</Typography>
                                        </Box>
                                        <Box className="d-flex justify-content-between m-1">
                                            <Typography className="font-weight-bold">Time tracked: </Typography>
                                            <Typography className="ml-1">7:31 Hours</Typography>
                                        </Box>
                                        <Box className="d-flex justify-content-between m-1">
                                            <Typography className="font-weight-bold">Status: </Typography>
                                            <Typography className="ml-1">Paid</Typography>
                                        </Box>
                                        <Button fullWidth className="bg-theme color-white">Download</Button>
                                    </Grid>
                                ))
                            }
                        </>
                    }
                    {
                        value === 2 &&
                            <Grid item xs={12}>
                                <Box className="text-align-center">
                                    <CancelPresentation style={{ width: "100px", height: "100px" }} />
                                    <Typography>Currently you don't have any invoices.</Typography>
                                </Box>
                            </Grid>
                    }
                </Grid>
            </Container>
        </Box>
    )
}