import React from "react"
import Container from "@material-ui/core/Container"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Add from "@material-ui/icons/Add"
import PhoneAndroid from "@material-ui/icons/PhoneAndroid"
import Contacts from "@material-ui/icons/Contacts"

export default function WorkerReferemce() {

  const [mailInvite, SetMailInvite] = React.useState(false)
  const [phoneInvite, SetPhoneInvite] = React.useState(false)
  const [cList, SetCList] = React.useState(false)

  return (
    <Container className="mt-1 mb-1">
      <Card className="p-2 theme-border theme-box-shadow">
        <CardContent>
          <Box className="pb-1">
            <Typography className="text-align-center font-weight-bold" variant="h5"> REFFERALS </Typography>
          </Box>
          <Box className="d-flex">
            <Button variant="contained" className="referal-btn bg-theme color-white m-1" onClick={() => SetMailInvite(true)}>
              <Add />
              <Typography>Invite A Friend</Typography>
            </Button>
            <Button variant="contained" className="referal-btn m-1" onClick={() => SetPhoneInvite(true)}>
              <PhoneAndroid />
              <Typography>Import Phone Contacts</Typography>
            </Button>
          </Box>
          <Box>
            <Typography className="text-align-center font-weight-bold">Referral Requests</Typography>
            <Box className="theme-border theme-border-radius p-1">
              <TextField fullWidth variant="outlined" label="Search" />
              <Box>
                <Box className="d-flex justify-content-between align-items-center referal-item pl-1 pr-1">
                  <Typography className="font-weight-bold">Susan Shadare</Typography>
                  <Typography>Invite Sent</Typography>
                  <Button variant="contained" className="bg-theme color-white">RESEND</Button>
                </Box>
                <Box className="d-flex justify-content-between align-items-center referal-item pl-1 pr-1">
                  <Typography className="font-weight-bold">Susan Shadare</Typography>
                  <Typography>Invite Sent</Typography>
                  <Button variant="contained" className="bg-theme color-white">RESEND</Button>
                </Box>
                <Box className="d-flex justify-content-between align-items-center referal-item pl-1 pr-1">
                  <Typography className="font-weight-bold">Susan Shadare</Typography>
                  <Typography>Invite Sent</Typography>
                  <Button variant="contained" className="bg-theme color-white">RESEND</Button>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="mt-2">
            <Typography className="text-align-center font-weight-bold">Active Referrals</Typography>
            <Box className="theme-border theme-border-radius p-1">
              <TextField fullWidth variant="outlined" label="Search" />
              <Box>
                <Typography className="text-align-center referal-item">No Active referral found</Typography>
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Card>

      <Dialog open={mailInvite} onClose={() => SetMailInvite(false)} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title" className="text-align-center">New Referral</DialogTitle>
        <DialogContent style={{ overflow: "hidden" }}>
          <TextField className="mt-1" fullWidth variant="outlined" label="Name" />
          <TextField className="mt-1" fullWidth variant="outlined" label="Email" />
          <TextField className="mt-1" fullWidth variant="outlined" label="Phone Number" />
          <Box className="d-flex justify-content-end mt-1 mb-1">
            <Button onClick={() => SetMailInvite(false)} variant="contained" className="theme-border">Back</Button>
            <Button onClick={() => SetMailInvite(false)} variant="contained" className="ml-1 bg-theme color-white">Add</Button>
          </Box>
        </DialogContent>
      </Dialog>

      <Dialog open={phoneInvite} onClose={() => SetMailInvite(false)} aria-labelledby="form-dialog-title" className="referal-dialog">
        {
          !cList ?
            <>
              <DialogTitle id="form-dialog-title" className="text-align-center m-1">
                <Box className="d-flex">
                  <Contacts />
                  <Typography>Allow Carepeople to access your contacts ?</Typography>
                </Box>
              </DialogTitle>
              <DialogContent style={{ overflow: "hidden" }}>
                <Box className="d-flex justify-content-end mt-1 mb-1">
                  <Button onClick={() => SetPhoneInvite(false)} variant="contained" className="theme-border">Deny</Button>
                  <Button onClick={() => SetCList(true)} variant="contained" className="ml-1 bg-theme color-white">Allow</Button>
                </Box>
              </DialogContent>
            </>
            :
            <>
              <DialogTitle id="form-dialog-title" className="text-align-center m-1">
                <Box className="d-flex">
                  <Contacts />
                  <Typography>Invite Contacts</Typography>
                </Box>
              </DialogTitle>
              <DialogContent style={{ overflow: "hidden" }}>
                <Box>
                  <TextField fullWidth variant="outlined" label="Search" />
                  <Box className="pt-1 pb-1">
                    <Box className="d-flex justify-content-between align-items-center mt-1">
                      <Typography className="font-weight-bold">Susan Shadare</Typography>
                      <Button
                        onClick={() => {
                          SetPhoneInvite(false)
                          SetCList(false)
                        }}
                        variant="contained" 
                        className="bg-theme color-white"
                      >Invite</Button>
                    </Box>
                    <Box className="d-flex justify-content-between align-items-center mt-1">
                      <Typography className="font-weight-bold">Susan Shadare</Typography>
                      <Button
                        onClick={() => {
                          SetPhoneInvite(false)
                          SetCList(false)
                        }}
                        variant="contained" 
                        className="bg-theme color-white"
                      >Invite</Button>
                    </Box>
                  </Box>
                </Box>
              </DialogContent>
            </>
        }
      </Dialog>

    </Container>
  )
}