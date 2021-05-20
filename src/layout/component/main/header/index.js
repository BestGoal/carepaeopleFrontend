import React from 'react'
import Box from '@material-ui/core/Box'
import Media from "react-media"
import Desktop from "./desktop"
import Mobile from "./mobile"

export default function Header() {

    return (
        <Box className="position-realative w-100 z-index-999">
			<Media
				queries={{Mobile : "(max-width: 1024px)", Tablet : "(min-width: 1023px)"}}>
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
