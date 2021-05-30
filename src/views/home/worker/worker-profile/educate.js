import React from "react"
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from "@material-ui/core/Typography"

import School from "@material-ui/icons/School"
import Rotate90DegreesCcw from "@material-ui/icons/Rotate90DegreesCcw"
import Contactless from "@material-ui/icons/Contactless"
import DateRange from "@material-ui/icons/DateRange"
import Edit from "@material-ui/icons/Edit"

export default function Profile() {
    return (
        <Container className="mt-1">
            <Card className="p-2 theme-border theme-box-shadow">
                <CardContent>
                    <Box className="pb-1">
                        <Typography className="text-align-center font-weight-bold" variant="h5"> HIGHEST EDUCATION </Typography>
                    </Box>
                    <Box>
                        <Box className="d-flex">
                            <Box> <School /> </Box>
                            <Box className="ml-1">
                                <Typography>School: University of Tronto</Typography>                                
                            </Box>
                            <Box className="ml-1"> <Edit /> </Box>
                        </Box>
                        <Box className="d-flex">
                            <Box> <Rotate90DegreesCcw /> </Box>
                            <Box className="ml-1">
                                <Typography> Degree/Diploma/Certificate: Degree</Typography>                                
                            </Box>
                            <Box className="ml-1"> <Edit /> </Box>
                        </Box>
                        <Box className="d-flex">
                            <Box> <Contactless /> </Box>
                            <Box className="ml-1">
                                <Typography>Filed Of Study: Nursing</Typography>                                
                            </Box>
                            <Box className="ml-1"> <Edit /> </Box>
                        </Box>
                        <Box className="d-flex">
                            <Box> <DateRange /> </Box>
                            <Box className="ml-1">
                                <Typography> Year Of Study: 2015 - 2019</Typography>                                
                            </Box>
                            <Box className="ml-1"> <Edit /> </Box>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </Container>
    )
}