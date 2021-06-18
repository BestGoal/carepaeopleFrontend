import React from "react"
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"

export default function ContactUs() {
    return (
        <Container className="mt-4 mb-1">
            <Box className="pb-1">
                <Typography className="text-align-center font-weight-bold" variant="h5"> About Us </Typography>
                <Typography className="mt-2">CareShifts is the best on-demand healthcare shifts posting platform.</Typography>
                <Typography>CareShifts is a Canadian Apps servicing  all of Canada healthcare industury.</Typography>
                <Typography>Companies and health workers anywhere in Canada can sign up on CareShifts Apps to post and work shifts in their locality.</Typography>
                <Typography>For us it is about quality service.</Typography>
                <Typography>The main reason we created this platform is for companies to have the opportuninty to PAY LESS for quality services and health workers to EARN MORE as they deserved. This is a WIN-WIN platform for both companies and health workers. At the end, both companies and health workers are happy and quality care services are delivered to those who need them.</Typography>
                <Typography>Its very easy to sign up with CareShifts and also simple to use.</Typography>
                <Typography>When a health worker signs up, he/she will upload all the required documents.</Typography>
                <Typography>After passing through our vetting processes which include thorough background checks, among others, the healthcare worker will be approved if successful.</Typography>
                <Typography>Upon approval he/she will start receiving posted shifts.</Typography>
                <Typography>We continuously vet the health workers before and after onboarding to maintain high standards.</Typography>
                <Typography>SIGN UP NOW TO POST OR WORK SHIFTS. You will be happy you did!</Typography>
            </Box>
        </Container>
    )
}