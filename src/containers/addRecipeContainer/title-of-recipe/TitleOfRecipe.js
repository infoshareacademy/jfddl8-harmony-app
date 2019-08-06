import React from 'react'

import TextField from '@material-ui/core/TextField'

const TitleOfRecipe = (props) => (
  <TextField
  required
    margin="normal"
    label="Tytuł przepisu"
    value={props.title}
    onChange={props.onInputChangeHandler}
  />
)

export default TitleOfRecipe