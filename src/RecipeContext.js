import React, {createContext,  useState, useEffect} from 'react'

export const RecipeContext = createContext();

export const RecipeProvider = (props) => {
  // React Hook!
  // In a function component, we have no this, so we can’t assign or read this.state. 
  // Instead, we call the useState Hook directly inside our component:
  // const [count, setCount] = useState(0);
  // this.state.count = count   
  // onClick={() => this.setState({count: this.state.count + 1})} -> {() => setCount(count + 1)}

  // recipes 라는 변수 명으로 setRecipes 는 함수명으로 state 저장
  const [recipes, setRecipes] = useState([]) // chrome react 대브탭에 보면 hooks 내용으로 state 들어가 있음
  // useState("...") 함수 안 아규먼트 값을 {recipes: ...} 값으로 넣어라
  const [search, setSearch] = useState('chicken');

  // 기존 componentDidMount, componentDidUpdate, componentWillUnmount  컴비네이션
  useEffect(() => {
    getRecipes()
  }, []) // , [] 빈 배열 -> componentDidMount마운트때 첫회만 실행. 배열 다른 값 -> 해당 변수가 변동될때마다 실행 

  const apiID = process.env.REACT_APP_ID;
  const apiKEY = process.env.REACT_APP_KEY;
  const getRecipes = async () => {
    const res = await fetch(`https://api.edamam.com/search?q=${search}&app_id=${apiID}&app_key=${apiKEY}`);
    const data = await res.json();
    setRecipes(data.hits); // 받아온 데이터 배열 state 에 저장
    // this.setState({recipes: data.hits}) 기존 스테이트
    // console.log(data.hits);
  }
  return (
    <RecipeContext.Provider value={[recipes, getRecipes, search, setSearch]}>
      {props.children}
    </RecipeContext.Provider>
  )
}
