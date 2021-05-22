import React from "react"
import Container from "@material-ui/core/Container"
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

export default function Message() {
    return (
        <Container className="m-1 worker-dashboard">
            <Card className="p-2 theme-border theme-box-shadow">
                <CardContent>
                    <Box>
                        <Typography variant="h5">GENERAL MESSAGE</Typography>
                    </Box>
                </CardContent>
            </Card>
        </Container>
    )
}