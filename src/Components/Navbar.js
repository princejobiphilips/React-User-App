import { AppBar, Toolbar, Typography } from '@material-ui/core'
import React from 'react'

function Navbar() {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography>User Registration</Typography>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar