import React from 'react'
import { useHistory } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/IconButton'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import MenuIcon from '@material-ui/icons/Menu'
import Clear from "@material-ui/icons/Clear"
import { Root } from "../../../../pre/config"

export default function Header() {

    const [mode, setMode] = React.useState(false)
    const gotoPage = (url) => {
        history.push(url)
        setMode(false)
    }

    const history = useHistory()

    return (
        <AppBar position="static" className="bg-theme box-shadow-none">
            <Toolbar className="d-flex justify-content-between">
                <Box className="d-flex align-items-center crusor-pointer" onClick={() => history.push("/")}>
                    <Typography className="font-weight-bold" variant="h4">
                        CarePeople
                    </Typography>
                </Box>
                <Box onClick={() => setMode(true)}>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                </Box>
                {
                    mode &&
                    <Card className="header-card">
                        <CardContent>
                            <Box className="d-flex justify-content-end border-solid-1">
                                <Clear onClick={() => setMode(!mode)} />
                            </Box>
                            <Box className="p-1 border-solid-1">
                                <Typography className="font-weight-bold color-theme"> Post Shifts </Typography>
                            </Box>
                            <Box className="p-1 border-solid-1">
                                <Typography className="font-weight-bold color-theme"> Work Shifts </Typography>
                            </Box>
                            <Box className="p-1 border-solid-1">
                                <Typography className="font-weight-bold color-theme"> How it works </Typography>
                            </Box>
                            <Box className="p-1 border-solid-1">
                                <Typography className="font-weight-bold color-theme"> Download </Typography>
                            </Box>
                            <Box className="p-1 border-solid-1">
                                <Typography className="font-weight-bold color-theme"> About Us </Typography>
                            </Box>
                        </CardContent>
                        <CardActions className="d-flex justify-content-center header-auth-button">
                            <Button className="register text-capitalize" variant="contained" onClick={() => gotoPage("/register")}> Sign Up </Button>
                            <Button className="login bg-transparent text-capitalize" variant="contained" onClick={() => gotoPage("/login")}> Sign In </Button>
                        </CardActions>
                        <CardActions className="d-flex justify-content-center header-auth-button">
                            <img className="header-card-image" src={Root.adminUrl + "app/appstore.png"} alt="" />
                            <img className="header-card-image" src={Root.adminUrl + "app/googlestore.png"} alt="" />
                            <img className="header-card-image" src={Root.adminUrl + "app/qrcode.png"} alt="" />
                        </CardActions>
                    </Card>
                }
            </Toolbar>
        </AppBar>
    )
}
