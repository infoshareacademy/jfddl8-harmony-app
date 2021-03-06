import React, { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'


const useStyles = makeStyles(theme => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(20),
  },
  formControl: {
    margin: theme.spacing(2),
    minWidth: 200,
  },
}))

export default function ControlledOpenSelect({ handleChange, label }) {
  const classes = useStyles()
  const [open, setOpen] = useState(false)


  function handleClose() {
    setOpen(false)
  }

  function handleOpen() {
    setOpen(true)

  }

  return (
    <form autoComplete="off">
      <FormControl
        className={classes.formControl}
      >
        <InputLabel htmlFor="demo-controlled-open-select">Rodzaj posiłku</InputLabel>
        <Select
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={label}
          onChange={handleChange}
        >
          <MenuItem value={'śniadanie'}>śniadanie</MenuItem>
          <MenuItem value={'obiad'}>obiad</MenuItem>
          <MenuItem value={'kolacja'}>kolacja</MenuItem>
          <MenuItem value={'deser'}>deser</MenuItem>
          <MenuItem value={'przekąska'}>przekąska</MenuItem>
        </Select>
      </FormControl>
    </form>
  )
}


