import React from "react"
import Container from "@material-ui/core/Container"
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"

import LocationOn from "@material-ui/icons/LocationOn"

export default function AccountStatement() {

	return (
		<Container className="container pt-2 client-home">
			<Box>
				<Box className="pb-1">
					<Typography className="text-align-center font-weight-bold" variant="h5">ACCOUNT STATEMENT</Typography>
				</Box>
				<Grid container className="theme-border p-1 theme-box-shadow client-billing">
					<Grid item sm={6} xs={12} className="d-flex align-items-center justify-content-center">
						<img src={"http://res.cloudinary.com/staffy/image/upload/v1620544819/ukm7tnrgwd5oevdnocic.jpg"} alt="" />
						<Typography className="ml-1 font-weight-bold">CAREHOLD</Typography>
					</Grid>
					<Grid item sm={6} xs={12} className="d-flex align-items-center">
						<LocationOn />
						<Typography className="ml-1 font-weight-bold">23 Etobicoke Creek Trail, Mississauga, ON L4W 5N3, Canada</Typography>
					</Grid>
				</Grid>
				<Button fullWidth className="pay-btn bg-theme color-white"> Pay unpaid invoices </Button>
			</Box>

			<Box className="mt-1">
				<Box className="pb-1">
					<Typography className="text-align-center font-weight-bold" variant="h5">TRANSACTION OVERVIEW</Typography>
				</Box>
				<Grid container className="theme-border theme-box-shadow">
					<Grid item md={3} xs={6} className="p-1">
						<Typography className="text-align-center color-theme font-weight-bold">invoiced</Typography>
						<Typography className="text-align-center">0.00 CAD</Typography>
					</Grid>
					<Grid item md={3} xs={6} className="transaction-item p-1">
						<Typography className="text-align-center color-theme font-weight-bold">Paid Total</Typography>
						<Typography className="text-align-center">0.00 CAD</Typography>
					</Grid>
					<Grid item md={3} xs={6} className="p-1">
						<Typography className="text-align-center color-theme font-weight-bold">Amount Balance</Typography>
						<Typography className="text-align-center">0.00 CAD</Typography>
					</Grid>
					<Grid item md={3} xs={6} className="transaction-item p-1">
						<Typography className="text-align-center color-theme font-weight-bold">Wallet Balance</Typography>
						<Typography className="text-align-center">0.00 CAD</Typography>
					</Grid>
				</Grid>
				<Button fullWidth className="pay-btn bg-theme color-white"> Pay unpaid invoices </Button>
			</Box>

			<Box className="mt-1">
				<Box className="pb-1">
					<Typography className="text-align-center font-weight-bold" variant="h5">SUMMARY AS OF MAY 29TH 2021</Typography>
				</Box>
				<Grid container className="theme-border theme-box-shadow">
					<Grid item md={3} xs={6} className="p-1">
						<Typography className="text-align-center color-theme font-weight-bold">invoiced</Typography>
						<Typography className="text-align-center">0.00 CAD</Typography>
					</Grid>
					<Grid item md={3} xs={6} className="transaction-item p-1">
						<Typography className="text-align-center color-theme font-weight-bold">Paid Total</Typography>
						<Typography className="text-align-center">0.00 CAD</Typography>
					</Grid>
					<Grid item md={3} xs={6} className="p-1">
						<Typography className="text-align-center color-theme font-weight-bold">Amount Balance</Typography>
						<Typography className="text-align-center">0.00 CAD</Typography>
					</Grid>
					<Grid item md={3} xs={6} className="transaction-item p-1">
						<Typography className="text-align-center color-theme font-weight-bold">Wallet Balance</Typography>
						<Typography className="text-align-center">0.00 CAD</Typography>
					</Grid>
				</Grid>
				<Button fullWidth className="pay-btn bg-theme color-white"> Pay unpaid invoices </Button>
			</Box>
		</Container>
	)
}