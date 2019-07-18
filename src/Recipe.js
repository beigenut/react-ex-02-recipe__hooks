import React from 'react'
 
// const Recipe = ({title, image, calories}) => {
const Recipe = (props) => {
  const {title, image, calories, ingredients } = props
  return (
    <div className="recipe-box">
      <span>{title}</span>
      <ul>
        {ingredients.map(i => (
          <li className="recipe-list">{i.text}</li>
        ))}
      </ul>
      <p className="recipe-cal">{calories.toFixed(2)}</p>
      <div className="img-box">
      <img src={image}/>
      </div>
    </div>
  )
}

export default Recipe