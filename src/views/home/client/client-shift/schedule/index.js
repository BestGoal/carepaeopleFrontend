import React from "react"
import Container from "@material-ui/core/Container"
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"

import DateRange from "@material-ui/icons/DateRange"
import Timer from "@material-ui/icons/Timer"
import AvTimer from "@material-ui/icons/AvTimer"
import Payment from "@material-ui/icons/Payment"
import SkipPrevious from "@material-ui/icons/SkipPrevious"
import LocationOn from "@material-ui/icons/LocationOn"
import Warning from "@material-ui/icons/Warning"

import ShiftNote from "../../../../baseComponent/ShiftNote"
import { Root } from "../../../../../pre/config"

export default function WorkerCurrentShift() {
	return (
		<Box className="worker-home container">
			<Container className="p-1 mt-4 worker-schedule">
				<Typography className="text-align-center font-weight-bold" variant="h5">CURRENT SCHEDULE</Typography>
				<Box className="theme-border theme-box-shadow mt-1">
					<Box className="p-2">
						<Grid container spacing={2}>
							<Grid item xs={12}>
								<Typography className="text-align-center" variant="h5"> UHN-TORONTO WESTERN-ON </Typography>
								<Typography className="text-align-center"> Personal Care Aide ( PCA ) </Typography>
							</Grid>
							<Grid item sm={4} xs={12} className="d-flex justify-content-center theme-border-radius">
								<img className="avatar" src={Root.adminUrl + "avatar/1.jpg"} alt="" />
							</Grid>
							<Grid item sm={8} xs={12}>
								<Grid container spacing={3}>
									<Grid item md={6} xs={12}>
										<Box className="p-1">
											<Box className="d-flex align-items-center">
												<DateRange />
												<Typography className="ml-1"> Mon. May 10, 2021 </Typography>
											</Box>
											<Box className="d-flex align-items-center">
												<Timer />
												<Typography className="ml-1"> Time: 7:30 AM - 7:30 PM (12hrs) </Typography>
											</Box>
											<Box className="d-flex align-items-center">
												<AvTimer />
												<Typography className="ml-1"> Unpaid Break: 30minutes </Typography>
											</Box>
											<Box className="d-flex align-items-center">
												<Payment />
												<Typography className="ml-1"> Pay: $248.55 @ $22/hr </Typography>
											</Box>
											<Box className="d-flex align-items-center">
												<SkipPrevious />
												<Typography className="ml-1"> Instant pay: Available </Typography>
											</Box>
											<Box className="d-flex align-items-center">
												<Warning />
												<Typography className="ml-1">Covid-19 Negative</Typography>
											</Box>
										</Box>
									</Grid>
									<Grid item md={6} xs={12} className="d-flex align-items-center">
										<Box className="theme-border p-1 d-flex theme-border-radius">
											<Box>
												<img className="s-avatar" src={Root.adminUrl + "avatar/1.jpg"} alt="" />
											</Box>
											<Box className="ml-1">
												<Typography>Shift Accepted By : </Typography>
												<Typography>Denis postnykhdo(PSW / PCA)</Typography>
											</Box>
										</Box>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Box>
					<Box className="p-1 text-align-center bg-eee d-flex justify-content-center">
						<LocationOn />
						<Typography className="ml-1"> 399 Bathurst St, Toronto, ON M5T 2S8, Canada  </Typography>
					</Box>
					<ShiftNote />
					<Box className="d-flex justify-content-center">
						<Button fullWidth variant="contained" className="bg-theme color-white border-radius-0 accept">
							CANCEL Shift
                    </Button>
					</Box>
				</Box>

			</Container>
		</Box>
	)
}