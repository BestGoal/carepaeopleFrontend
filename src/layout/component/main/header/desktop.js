import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import { history } from "../../../../history"

export default function Header() {

    return (
        <AppBar position="static" className="bg-white box-shadow-none header-app-bar">
            <Toolbar className="d-flex justify-content-between pt-1 pb-1">
                <Box className="d-flex justify-content-right align-items-center">
                    <Button className="header-btn-item bg-transparent box-shadow-none color-theme" variant="contained">Industries</Button>
                    <Button className="header-btn-item bg-transparent box-shadow-none color-theme" variant="contained">Hire</Button>
                    <Button className="header-btn-item bg-transparent box-shadow-none color-theme" variant="contained">Work</Button>
                    <Button className="header-btn-item bg-transparent box-shadow-none color-theme" variant="contained">Jobs</Button>
                    <Button className="header-btn-item bg-transparent box-shadow-none color-theme" variant="contained">Blog</Button>
                </Box>
                <Box className="d-flex align-items-center crusor-pointer" onClick={() => history.push("/")}>
                    <Typography className="font-weight-bold color-theme" variant="h4">
                        CarePeople
                    </Typography>
                </Box>
                <Box className="d-flex justify-content-right align-items-center">
                    <Button className="header-btn-item bg-transparent box-shadow-none color-theme" variant="contained">About</Button>
                    <Button className="header-btn-item bg-transparent box-shadow-none color-theme" variant="contained">Login</Button>
                    <Button className="header-btn-item bg-transparent box-shadow-none color-theme" variant="contained" onClick={() => history.push("/register")}>Register</Button>
                    <Button className="header-btn-item bg-transparent box-shadow-none color-theme" variant="contained">Download</Button>
                </Box>
            </Toolbar>
        </AppBar>
    )
}
