import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Clear from "@material-ui/icons/Clear"
// import WalletIcon from "../../../../asset/image/section/wallet-icon.png"
// import ExchangeIcon from "../../../../asset/image/section/exchange-icon.png"
// import ExplorerIcon from "../../../../asset/image/section/explorer-icon.png"
import { history } from "../../../../history"

export default function Header() {

    const [mode, setMode] = React.useState(false)
    const gotoPage = (url) => {
        setMode(false)
        history.push(url)
    }

    return (
        <AppBar position="static" className="bg-theme box-shadow-none" onClick={() => history.push("/")}>
            <Toolbar className="d-flex justify-content-between">
                <Box className="d-flex align-items-center crusor-pointer">
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
                                <Typography className="font-weight-bold color-theme"> Industries </Typography>
                            </Box>
                            <Box className="p-1 border-solid-1">
                                <Typography className="font-weight-bold color-theme"> Hire </Typography>
                            </Box>
                            <Box className="p-1 border-solid-1">
                                <Typography className="font-weight-bold color-theme"> Work </Typography>
                            </Box>
                            <Box className="p-1 border-solid-1">
                                <Typography className="font-weight-bold color-theme"> Jobs </Typography>
                            </Box>
                            <Box className="p-1 border-solid-1">
                                <Typography className="font-weight-bold color-theme"> Blog </Typography>
                            </Box>
                            <Box className="p-1 border-solid-1">
                                <Typography className="font-weight-bold color-theme"> About </Typography>
                            </Box>
                            <Box className="p-1 border-solid-1">
                                <Typography className="font-weight-bold color-theme"> Download </Typography>
                            </Box>
                        </CardContent>
                        <CardActions className="d-flex justify-content-center header-auth-button">
                            <Button className="register" variant="contained" onClick={() => gotoPage("/register")}> Register </Button>
                            <Button className="login bg-transparent" variant="contained" onClick={() => gotoPage("/login")}> Login </Button>
                        </CardActions>
                    </Card>
                }
            </Toolbar>
        </AppBar>
    )
}
