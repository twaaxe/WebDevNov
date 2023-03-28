// import React from 'react'
import Footer from './component/footer'
import Header from './component/header'
import Newsfeed from './component/newsfeed'



function App() {
  const handleInput = (e) => {
    console.log(e.key) // afche lettre pat lettre
    console.log(e.target.value) // += e.value
  }
  return (
    <div>
      <Header/>
      <Newsfeed/>
      <input type='text' onKeyDown={handleInput}/>
    {/* {
        for(let x = 0; x<10;x++){
        }
    } */}
    {/* forEach or map other array methods */}
    {/* {
        if(true){
            console.log('blabla')
        }
    } */}

    {
        true? 'yes':'no'
    }
      <Footer/>
    </div>
  )
}

export default App



const handleInput = (e) => {
  console.log(e.key) // affiche lettre pat lettre
  console.log(e.target.value) // += e.value
}