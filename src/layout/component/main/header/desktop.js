import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import { history } from "../../../../history"

export default function Header() {

    return (
        <AppBar position="static" className="header-app-bar">
            <Container>
                <Toolbar className="d-flex justify-content-between pt-1 pb-1">
                    <Box className="d-flex align-items-center crusor-pointer" onClick={() => history.push("/")}>
                        <Typography className="font-weight-bold color-white" variant="h4">
                            CarePeople
                    </Typography>
                    </Box>
                    <Box className="d-flex justify-content-right align-items-center">
                        <Button className="header-btn-item bg-transparent color-white text-capitalize" variant="contained">Wants to hire?</Button>
                        <Button className="header-btn-item bg-transparent color-white text-capitalize" variant="contained">Wants to work?</Button>
                        <Button className="header-btn-item bg-transparent color-white text-capitalize" variant="contained">Jobs</Button>
                        <Button className="header-btn-item bg-transparent color-white text-capitalize" variant="contained">How it works</Button>
                        <Button className="header-btn-item bg-transparent color-white text-capitalize" variant="contained">Download</Button>
                        <Button className="header-btn-item bg-transparent color-white text-capitalize" variant="contained">About Us</Button>
                        <Button className="header-btn-item bg-transparent color-white text-capitalize" variant="contained" onClick={() => history.push("/register")}>Sign Up</Button>
                        <Button className="header-btn-item bg-transparent color-white text-capitalize" variant="contained">Sign In</Button>
                    </Box>
                </Toolbar>

            </Container>
        </AppBar>
    )
}
