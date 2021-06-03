import React from "react"
import Container from "@material-ui/core/Container"
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"

export default function ClientCreditCard() {
	return (
		<Container className="mt-3">
			<Box className="pb-1">
				<Typography className="text-align-center font-weight-bold" variant="h5">CREDIT CARDS</Typography>
			</Box>
			<Grid container spacing={2} className="mt-2">
				<Grid item xs={12} className="d-flex justify-content-center">
					<Button variant="contained" className="bg-theme color-white">Add a new credit card</Button>
				</Grid>
			</Grid>
		</Container>
	)
}