import React from 'react'
import { useSelector } from "react-redux";
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { history } from "../../../../history"

export default function DesktopHeader() {

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
                <Box className="d-flex justify-content-between pt-1 pb-1">
                    <Box className="d-flex align-items-center crusor-pointer" onClick={() => window.location.reload()}>
                        <Typography className="font-weight-bold color-white" variant="h4">
                            CarePeople
                        </Typography>
                    </Box>
                    <Box className="d-flex justify-content-right align-items-center">
                        {
                            !isAuthorized ?
                                <>
                                    <Button className="bg-transparent color-white text-capitalize">Post Shifts</Button>
                                    <Button className="bg-transparent color-white text-capitalize">Work Shifts</Button>
                                    <Button className="bg-transparent color-white text-capitalize">How it works</Button>
                                    <Button className="bg-transparent color-white text-capitalize">Download</Button>
                                    <Button className="bg-transparent color-white text-capitalize">About Us</Button>
                                    <Button className="bg-eee text-capitalize" onClick={() => history.push("/register")}>Sign Up</Button>
                                    <Button className="bg-transparent color-white text-capitalize" onClick={() => history.push("/login")}>Sign In</Button>
                                </>
                                :
                                (
                                    userData.permission === "worker" ?
                                        <>
                                            <Button className="bg-transparent color-white text-capitalize" onClick={() => history.push("/worker-home")}>Home</Button>
                                            <Button className="bg-transparent color-white text-capitalize" onClick={() => history.push("/worker-profile")}>Profile</Button>
                                            <Button className="bg-transparent color-white text-capitalize" onClick={() => history.push("/worker-document")}>Documents</Button>
                                            <Button className="bg-transparent color-white text-capitalize" onClick={() => history.push("/worker-reference")}>References</Button>
                                            <Button className="bg-transparent color-white text-capitalize" onClick={(e) => setShiftMenu(e.currentTarget)}>Shifts</Button>
                                            <Menu
                                                id="menu-appbar"
                                                anchorEl={shiftMenu}
                                                keepMounted
                                                open={shiftKey}
                                                onClose={() => setShiftMenu(null)}
                                            >
                                                <MenuItem onClick={() => {
                                                    setShiftMenu(null)
                                                    history.push("/worker-shift-progress")
                                                }}>Shifts In Progress</MenuItem>
                                                <MenuItem onClick={() => {
                                                    setShiftMenu(null)
                                                    history.push("/worker-upcoming-shifts")
                                                }}>Current Schedule</MenuItem>
                                                <MenuItem onClick={() => {
                                                    setShiftMenu(null)
                                                    history.push("/worker-shift-history")
                                                }}>Shifts History</MenuItem>
                                                <MenuItem onClick={() => {
                                                    setShiftMenu(null)
                                                    history.push("/worker-shift-available")
                                                }}>Available Shifts </MenuItem>
                                            </Menu>
                                            <Button className="bg-transparent color-white text-capitalize" onClick={(e) => setBillngMenu(e.currentTarget)}>Billings</Button>
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
                                            <Button className="bg-transparent color-white text-capitalize" onClick={() => history.push("/faq")}>Faq</Button>
                                            <Button className="bg-transparent color-white text-capitalize" onClick={() => history.push("/contact-us")}>Contact Us</Button>
                                            <Button className="bg-transparent color-white text-capitalize" onClick={(e) => setSettingMenu(e.currentTarget)}>Setting</Button>
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
                                            <Button className="bg-transparent color-white text-capitalize" onClick={() => window.location.reload()}>Sign Out</Button>
                                        </>
                                        :
                                        <>
                                            <Button className="bg-transparent color-white text-capitalize" onClick={() => history.push("/client-home")}>Home</Button>
                                            <Button className="bg-transparent color-white text-capitalize" onClick={() => history.push("/client-profile")}>Profile</Button>
                                            <Button className="bg-transparent color-white text-capitalize" onClick={() => history.push("/client-post")}>Post Shifts</Button>
                                            <Button className="bg-transparent color-white text-capitalize" onClick={(e) => setShiftMenu(e.currentTarget)}>Shifts</Button>
                                            <Menu
                                                id="menu-appbar"
                                                anchorEl={shiftMenu}
                                                keepMounted
                                                open={shiftKey}
                                                onClose={() => setShiftMenu(null)}
                                            >
                                                <MenuItem onClick={() => {
                                                    setShiftMenu(null)
                                                    history.push("/client-shift-progress")
                                                }}>Shifts In Progress</MenuItem>
                                                <MenuItem onClick={() => {
                                                    setShiftMenu(null)
                                                    history.push("/client-shifts-schedule")
                                                }}>Upcoming Shifts </MenuItem>
                                                <MenuItem onClick={() => {
                                                    setShiftMenu(null)
                                                    history.push("/client-shift-posted")
                                                }}>Posted Shifts</MenuItem>
                                                <MenuItem onClick={() => {
                                                    setShiftMenu(null)
                                                    history.push("/client-shift-history")
                                                }}>Shifts History</MenuItem>
                                            </Menu>
                                            <Button className="bg-transparent color-white text-capitalize" onClick={(e) => setBillngMenu(e.currentTarget)}>Billings</Button>
                                            <Menu
                                                keepMounted
                                                id="menu-appbar"
                                                open={billingKey}
                                                anchorEl={BillngMenu}
                                                onClose={() => setBillngMenu(null)}
                                            >
                                                <MenuItem onClick={() => {
                                                    setBillngMenu(null)
                                                    history.push("/client-billing-history")
                                                }}>Payment History</MenuItem>
                                                <MenuItem onClick={() => {
                                                    setBillngMenu(null)
                                                    history.push("/client-invoice")
                                                }}>Invoices</MenuItem>
                                                <MenuItem onClick={() => {
                                                    setBillngMenu(null)
                                                    history.push("/client-add-card")
                                                }}>Add Credit Card</MenuItem>
                                                <MenuItem onClick={() => {
                                                    setBillngMenu(null)
                                                    history.push("/client-statement")
                                                }}>Account Statement</MenuItem>
                                            </Menu>
                                            <Button className="bg-transparent color-white text-capitalize" onClick={() => history.push("/client-wallet")}>Wallet</Button>
                                            <Button className="bg-transparent color-white text-capitalize" onClick={() => history.push("/previous-workers")}>Hired Workers</Button>
                                            <Button className="bg-transparent color-white text-capitalize" onClick={() => history.push("/faq")}>Faq</Button>
                                            <Button className="bg-transparent color-white text-capitalize" onClick={() => history.push("/contact-us")}>Contact Us</Button>
                                            <Button className="bg-transparent color-white text-capitalize" onClick={(e) => setSettingMenu(e.currentTarget)}>Settings</Button>
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
                                                }}>Notifications</MenuItem>
                                            </Menu>
                                            <Button className="bg-transparent color-white text-capitalize" onClick={() => window.location.reload()}>Logout</Button>
                                        </>
                                )
                        }
                    </Box>
                </Box>
            </Container>
        </AppBar>
    )
}