import React from 'react'
import { Grid, TextField,Button } from '@material-ui/core'


function User() {
  return (
    <Grid container>
    <Grid  item xs={12} sm={2} md={2} lg={2} xl={2}>
    </Grid>
    <Grid  item xs={12} sm={6} md={8} lg={8} xl={8}>
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
    type='text'
    label="Address"/>

    <TextField
    required
    margin='normal'
    fullWidth
    variant='outlined'
    type='date'
    label="Date of Birth"/>

    <TextField
    required
    margin='normal'
    fullWidth
    variant='outlined'
    type='number'
    label="Pincode"/>

   <TextField
    margin='normal'
    fullWidth
    variant='outlined'
    type='text'
    label="Place"/>

    <TextField
    required
    margin='normal'
    fullWidth
    variant='outlined'
    type='tel'
    label="Mobile No"/>

    <TextField
    required
    margin='normal'
    fullWidth
    variant='outlined'
    type='email'
    label="Email"/>

   <TextField
    margin='normal'
    fullWidth
    variant='outlined'
    type='password'
    label="Password"/>

    <TextField
    required
    margin='normal'
    fullWidth
    variant='outlined'
    type='password'
    label="Confirm Password"/>

    <Button
    margin='normal'
    color='secondary'
    fullWidth
    variant='contained'>
        Submit
    </Button>
    </Grid>
    <Grid  item xs={12} sm={2} md={2} lg={2} xl={2}>
    </Grid>

</Grid>
  )
}

export default User