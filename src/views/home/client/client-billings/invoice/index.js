import React from "react"
import Container from "@material-ui/core/Container"
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import CancelPresentation from "@material-ui/icons/CancelPresentation"

export default function ClientBillingInvoice() {

	const [value, setValue] = React.useState(1);

	return (
		<Container className="mt-3 client-home">
			<Box className="pb-1">
				<Typography className="text-align-center font-weight-bold" variant="h5">INVOICES</Typography>
			</Box>
			<Grid container spacing={2} className="mt-2">
				<Grid item xs={12}>
					<Button fullWidth variant="contained" className="bg-theme color-white">Pay Unpaid Invoices</Button>
				</Grid>
				<Grid item xs={12} className="billing-tabs d-flex">
					<Button className={`billing-tab bg-transparent box-shadow-none ${value === 1 && "select-item"}`} onClick={() => setValue(1)}>All</Button>
					<Button className={`billing-tab bg-transparent box-shadow-none ${value === 2 && "select-item"}`} onClick={() => setValue(2)}>Unpaid</Button>
					<Button className={`billing-tab bg-transparent box-shadow-none ${value === 3 && "select-item"}`} onClick={() => setValue(3)}>paid</Button>
				</Grid>
				<Grid item xs={12} className="text-align-center">
					<CancelPresentation className="noexist-icon"/>
					<Typography>Currently you don't have any invoices.</Typography>
				</Grid>
			</Grid>
		</Container>
	)
}