import React from "react"
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from "@material-ui/core/Typography"

import Add from "@material-ui/icons/Add"
import Remove from "@material-ui/icons/Remove"

export default function ShiftNote({data}) {

    const [mode, setMode] = React.useState(false)
    
    return (
        <Card className="box-shadow-none bg-snote">
            <CardContent>
                <Box className="d-flex justify-content-between align-items-center crusor-pointer pr-1" onClick={()=>setMode(!mode)}>
                    <Typography> SHIFT NOTES </Typography>
                    {
                        !mode ? <Add /> : <Remove />
                    }
                </Box>
                {
                    mode && 
                        <span className="mt-1">{data}</span>
                }
            </CardContent>
        </Card>
    )
}