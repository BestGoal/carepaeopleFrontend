import React from "react"
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from "@material-ui/core/Typography"

export default function Faq() {

    return (
        <Container className="mt-4 mb-1 faq-page">
            <Box className="pb-1">
                <Typography className="text-align-center font-weight-bold" variant="h5"> How It works </Typography>
            </Box>
            <Card className="p-2 theme-border theme-box-shadow theme-border-radius">
                <CardContent>
                    <Box className="d-flex"> 
                        <Typography>1. </Typography>
                        <Typography className="ml-1">A company and any healthcare worker can download the CARESHIFTS App from Google playstore or App Store and sign up.</Typography>
                    </Box>
                    <Box className="d-flex"> 
                        <Typography>2. </Typography>
                        <Typography className="ml-1">A company and healthcare worker sign up and get approved. Please note that we strictly and continuously vet the healthcare workers before and after onboarding to maintain high standards.</Typography>
                    </Box>
                    <Box className="d-flex"> 
                        <Typography>3. </Typography>
                        <Typography className="ml-1">The company posts shift on CARESHIFTS platform.</Typography>
                    </Box>
                    <Box className="d-flex"> 
                        <Typography>4. </Typography>
                        <Typography className="ml-1">The shift is broadcasted to the workers in the job position category selected by the company and appear on the list of      AVAILABLE SHIFTS of approved workers and on the list of POSTED SHIFTS of the company. Only workers who have been vetted    and approved can see the posted shifts.</Typography>
                    </Box>
                    <Box className="d-flex"> 
                        <Typography>5. </Typography>
                        <Typography className="ml-1">The shift will be automatically assigned to the first worker who accepts the shift.</Typography>
                    </Box>
                    <Box className="d-flex"> 
                        <Typography>6. </Typography>
                        <Typography className="ml-1">Then the worker goes to the location to do the shift.</Typography>
                    </Box>
                    <Box className="d-flex"> 
                        <Typography>7. </Typography>
                        <Typography className="ml-1">When the worker has completed the shift, his/her payment is automatically processed.</Typography>
                    </Box>
                    <Box className="d-flex"> 
                        <Typography>8. </Typography>
                        <Typography className="ml-1">At the end, the company is happy for the excellent service provided and the worker is also happy for doing a good job.</Typography>
                    </Box>
                    <Box className="d-flex"> 
                        <Typography>9. </Typography>
                        <Typography className="ml-1">CARESHIFTS is also very happy that  our platform played a role in the provision of care to those we need it.</Typography>
                    </Box>
                </CardContent>
            </Card>
        </Container>
    )
}