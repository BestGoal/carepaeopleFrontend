import React from 'react'
import Box from '@material-ui/core/Box'
import Media from "react-media"
import Desktop from "./desktop"
import Mobile from "./mobile"

export default function Header() {

    return (
        <Box className="position-realative z-index-999">
			<Media
				queries={{Mobile : "(max-width: 1039px)", Tablet : "(min-width: 1040px)"}}>
				{matches => (
					<>
						{matches.Tablet && 
                            <Desktop />
						}
						{matches.Mobile && 
                            <Mobile />
						}
					</>
				)}
			</Media>
        </Box>
    )
}
