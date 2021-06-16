import React from "react"
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from "@material-ui/core/Typography"
import Item from "./item"

export default function Faq() {

    const data = [
        {
        },
        {
        },
        {
        },
        {
        },
        {
        },
        {
        },
        {
        },
        {
        },
        {
        },
        {
        }
    ]

    return (
        <Container className="mt-4 mb-1 faq-page">
            <Box className="pb-1">
                <Typography className="text-align-center font-weight-bold" variant="h5"> FAQ </Typography>
            </Box>
            <Card className="p-2 theme-border theme-box-shadow theme-border-radius">
                <CardContent>
                    <Box>
                        {
                            data.map((item,key) => (
                                <Item key={key} />
                            ))
                        }
                    </Box>
                </CardContent>
            </Card>
        </Container>
    )
}