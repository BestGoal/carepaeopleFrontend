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
        <Box className="worker-billing-invoice">
            <Container className="mt-3">
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
                                    <Grid item xs={12} clasName="theme-border theme-box-radius theme-box-shadow" ley={key}>
                                        <Box className="d-flex justify-content-between">
                                            <Typography>UHN - TORONTO WESTERN - ON</Typography>
                                            <Typography>Invoice No : 150923</Typography>
                                        </Box>
                                        <Box className="text-align-center">
                                            Hello
                                        </Box>
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