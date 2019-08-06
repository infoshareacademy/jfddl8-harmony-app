import React from 'react'

import TitleOfRecipe from './title-of-recipe/TitleOfRecipe'
import Ingredients from './ingredients/Ingredients'
import Description from './description/Description'
import NutritiveValue from './nutritive-value/NutritiveValue'
import Label from './label/Label'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'

const styles = {
  paper: {
    margin: 12,
    padding: 50
  },
  button: {
    marginTop: 50
  }
}

const initialState = {
  title: '',
  ingredients: '',
  description: '',
  nutritiveValue: '',
  label: '',
  url: '',
  isFavorite: false
}

class AddRecipeContainer extends React.Component {
  state = {
    state: initialState
  }

  reset() {
    this.setState(initialState)
  }
  onInputChangeHandler = (property) => {
    return (event) => {
      const newState = {}
      newState[property] = event.target.value
      this.setState(newState)
    }
  }

  onSaveClicker = (props) => {
    const newRecipe = this.state
    const newRecipeString = JSON.stringify(newRecipe)
    localStorage.setItem('recipe', newRecipeString)
  }

  render() {
    return (
      <Paper style={styles.paper}>
        <div className="addRecipeContainer">
          <h1>Dodaj swój przepis</h1>
          <h3>Wpisz tytuł przepisu</h3>
          <TitleOfRecipe
            onInputChangeHandler={this.onInputChangeHandler('title')}
            title={this.state.title}
          />
          <br />
          <h3>Składniki</h3>
          <Ingredients
            onInputChangeHandler={this.onInputChangeHandler('ingredients')}
            ingredients={this.state.ingredients}
          />
          <h3>Przygotowanie</h3>
          <Description
            onInputChangeHandler={this.onInputChangeHandler('description')}
            description={this.state.description}
          />
          <h3>Wartość energetyczna</h3>
          <NutritiveValue
            nutritiveValue={this.state.nutritiveValue}
            onInputChangeHandler={this.onInputChangeHandler('nutritiveValue')}
          />
          <br />
          <Label />
          <Button color="blue" style={styles.button} fullWidth={true} onClick={this.onSaveClicker}>Zapisz</Button>
        </div>
      </Paper>
    )
  }
}

export default AddRecipeContainer
