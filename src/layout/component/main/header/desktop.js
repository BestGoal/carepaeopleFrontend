import React from 'react'
import { useSelector } from "react-redux";
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { history } from "../../../../history"

export default function Header() {

    let isAuthorized = useSelector((state) => state.auth.isAuth);
    let userData = useSelector((state) => state.auth.userData);

    const [shiftMenu, setShiftMenu] = React.useState(null);
    const shiftKey = Boolean(shiftMenu);

    const [BillngMenu, setBillngMenu] = React.useState(null);
    const billingKey = Boolean(BillngMenu);

    const [SettingMenu, setSettingMenu] = React.useState(null);
    const settingKey = Boolean(SettingMenu);

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
                        {
                            !isAuthorized ?
                                <>
                                    <Button className="header-btn-item bg-transparent color-white text-capitalize">Post Shifts</Button>
                                    <Button className="header-btn-item bg-transparent color-white text-capitalize">Work Shifts</Button>
                                    <Button className="header-btn-item bg-transparent color-white text-capitalize">How it works</Button>
                                    <Button className="header-btn-item bg-transparent color-white text-capitalize">Download</Button>
                                    <Button className="header-btn-item bg-transparent color-white text-capitalize">About Us</Button>
                                    <Button className="header-signup-item text-capitalize" onClick={() => history.push("/register")}>Sign Up</Button>
                                    <Button className="header-btn-item bg-transparent color-white text-capitalize">Sign In</Button>
                                </>
                                :
                                (
                                    userData.permission === "worker" ?
                                        <>
                                            <Button className="header-btn-item bg-transparent color-white text-capitalize" onClick={() => history.push("/worker-home")}>Home</Button>
                                            <Button className="header-btn-item bg-transparent color-white text-capitalize" onClick={() => history.push("/worker-profile")}>Profile</Button>
                                            <Button className="header-btn-item bg-transparent color-white text-capitalize" onClick={() => history.push("/worker-document")}>Documents</Button>
                                            <Button className="header-btn-item bg-transparent color-white text-capitalize" onClick={() => history.push("/worker-reference")}>References</Button>
                                            <Button className="header-btn-item bg-transparent color-white text-capitalize" onClick={(e) => setShiftMenu(e.currentTarget)}>Shifts</Button>
                                            <Menu
                                                id="menu-appbar"
                                                anchorEl={shiftMenu}
                                                keepMounted
                                                open={shiftKey}
                                                onClose={() => setShiftMenu(null)}
                                            >
                                                <MenuItem onClick={() => {
                                                    setShiftMenu(null)
                                                    history.push("/shift-current")
                                                }}>Current Schedule</MenuItem>
                                                <MenuItem onClick={() => {
                                                    setShiftMenu(null)
                                                    history.push("/shift-job-history")
                                                }}>Job History</MenuItem>
                                                <MenuItem onClick={() => {
                                                    setShiftMenu(null)
                                                    history.push("/shift-available")
                                                }}>Availiable Shifts</MenuItem>
                                                <MenuItem onClick={() => setShiftMenu(null)}>Dedicated Pool</MenuItem>
                                            </Menu>
                                            <Button className="header-btn-item bg-transparent color-white text-capitalize" onClick={(e) => setBillngMenu(e.currentTarget)}>Billings</Button>
                                            <Menu
                                                keepMounted
                                                id="menu-appbar"
                                                open={billingKey}
                                                anchorEl={BillngMenu}
                                                onClose={() => setBillngMenu(null)}
                                            >
                                                <MenuItem onClick={() => {
                                                    setBillngMenu(null)
                                                    history.push("/worker-billing-invoice")
                                                }}>Invoices</MenuItem>
                                                <MenuItem onClick={() => {
                                                    setBillngMenu(null)
                                                    history.push("/worker-billing-instant")
                                                }}>Instant Pay</MenuItem>
                                                <MenuItem onClick={() => {
                                                    setBillngMenu(null)
                                                    history.push("/worker-billing-report")
                                                }}>Report </MenuItem>
                                                <MenuItem onClick={() => {
                                                    setBillngMenu(null)
                                                    history.push("/worker-billing-tax")
                                                }}>Tax</MenuItem>
                                            </Menu>
                                            <Button className="header-btn-item bg-transparent color-white text-capitalize" onClick={() => history.push("/faq")}>Faq</Button>
                                            <Button className="header-btn-item bg-transparent color-white text-capitalize" onClick={() => history.push("/contact-us")}>Contact Us</Button>
                                            <Button className="header-btn-item bg-transparent color-white text-capitalize" onClick={() => history.push("/worker-refferal")}>Referral</Button>
                                            <Button className="header-btn-item bg-transparent color-white text-capitalize" onClick={(e) => setSettingMenu(e.currentTarget)}>Setting</Button>
                                            <Menu
                                                id="menu-appbar"
                                                anchorEl={SettingMenu}
                                                keepMounted
                                                open={settingKey}
                                                onClose={() => setSettingMenu(null)}
                                            >
                                                <MenuItem onClick={() => {
                                                    setSettingMenu(null)
                                                    history.push("/set-available")
                                                }}>Set Availability</MenuItem>
                                                <MenuItem onClick={() => {
                                                    setSettingMenu(null)
                                                    history.push("/set-distance")
                                                }}>Set Distance Filter</MenuItem>
                                                <MenuItem onClick={() => {
                                                    setSettingMenu(null)
                                                    history.push("/set-rate")
                                                }}>Set Rates</MenuItem>
                                                <MenuItem onClick={() => {
                                                    setSettingMenu(null)
                                                    history.push("/set-password")
                                                }}>Change Password</MenuItem>
                                                <MenuItem onClick={() => {
                                                    setSettingMenu(null)
                                                    history.push("/set-nitification")
                                                }}>Push Notification</MenuItem>
                                            </Menu>
                                            <Button className="header-btn-item bg-transparent color-white text-capitalize" onClick={() => window.location.reload()}>Sign Out</Button>
                                        </>
                                        :
                                        <>
                                            <Button className="header-btn-item bg-transparent color-white text-capitalize" onClick={() => history.push("/client-home")}>Home</Button>
                                            <Button className="header-btn-item bg-transparent color-white text-capitalize" onClick={() => history.push("/client-profile")}>Profile</Button>
                                            <Button className="header-btn-item bg-transparent color-white text-capitalize" onClick={() => history.push("/client-post")}>Post Shifts</Button>
                                            <Button className="header-btn-item bg-transparent color-white text-capitalize">Shifts</Button>
                                            <Button className="header-btn-item bg-transparent color-white text-capitalize">Billing</Button>
                                            <Button className="header-btn-item bg-transparent color-white text-capitalize">Wallet</Button>
                                            <Button className="header-btn-item bg-transparent color-white text-capitalize">Previous Workers</Button>
                                            <Button className="header-btn-item bg-transparent color-white text-capitalize" onClick={() => history.push("/faq")}>FAQ</Button>
                                            <Button className="header-btn-item bg-transparent color-white text-capitalize" onClick={() => history.push("/contact-us")}>Contact Us</Button>
                                            <Button className="header-btn-item bg-transparent color-white text-capitalize" onClick={(e) => setSettingMenu(e.currentTarget)}>Settings</Button>
                                            <Menu
                                                id="menu-appbar"
                                                anchorEl={SettingMenu}
                                                keepMounted
                                                open={settingKey}
                                                onClose={() => setSettingMenu(null)}
                                            >
                                                <MenuItem onClick={() => {
                                                    setSettingMenu(null)
                                                    history.push("/set-password")
                                                }}>Change Password</MenuItem>
                                                <MenuItem onClick={() => {
                                                    setSettingMenu(null)
                                                    history.push("/set-nitification")
                                                }}>Push Notification</MenuItem>
                                            </Menu>
                                            <Button className="header-btn-item bg-transparent color-white text-capitalize" onClick={() => window.location.reload()}>Logout</Button>
                                        </>
                                )
                        }
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}