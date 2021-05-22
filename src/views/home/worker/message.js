import React from "react"
import Container from "@material-ui/core/Container"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

export default function Message() {
    return (
        <Container className="m-1 worker-dashboard">
            <Card className="p-2 theme-border theme-box-shadow">
                <CardContent>
                    Message Box
                </CardContent>
            </Card>
        </Container>
    )
}