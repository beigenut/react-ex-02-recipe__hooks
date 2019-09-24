<p align="center">
  <h3 align="center">https://github.com/beigenut/react-ex-02-recipe</h3>
  <p align="center">
  Simple CookBook web application using `React Hook`. <br>
  <a href="https://react-ex-02-recipe.netlify.com" target="_blank"> View website</a>
</p>
</p>

_ _ _


## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* Getting Started
  * [Prerequisites](#prerequisites)
* [Usage](#usage)
* [Contributing](#contributing)
* [Contact](#contact)

## About The Project

<img src="https://drive.google.com/uc?export=view&id=1XPmEYK9eMVHb1-2eBhpUcCrChM3qd3DO" width="800px">

Load variaty Recipes from edamam.com SearchAPI. This plain application was developed to study `React Hook.`


### Built With
* [React](https://reactjs.org/)
* [data from EdamamAPI](https://api.edamam.com)
* [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
* [Netlify](https://netlify.com)
* [React-dom](https://www.npmjs.com/package/react-dom)


<!-- GETTING STARTED -->
## Getting Started

### Prerequisites
 
`npm i react-create-app node-sass `

<!-- USAGE EXAMPLES -->
## Usage

`RecipeContext.js`

Exported two different Components.

```js
export const RecipeContext = createContext(); // more like Consumer..
export const RecipeProvider = (props) => { return() } // more like Provider with value property
```

In RecipeProvider component, used useState() method to control the states. 

```js
const [recipes, setRecipes] = useState([])
```

`App.js`

To use props from Provider, wrap `Recipe` component with `RecipeProvider` components from RecipeContext.js.

```js
<RecipeProvider>
  <Recipe />
</RecipeProvider>
```

`Recipe.js`

```js
import React, {useContext} from 'react'
import {RecipeContext} from './RecipeContext'
//... const recipe = () => {
const [recipes, getRecipes, search, setSearch] = useContext(RecipeContext)
//...}
```

Now available to use `states` from RecipeContext.js.

<br></br>

In fact, while studying React Hook, I got more confused by the name of the method. 

`useState()` is similar to setState() before.

For 'useContext', it would have more obvious if it would named as 'useState'.



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- CONTACT -->
## Contact

Project Link: [https://github.com/beigenut/react-ex-02-recipe__hooks](https://github.com/beigenut/react-ex-02-recipe__hooks)



