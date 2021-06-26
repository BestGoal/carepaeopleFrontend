import React from "react"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import Checkbox from '@material-ui/core/Checkbox'

export default function TempAddress({ addressData, mainAddress, changeAddress }) {
    return (
        <>
            {
                addressData.map((item, key) => {
                    let flag = mainAddress.findIndex(it => it === item) > -1 ? true : false
                    return (
                        <Box key={key} className="pl-1 pr-1 d-flex justify-content-between align-items-center">
                            <Typography className="font-weight-bold">{item}</Typography>
                            <Checkbox 
                                color="primary" 
                                onChange={()=>changeAddress(!flag, item)}
                                checked={flag} 
                            />
                        </Box>
                    )
                })
            }
        </>
    )
}