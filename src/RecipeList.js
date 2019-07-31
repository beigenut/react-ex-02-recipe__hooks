import React from 'react'


// const Recipe = ({title, image, calories}) => {
const RecipeList = (props) => {
  const {title, image, ingredients, calories} = props
  
  return (
    <div className="recipe-box">
      <div className="img-box">
        <img src={image}/>
      </div>
      <span>{title}</span>
      <ul>
        {ingredients.map(i => (
          <li className="recipe-list">{i.text}</li>
        ))}
      </ul>
      <p className="recipe-cal">{calories.toFixed(2)}</p>
    </div>
  )
}

export default RecipeList