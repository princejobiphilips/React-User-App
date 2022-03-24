import { Grid, TextField,Button } from '@material-ui/core'
import React from 'react'

function Patient() {
  return (
        <Grid container>
            <Grid  item xs={12} sm={4} md={4} lg={4} xl={4}>
            </Grid>
            <Grid  item xs={12} sm={6} md={6} lg={6} xl={6}>
            <TextField style={{marginTop:70}}
            required
            margin='normal'
            fullWidth
            variant='outlined'
            type='text'
            label="Name"/>

            <TextField
            required
            margin='normal'
            fullWidth
            variant='outlined'
            type='address'
            label="Address"/>

            <TextField
            required
            margin='normal'
            fullWidth
            variant='outlined'
            type='tel'
            label="Mobile"/>

            <TextField
            required
            margin='normal'
            fullWidth
            variant='outlined'
            type='number'
            label="Pincode"/>

            <TextField
            required
            margin='normal'
            fullWidth
            variant='outlined'
            type='email'
            label="Email"/>

            <TextField
            required
            margin='normal'
            fullWidth
            variant='outlined'
            type='text'
            label="Bystander name"/>

            <TextField
            required
            margin='normal'
            fullWidth
            variant='outlined'
            type='text'
            label="Doctor name"/>

            <TextField
            required
            margin='normal'
            fullWidth
            variant='outlined'
            type='text'
            label="Disease"/>

            <TextField
            required
            margin='normal'
            fullWidth
            variant='outlined'
            type='text'
            label="Medicine"/>

            <TextField
            required
            margin='normal'
            fullWidth
            variant='outlined'
            type='number'
            label="Room No"/>

            <Button
            margin='normal'
            color='secondary'
            fullWidth
            variant='contained'>
                Submit
            </Button>
            </Grid>
            <Grid  item xs={12} sm={4} md={4} lg={4} xl={4}>
            </Grid>

        </Grid>
    )
}

export default Patient