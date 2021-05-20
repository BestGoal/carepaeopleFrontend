import React from 'react'
import Box from '@material-ui/core/Box'
// import Header from "./component/main/header/index"

export default function FullpageLayout({ children }) {
    return (
        <Box>
            {/* <Header /> */}
            {children}
        </Box>
    )
}
