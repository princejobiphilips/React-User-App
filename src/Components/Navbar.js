import { AppBar, Toolbar, Typography } from '@material-ui/core'
import React from 'react'

function Navbar() {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography>Todo</Typography>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar