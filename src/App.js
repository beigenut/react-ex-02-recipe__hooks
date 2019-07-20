import React from 'react';
import Recipe from './Recipe'
import {RecipeProvider} from './RecipeContext'
import './index.css';

const App = () => {
  
  return (
    <RecipeProvider>
      <div className="App">
        <Recipe />
      </div>
    </RecipeProvider>
  );
}

export default App;
