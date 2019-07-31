import React, {useContext} from 'react'
import RecipeList from './RecipeList'
import {RecipeContext} from './RecipeContext'

const Recipe = () => {
  const [recipes, getRecipes, search, setSearch] = useContext(RecipeContext)

  const handleChangeSearch = (e) => {
    setSearch(e.target.value)
  }

  const handleSubmitSearch = e => {
    e.preventDefault();
    getRecipes();
    setSearch('');
  }
  return(
    <React.Fragment>
    <h1>FOOD RECIPES! FINDING BEST RECIPE!</h1>
    <form className="search-form" onSubmit={handleSubmitSearch}>
      <p className="search__p">#banana #blueberry #tomato #onion</p>
      <input type="text" className="search-bar" value={search} onChange={handleChangeSearch}/>
      <button type="submit" className="search-btn">Search</button>
    </form>
    <div className="App-box">      
      {recipes.map(recipe => (
        <RecipeList key={recipe.recipe.label} title={recipe.recipe.label} image={recipe.recipe.image} calories={recipe.recipe.calories} ingredients={recipe.recipe.ingredients}/>
      ))}
    </div>
    </React.Fragment>
  );
}

export default Recipe