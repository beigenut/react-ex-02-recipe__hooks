import React, { useEffect, useState } from 'react';
import Recipe from './Recipe'
import './index.css';

const App = () => {
  const APP_ID = "b56ee0f5";
  const APP_KEY = "eeac782b73b58fa77e2aabd7bcb282d4";
  // recipes 라는 변수 명으로 setRecipes 는 함수명으로 state 저장
  const [recipes, setRecipes] = useState([]) // chrome react 대브탭에 보면 hooks 내용으로 state 들어가 있음

  useEffect(() => {
    getRecipes()  
  }, [])  // , [] 빈 배열 -> 마운트때 첫회만 실행. 배열 다른 값 -> 해당 변수가 변동될때마다 실행 

  const getRecipes = async () => {
    const res = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await res.json();
    setRecipes(data.hits); // 받아온 데이터 배열 state 에 저장

    console.log(data.hits);
    console.log(data.hits[0].recipe.source);
  }

  return (
    <div className="App">
      <form className="search-form">
        <input type="text" className="search-bar"/>
        <button type="submit" className="search-btn">Search</button>
      </form>
      <h1>Hello!</h1>
      {recipes.map(recipe => (
        <Recipe title={recipe.recipe.label} image={recipe.recipe.image} calories={recipe.recipe.calories}/>
      ))}
    </div>
  );
}

export default App;
