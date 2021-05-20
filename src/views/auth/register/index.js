import React from "react"
import Box from "@material-ui/core/Box"
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'

export default function Register() {
    return (
        <Box>
            <Card className="box-shadow-none d-flex align-items-center">
                <CardContent className="d-flex align-items-center">
                    <Button className="color-white text-capitalize ml-1" onClick={(e) => console.log()}> Wants to Hire ? </Button>
                    <Button className="color-white text-capitalize ml-1" onClick={(e) => console.log()}> Wants to Work ? </Button>
                </CardContent>
            </Card>
        </Box>
    )
}